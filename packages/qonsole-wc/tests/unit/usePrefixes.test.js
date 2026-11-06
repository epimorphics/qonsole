import { describe, it, expect } from 'vitest'
import { usePrefixes } from '../../src/composables/usePrefixes.js'

const OWL = 'http://www.w3.org/2002/07/owl#'
const RDFS = 'http://www.w3.org/2000/01/rdf-schema#'
const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'

function setup(map = { rdf: RDF, rdfs: RDFS, owl: OWL }) {
  return usePrefixes(map)
}

describe('prefix list state', () => {
  it('starts with every configured prefix active, in config order', () => {
    const { prefixList } = setup()
    expect(prefixList.value).toEqual([
      { name: 'rdf', uri: RDF, active: true },
      { name: 'rdfs', uri: RDFS, active: true },
      { name: 'owl', uri: OWL, active: true },
    ])
  })

  it('adds a new prefix as active', () => {
    const { prefixList, addOrUpdatePrefix } = setup({})
    addOrUpdatePrefix('ex', 'http://example.org/')
    expect(prefixList.value).toEqual([
      { name: 'ex', uri: 'http://example.org/', active: true },
    ])
  })

  it('updates the URI of an existing prefix and reactivates it', () => {
    const { prefixList, addOrUpdatePrefix, setActive } = setup({ owl: OWL })
    setActive('owl', false)
    addOrUpdatePrefix('owl', 'http://example.org/owl#')
    expect(prefixList.value).toEqual([
      { name: 'owl', uri: 'http://example.org/owl#', active: true },
    ])
  })

  it('removes a prefix when added with an empty URI', () => {
    const { prefixList, addOrUpdatePrefix } = setup()
    addOrUpdatePrefix('rdfs', '')
    expect(prefixList.value.map((p) => p.name)).toEqual(['rdf', 'owl'])
  })

  it('leaves the other prefixes alone when adding one', () => {
    const { prefixList, addOrUpdatePrefix, setActive } = setup()
    setActive('rdf', false)
    addOrUpdatePrefix('ex', 'http://example.org/')
    expect(prefixList.value.map((p) => [p.name, p.active])).toEqual([
      ['rdf', false],
      ['rdfs', true],
      ['owl', true],
      ['ex', true],
    ])
  })

  it('ignores setActive for an unknown prefix', () => {
    const { prefixList, setActive } = setup()
    setActive('nope', false)
    expect(prefixList.value.every((p) => p.active)).toBe(true)
  })

  it('syncs checkbox state to exactly the given prefixes', () => {
    const { prefixList, syncPrefixButtonState } = setup()
    syncPrefixButtonState([{ name: 'owl', uri: OWL }])
    expect(prefixList.value.map((p) => [p.name, p.active])).toEqual([
      ['rdf', false],
      ['rdfs', false],
      ['owl', true],
    ])
  })

  it('returns a name to URI map of all prefixes, active or not', () => {
    const { currentPrefixMap, setActive } = setup({ owl: OWL, rdfs: RDFS })
    setActive('owl', false)
    expect(currentPrefixMap()).toEqual({ owl: OWL, rdfs: RDFS })
  })
})

describe('assemblePrefixes', () => {
  it('uses the prefixes declared in the query when there are any', () => {
    const { assemblePrefixes } = setup()
    const query = 'prefix ex: <http://example.org/>\nSELECT'
    expect(assemblePrefixes(query, ['owl'])).toEqual([
      { name: 'ex', uri: 'http://example.org/' },
    ])
  })

  it("otherwise looks up the example's prefix names, dropping unknown ones", () => {
    const { assemblePrefixes } = setup()
    expect(assemblePrefixes('SELECT', ['owl', 'unknown', 'rdfs'])).toEqual([
      { name: 'owl', uri: OWL },
      { name: 'rdfs', uri: RDFS },
    ])
  })

  it('otherwise uses the active prefixes', () => {
    const { assemblePrefixes, setActive } = setup()
    setActive('rdf', false)
    expect(assemblePrefixes('SELECT').map((p) => p.name)).toEqual([
      'rdfs',
      'owl',
    ])
  })
})
