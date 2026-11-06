import { describe, it, expect, vi, afterEach } from 'vitest'
import { useSparqlService } from '../../src/composables/useSparqlService.js'

const ENDPOINT = 'https://example.org/sparql'
const DURATION = /^\d+ min \d{1,2}\.\d{3} s$/

describe('checkOutputFormat', () => {
  const { checkOutputFormat } = useSparqlService()

  it('keeps the table format for a SELECT query', () => {
    expect(checkOutputFormat('SELECT * WHERE {}', 'tsv')).toBe('tsv')
  })

  it.each(['DESCRIBE <http://e/a>', 'CONSTRUCT { ?s ?p ?o } WHERE {}'])(
    'switches from table to plain text for %s',
    (query) => {
      expect(checkOutputFormat(query, 'tsv')).toBe('text')
    }
  )

  it('recognises the query form in lower case', () => {
    expect(checkOutputFormat('describe <http://e/a>', 'tsv')).toBe('text')
  })

  it('looks past prefixes, comments and blank lines', () => {
    const query = 'prefix ex: <http://e/>\n# Describe a thing\n\nDESCRIBE ex:a'
    expect(checkOutputFormat(query, 'tsv')).toBe('text')
  })

  it('does not match the keyword inside another word', () => {
    expect(checkOutputFormat('SELECT ?describer WHERE {}', 'tsv')).toBe('tsv')
  })

  it.each(['json', 'xml', 'text'])(
    'keeps a %s format the user chose',
    (format) => {
      expect(checkOutputFormat('DESCRIBE <http://e/a>', format)).toBe(format)
    }
  )
})

