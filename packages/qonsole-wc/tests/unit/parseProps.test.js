import { describe, it, expect } from 'vitest'
import { parseJsonProp } from '../../src/composables/parseProps.js'

describe('parseJsonProp', () => {
  it('parses a JSON attribute value', () => {
    expect(parseJsonProp('{"a": 1}')).toEqual({ a: 1 })
  })

  it('passes an object set as a property through', () => {
    const value = { a: 1 }
    expect(parseJsonProp(value)).toBe(value)
  })

  it.each([null, undefined, ''])('returns the fallback for %j', (raw) => {
    expect(parseJsonProp(raw, [])).toEqual([])
  })

  it('defaults the fallback to an empty object', () => {
    expect(parseJsonProp('')).toEqual({})
  })

  // Invalid JSON is dropped without a warning, so a typo in an attribute
  // shows as missing config
  it('returns the fallback for invalid JSON', () => {
    expect(parseJsonProp('{not json}', [])).toEqual([])
  })
})
