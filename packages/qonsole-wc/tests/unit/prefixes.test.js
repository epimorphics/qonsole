import { describe, it, expect, vi, afterEach } from 'vitest'
import {
  assemblePrefixesFromQuery,
  lookupPrefixCC,
  queryLeader,
  renderPrefixes,
  stripLeader,
  updatePrefixDeclaration,
} from '../../src/lib/prefixes.js'

const OWL = 'http://www.w3.org/2002/07/owl#'
const RDFS = 'http://www.w3.org/2000/01/rdf-schema#'
const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'

describe('queryLeader', () => {
  it('splits prefixes, comments and blank lines from the query body', () => {
    const query = `# Lists classes\nprefix owl: <${OWL}>\n\nSELECT * WHERE {}`
    expect(queryLeader(query)).toEqual([
      `# Lists classes\nprefix owl: <${OWL}>\n`,
      'SELECT * WHERE {}',
    ])
  })

  it('matches PREFIX case-insensitively and Turtle-style @prefix', () => {
    const query = `PREFIX owl: <${OWL}>\n@prefix rdfs: <${RDFS}> .\nSELECT`
    expect(queryLeader(query)[1]).toBe('SELECT')
  })

  it('stops at the first body line, so later prefix lines stay in the body', () => {
    const query = `SELECT\nprefix owl: <${OWL}>`
    expect(queryLeader(query)).toEqual(['', query])
  })

  it('returns an empty leader for a query with none', () => {
    expect(queryLeader('ASK {}')).toEqual(['', 'ASK {}'])
  })
})

describe('stripLeader', () => {
  it('removes prefix lines and the blank lines before the body', () => {
    expect(stripLeader(`prefix owl: <${OWL}>\n\nSELECT`)).toBe('SELECT')
  })

  it('keeps comments, which example queries use to describe themselves', () => {
    const query = `prefix owl: <${OWL}>\n# Lists classes\nSELECT`
    expect(stripLeader(query)).toBe('# Lists classes\nSELECT')
  })

  it('drops blank lines before the first kept comment', () => {
    const query = `prefix owl: <${OWL}>\n\n# Lists classes\n\nSELECT`
    expect(stripLeader(query)).toBe('# Lists classes\n\nSELECT')
  })

  it('leaves a query without a leader unchanged', () => {
    expect(stripLeader('SELECT * WHERE {}')).toBe('SELECT * WHERE {}')
  })
})

describe('assemblePrefixesFromQuery', () => {
  it('parses SPARQL and Turtle prefix declarations in the leader', () => {
    const query = [
      `PREFIX owl: <${OWL}>`,
      `prefix rdfs:<${RDFS}>`,
      `@prefix ex: <http://example.org/> .`,
      'SELECT',
    ].join('\n')
    expect(assemblePrefixesFromQuery(query)).toEqual([
      { name: 'owl', uri: OWL },
      { name: 'rdfs', uri: RDFS },
      { name: 'ex', uri: 'http://example.org/' },
    ])
  })

  it('parses the empty prefix and names with hyphens', () => {
    const query =
      'prefix : <http://example.org/>\nprefix my-ns: <http://my/>\nSELECT'
    expect(assemblePrefixesFromQuery(query)).toEqual([
      { name: '', uri: 'http://example.org/' },
      { name: 'my-ns', uri: 'http://my/' },
    ])
  })

  it('skips malformed declarations', () => {
    const query = 'prefix owl <no-colon>\nprefix rdfs: no-brackets\nSELECT'
    expect(assemblePrefixesFromQuery(query)).toEqual([])
  })

  it('ignores declarations after the start of the body', () => {
    expect(assemblePrefixesFromQuery(`SELECT\nprefix owl: <${OWL}>`)).toEqual(
      []
    )
  })
})