describe('execute', () => {
  afterEach(() => vi.unstubAllGlobals())

  function stubFetch(response) {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => '',
      ...response,
    })
    vi.stubGlobal('fetch', fetch)
    return fetch
  }

  describe('request', () => {
    it.each([
      ['tsv', 'text/tab-separated-values'],
      ['json', 'application/sparql-results+json'],
      ['xml', 'application/sparql-results+xml'],
      ['text', 'text/plain'],
    ])(
      'POSTs the query asking for %s with the Accept header',
      async (format, accept) => {
        const fetch = stubFetch()
        await useSparqlService().execute('SELECT * {}', ENDPOINT, format)

        const [url, init] = fetch.mock.calls[0]
        expect(url).toBe(ENDPOINT)
        expect(init.method).toBe('POST')
        expect(init.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: accept,
        })
      }
    )

    // A non-standard `output` parameter makes Virtuoso answer 406 (49823cb5)
    it('sends only the query in the body, without an output parameter', async () => {
      const fetch = stubFetch()
      await useSparqlService().execute('SELECT * {}', ENDPOINT, 'json')

      const body = fetch.mock.calls[0][1].body
      expect([...body.keys()]).toEqual(['query'])
      expect(body.get('query')).toBe('SELECT * {}')
    })
  })

  describe('results', () => {
    it('parses a table result, shortening URIs with the prefixes given', async () => {
      stubFetch({ text: async () => '?s\n<http://e/a>\n' })
      const service = useSparqlService()
      await service.execute('SELECT', ENDPOINT, 'tsv', { ex: 'http://e/' })

      expect(service.result.value).toEqual({
        kind: 'table',
        headers: ['s'],
        rows: [[{ type: 'uri', href: 'http://e/a', display: 'ex:a' }]],
        count: 1,
      })
      expect(service.resultCount.value).toBe(1)
      expect(service.error.value).toBeNull()
      expect(service.loading.value).toBe(false)
      expect(service.executionTime.value).toMatch(DURATION)
    })

    it('shows other formats as code', async () => {
      const body = '{"results":{"bindings":[{},{}]}}'
      stubFetch({ text: async () => body })
      const service = useSparqlService()
      await service.execute('SELECT', ENDPOINT, 'json')

      expect(service.result.value).toEqual({
        kind: 'code',
        data: body,
        mime: 'application/json',
        count: 2,
      })
      expect(service.resultCount.value).toBe(2)
    })

    it('reports loading while the query runs', async () => {
      let respond
      vi.stubGlobal(
        'fetch',
        vi.fn(() => new Promise((resolve) => (respond = resolve)))
      )
      const service = useSparqlService()
      const running = service.execute('SELECT', ENDPOINT, 'text')

      expect(service.loading.value).toBe(true)
      respond({ ok: true, text: async () => 'done' })
      await running
      expect(service.loading.value).toBe(false)
    })
  })

  describe('errors', () => {
    it('shows the error body the endpoint sent', async () => {
      stubFetch({
        ok: false,
        status: 400,
        text: async () => 'Parse error at line 1',
      })
      const service = useSparqlService()
      await service.execute('SELEC', ENDPOINT, 'tsv')

      expect(service.error.value).toBe('Parse error at line 1')
      expect(service.result.value).toBeNull()
      expect(service.resultCount.value).toBe(0)
      expect(service.executionTime.value).toMatch(DURATION)
      expect(service.loading.value).toBe(false)
    })

    it('falls back to the status when the error has no body', async () => {
      stubFetch({ ok: false, status: 503, statusText: 'Service Unavailable' })
      const service = useSparqlService()
      await service.execute('SELECT', ENDPOINT, 'tsv')

      expect(service.error.value).toBe('503 Service Unavailable')
    })

    it('shows a network failure', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockRejectedValue(new TypeError('Failed to fetch'))
      )
      const service = useSparqlService()
      await service.execute('SELECT', ENDPOINT, 'tsv')

      expect(service.error.value).toBe('Failed to fetch')
    })

    it('clears the previous result and error when run again', async () => {
      stubFetch({ ok: false, status: 500, text: async () => 'boom' })
      const service = useSparqlService()
      await service.execute('SELECT', ENDPOINT, 'text')
      stubFetch({ text: async () => 'ok' })
      await service.execute('SELECT', ENDPOINT, 'text')

      expect(service.error.value).toBeNull()
      expect(service.result.value.data).toBe('ok')
    })
  })

  describe('custom service', () => {
    it('passes the query, endpoint and format to the service', async () => {
      const execute = vi.fn((query, { success }) => success('done'))
      await useSparqlService().execute(
        'SELECT',
        ENDPOINT,
        'text',
        {},
        { execute }
      )

      expect(execute).toHaveBeenCalledWith(
        'SELECT',
        expect.objectContaining({ url: ENDPOINT, format: 'text' })
      )
    })

    it('does not call fetch', async () => {
      const fetch = stubFetch()
      const execute = (query, { success }) => success('done')
      await useSparqlService().execute(
        'SELECT',
        ENDPOINT,
        'text',
        {},
        { execute }
      )

      expect(fetch).not.toHaveBeenCalled()
    })

    it('renders the string the service passes to success', async () => {
      const service = useSparqlService()
      const custom = {
        execute: (q, { success }) => success('?s\n<http://e/a>\n'),
      }
      await service.execute('SELECT', ENDPOINT, 'tsv', {}, custom)

      expect(service.result.value.kind).toBe('table')
      expect(service.resultCount.value).toBe(1)
    })

    // v1 services passed a wrapper object with asText() and the raw value in _val
    it('unwraps a v1-style result object', async () => {
      const service = useSparqlService()
      const wrapped = { asText: () => 'unused', _val: 'raw text' }
      const custom = { execute: (q, { success }) => success(wrapped) }
      await service.execute('SELECT', ENDPOINT, 'text', {}, custom)

      expect(service.result.value.data).toBe('raw text')
    })

    it('shows the Error the service passes to error', async () => {
      const service = useSparqlService()
      const custom = {
        execute: (q, { error }) => error(new Error('Unauthorised')),
      }
      await service.execute('SELECT', ENDPOINT, 'tsv', {}, custom)

      expect(service.error.value).toBe('Unauthorised')
    })

    it('shows a string the service passes to error', async () => {
      const service = useSparqlService()
      const custom = { execute: (q, { error }) => error('Unauthorised') }
      await service.execute('SELECT', ENDPOINT, 'tsv', {}, custom)

      expect(service.error.value).toBe('Unauthorised')
    })
  })
})
