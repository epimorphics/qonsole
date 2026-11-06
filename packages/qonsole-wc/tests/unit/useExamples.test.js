// @vitest-environment happy-dom
// (checkForURLQuery reads window.location and sessionStorage)
import { describe, it, expect, vi, afterEach } from 'vitest'
import { useExamples } from '../../src/composables/useExamples.js'

describe('initExamples', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('copies the configured examples rather than changing them', async () => {
    const config = [{ name: 'A', query: 'SELECT' }]
    const { examples, initExamples } = useExamples()
    await initExamples(config)

    expect(examples.value).toEqual(config)
    expect(examples.value[0]).not.toBe(config[0])
  })

  it('normalises \\r\\n and \\r line endings to \\n', async () => {
    const { examples, initExamples } = useExamples()
    await initExamples([
      { name: 'CRLF', query: '# a\r\nSELECT' },
      { name: 'CR', query: '# a\rSELECT' },
    ])

    expect(examples.value.map((ex) => ex.query)).toEqual([
      '# a\nSELECT',
      '# a\nSELECT',
    ])
  })

  it('fetches the query of an example that has only a queryURL', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, text: async () => 'SELECT\r\n' })
    vi.stubGlobal('fetch', fetch)
    const { examples, initExamples } = useExamples()
    await initExamples([{ name: 'Remote', queryURL: '/q.rq' }])

    expect(fetch).toHaveBeenCalledWith('/q.rq')
    expect(examples.value[0].query).toBe('SELECT\n')
  })

  it('prefers an inline query over its queryURL', async () => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)
    const { examples, initExamples } = useExamples()
    await initExamples([{ name: 'Both', query: 'ASK {}', queryURL: '/q.rq' }])

    expect(fetch).not.toHaveBeenCalled()
    expect(examples.value[0].query).toBe('ASK {}')
  })

  it('shows "Not found" as the query when the queryURL answers with an error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, status: 404 })
    )
    const { examples, initExamples } = useExamples()
    await initExamples([{ name: 'Missing', queryURL: '/missing.rq' }])

    expect(examples.value[0].query).toBe('Not found: /missing.rq')
  })

  it('shows "Not found" as the query when the queryURL cannot be fetched', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new TypeError('Failed to fetch'))
    )
    const { examples, initExamples } = useExamples()
    await initExamples([{ name: 'Offline', queryURL: '/q.rq' }])

    expect(examples.value[0].query).toBe('Not found: /q.rq')
  })
})

describe('checkForURLQuery', () => {
  afterEach(() => {
    // Restore first: a test replaces the sessionStorage getter with one that throws
    vi.restoreAllMocks()
    window.history.replaceState(null, '', '/')
    window.sessionStorage.clear()
  })

  function visit(search) {
    window.history.replaceState(null, '', `/${search}`)
  }

  it('ignores the URL unless queries from the URL are allowed', () => {
    visit('?query=SELECT')
    expect(useExamples().checkForURLQuery(false)).toBeNull()
  })

  it('reads ?query=, as in qonsole v1', () => {
    visit(`?query=${encodeURIComponent('SELECT * {}')}`)
    expect(useExamples().checkForURLQuery(true)).toBe('SELECT * {}')
  })

  it('reads ?q=, as qonsole-rails did', () => {
    visit('?q=ASK%20%7B%7D')
    expect(useExamples().checkForURLQuery(true)).toBe('ASK {}')
  })

  it('prefers ?query= over ?q=', () => {
    visit('?q=ASK&query=SELECT')
    expect(useExamples().checkForURLQuery(true)).toBe('SELECT')
  })

  it('returns null when the URL has no query', () => {
    visit('?other=1')
    expect(useExamples().checkForURLQuery(true)).toBeNull()
  })

  it('reads ?query=_localstore from session storage', () => {
    window.sessionStorage.setItem('qonsole.query', 'SELECT long')
    visit('?query=_localstore')
    expect(useExamples().checkForURLQuery(true)).toBe('SELECT long')
  })

  it('returns null for ?query=_localstore when nothing is stored', () => {
    visit('?query=_localstore')
    expect(useExamples().checkForURLQuery(true)).toBeNull()
  })

  it('returns null for ?query=_localstore when storage is blocked', () => {
    vi.spyOn(window, 'sessionStorage', 'get').mockImplementation(() => {
      throw new DOMException('Blocked', 'SecurityError')
    })
    visit('?query=_localstore')
    expect(useExamples().checkForURLQuery(true)).toBeNull()
  })
})