describe('renderPrefixes', () => {
  it('renders one SPARQL prefix declaration per line', () => {
    expect(
      renderPrefixes([
        { name: 'owl', uri: OWL },
        { name: '', uri: 'http://example.org/' },
      ])
    ).toBe(`prefix owl: <${OWL}>\nprefix : <http://example.org/>`)
  })

  it('renders nothing for no prefixes', () => {
    expect(renderPrefixes([])).toBe('')
  })
})

describe('updatePrefixDeclaration', () => {
  const query = `prefix owl: <${OWL}>\nprefix rdfs: <${RDFS}>\n\nSELECT`

  it('removes the declaration when the prefix is unchecked', () => {
    expect(updatePrefixDeclaration('owl', OWL, false, query)).toBe(
      `prefix rdfs: <${RDFS}>\n\nSELECT`
    )
  })

  it('adds the declaration after the existing ones when checked', () => {
    expect(updatePrefixDeclaration('rdf', RDF, true, query)).toBe(
      `prefix owl: <${OWL}>\nprefix rdfs: <${RDFS}>\nprefix rdf: <${RDF}>\n\nSELECT`
    )
  })

  it('adds the declaration at the top of a query without any', () => {
    expect(updatePrefixDeclaration('owl', OWL, true, 'SELECT')).toBe(
      `prefix owl: <${OWL}>\nSELECT`
    )
  })

  it('adds the declaration above a leading comment', () => {
    expect(updatePrefixDeclaration('owl', OWL, true, '# About\nSELECT')).toBe(
      `prefix owl: <${OWL}>\n# About\nSELECT`
    )
  })

  it('does not duplicate a declaration that is already there', () => {
    expect(updatePrefixDeclaration('owl', OWL, true, query)).toBe(query)
  })

  it('leaves the query alone when removing an absent declaration', () => {
    expect(updatePrefixDeclaration('rdf', RDF, false, query)).toBe(query)
  })

  it('handles the empty prefix', () => {
    const withEmpty = 'prefix : <http://example.org/>\nSELECT'
    expect(
      updatePrefixDeclaration('', 'http://example.org/', false, withEmpty)
    ).toBe('SELECT')
  })

  it('does not mistake a prefix for a longer one it starts', () => {
    expect(updatePrefixDeclaration('rdf', RDF, false, query)).toBe(query)
  })

  // Known bug: the match is case-sensitive, so a query typed with upper-case
  // PREFIX keeps the declaration when unchecked, and gets a duplicate when
  // checked
  it.fails('removes an upper-case PREFIX declaration', () => {
    expect(
      updatePrefixDeclaration('owl', OWL, false, `PREFIX owl: <${OWL}>\nSELECT`)
    ).toBe('SELECT')
  })

  it.fails('does not duplicate an upper-case PREFIX declaration', () => {
    const upper = `PREFIX owl: <${OWL}>\nSELECT`
    expect(updatePrefixDeclaration('owl', OWL, true, upper)).toBe(upper)
  })
})

describe('lookupPrefixCC', () => {
  afterEach(() => vi.unstubAllGlobals())

  function stubFetch(response) {
    const fetch = vi.fn().mockResolvedValue(response)
    vi.stubGlobal('fetch', fetch)
    return fetch
  }

  it('returns the URI prefix.cc has for the prefix', async () => {
    const fetch = stubFetch({ ok: true, json: async () => ({ owl: OWL }) })
    await expect(lookupPrefixCC('owl')).resolves.toBe(OWL)
    expect(fetch).toHaveBeenCalledWith('https://prefix.cc/owl.file.json')
  })

  it('returns null when prefix.cc has no entry for it', async () => {
    stubFetch({ ok: true, json: async () => ({}) })
    await expect(lookupPrefixCC('nope')).resolves.toBeNull()
  })

  it('throws when prefix.cc answers with an error status', async () => {
    stubFetch({ ok: false, status: 404 })
    await expect(lookupPrefixCC('nope')).rejects.toThrow('404')
  })
})
