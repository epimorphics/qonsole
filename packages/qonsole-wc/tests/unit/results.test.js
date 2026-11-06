// @vitest-environment happy-dom
// (parseAsCode uses DOMParser for XML results)
import { describe, it, expect } from 'vitest'
import { parseAsTable, parseAsCode } from '../../src/lib/results.js'

const XSD = 'http://www.w3.org/2001/XMLSchema#'

/** Parse a single TSV cell under a `?x` header */
function cell(value, prefixMap = {}) {
  return parseAsTable(`?x\n${value}\n`, prefixMap).rows[0][0]
}

describe('parseAsTable', () => {
  it('reads headers without their ? and counts the rows', () => {
    const table = parseAsTable(
      '?s\t?label\n<http://e/a>\t"A"\n<http://e/b>\t"B"\n'
    )
    expect(table.headers).toEqual(['s', 'label'])
    expect(table.rows).toHaveLength(2)
    expect(table.count).toBe(2)
  })

  it('ignores blank lines', () => {
    expect(parseAsTable('?x\n\n"a"\n\n').count).toBe(1)
  })

  it('returns an empty table for an empty response', () => {
    expect(parseAsTable('')).toEqual({ headers: [], rows: [], count: 0 })
  })

  it('returns no rows for a response with only headers', () => {
    expect(parseAsTable('?x\t?y\n')).toEqual({
      headers: ['x', 'y'],
      rows: [],
      count: 0,
    })
  })

  it('reads an unbound value as an empty literal', () => {
    const table = parseAsTable('?x\t?y\n"a"\t\n')
    expect(table.rows[0][1]).toEqual({ type: 'literal', value: '' })
  })
})

describe('parseAsTable cells', () => {
  describe('URIs', () => {
    it('links an http URI and shows it as a QName when a prefix matches', () => {
      expect(
        cell('<http://example.org/thing>', { ex: 'http://example.org/' })
      ).toEqual({
        type: 'uri',
        href: 'http://example.org/thing',
        display: 'ex:thing',
      })
    })

    it('shows the full URI without brackets when no prefix matches', () => {
      expect(cell('<https://example.org/thing>')).toEqual({
        type: 'uri',
        href: 'https://example.org/thing',
        display: 'https://example.org/thing',
      })
    })

    it('picks the shortest QName when several prefixes match', () => {
      const prefixes = {
        ex: 'http://example.org/',
        exa: 'http://example.org/a/',
      }
      expect(cell('<http://example.org/a/b>', prefixes).display).toBe('exa:b')
    })

    it('does not link a URI with another scheme', () => {
      expect(cell('<urn:isbn:123>')).toEqual({
        type: 'literal',
        value: 'urn:isbn:123',
      })
    })

    it('shows a non-http URI as a QName when a prefix matches', () => {
      expect(cell('<urn:isbn:123>', { isbn: 'urn:isbn:' })).toEqual({
        type: 'qname',
        value: 'isbn:123',
      })
    })

    it('never links a javascript: URI', () => {
      expect(cell('<javascript:alert(1)>').type).not.toBe('uri')
    })
  })

  describe('literals', () => {
    it('reads a plain string literal as is', () => {
      expect(cell('"hello"')).toEqual({ type: 'literal', value: '"hello"' })
    })

    it('reads a language-tagged literal', () => {
      expect(cell('"chat"@fr')).toEqual({
        type: 'langTagged',
        value: 'chat',
        lang: 'fr',
      })
    })

    it('reads a typed literal', () => {
      expect(cell(`"2024-01-01"^^<${XSD}date>`)).toMatchObject({
        type: 'typed',
        value: '2024-01-01',
      })
    })

    // Known bug: the greedy (.*) keeps the closing > in the datatype, which
    // shows in the cell's "Type: …" tooltip
    it.fails('reads the datatype of a typed literal without its brackets', () => {
      expect(cell(`"5"^^<${XSD}integer>`).datatype).toBe(`${XSD}integer`)
    })

    it('reads a bare integer', () => {
      expect(cell('42')).toEqual({ type: 'literal', value: '42' })
    })

    // Known bug, new in v2 (v1 showed the value as sent): numbers go through
    // parseFloat, which changes their lexical form or truncates other values
    // that start with a digit
    it.fails('keeps the lexical form of a bare decimal', () => {
      expect(cell('1.50').value).toBe('1.50')
    })

    it.fails('does not truncate a bare value that starts with digits', () => {
      expect(cell('2024-01-01').value).toBe('2024-01-01')
    })

    // Known bug: TSV escapes (\" \t \n \\) are shown escaped
    it.fails('unescapes quotes in a literal', () => {
      expect(cell('"say \\"hi\\""@en').value).toBe('say "hi"')
    })
  })
})

describe('parseAsCode', () => {
  describe('JSON', () => {
    const body = JSON.stringify({ results: { bindings: [{}, {}, {}] } })

    it('keeps the response text and counts the bindings', () => {
      expect(parseAsCode(body, 'json')).toEqual({
        data: body,
        mime: 'application/json',
        count: 3,
      })
    })

    it('counts an ASK result as one', () => {
      expect(parseAsCode('{"head":{},"boolean":true}', 'json').count).toBe(1)
    })

    it('pretty-prints an already-parsed object', () => {
      const parsed = { results: { bindings: [{}] } }
      expect(parseAsCode(parsed, 'json')).toEqual({
        data: JSON.stringify(parsed, null, 2),
        mime: 'application/json',
        count: 1,
      })
    })

    it('shows invalid JSON as is', () => {
      expect(parseAsCode('not json', 'json')).toEqual({
        data: 'not json',
        mime: 'application/json',
        count: 1,
      })
    })
  })

  describe('XML', () => {
    const body = `<?xml version="1.0"?>
<sparql xmlns="http://www.w3.org/2005/sparql-results#">
  <head><variable name="s"/></head>
  <results>
    <result><binding name="s"><uri>http://e/a</uri></binding></result>
    <result><binding name="s"><uri>http://e/b</uri></binding></result>
  </results>
</sparql>`

    it('keeps the response text and counts the results', () => {
      expect(parseAsCode(body, 'xml')).toEqual({
        data: body,
        mime: 'application/xml',
        count: 2,
      })
    })

    it('counts an ASK result as one', () => {
      const ask =
        '<sparql xmlns="http://www.w3.org/2005/sparql-results#"><head/><boolean>true</boolean></sparql>'
      expect(parseAsCode(ask, 'xml').count).toBe(1)
    })
  })

  describe('plain text', () => {
    it('counts the rows of a text table, less its border and header lines', () => {
      const table = [
        '-------',
        '| s   |',
        '=======',
        '| <a> |',
        '| <b> |',
        '-------',
        '',
      ].join('\n')
      expect(parseAsCode(table, 'text')).toEqual({
        data: table,
        mime: 'text/plain',
        count: 2,
      })
    })

    it('counts any other text, such as DESCRIBE output, as one', () => {
      expect(parseAsCode('<a> <b> <c> .', 'text').count).toBe(1)
    })
  })
})
