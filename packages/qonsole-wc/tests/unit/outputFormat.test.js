import { describe, it, expect } from 'vitest'
import { checkOutputFormat } from '../../src/lib/outputFormat.js'

describe('checkOutputFormat', () => {
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
