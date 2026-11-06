import { ref } from 'vue'
import { assemblePrefixesFromQuery } from '../lib/prefixes.js'

export function usePrefixes(initialPrefixMap) {
  // One per checkbox, in config order; all checked to begin with
  // { name: string, uri: string, active: boolean }[]
  const prefixList = ref(
    Object.entries(initialPrefixMap).map(([name, uri]) => ({
      name,
      uri,
      active: true,
    }))
  )

  function addOrUpdatePrefix(name, uri) {
    const existing = prefixList.value.find((p) => p.name === name)
    if (uri) {
      if (existing) {
        existing.uri = uri
        existing.active = true
      } else {
        prefixList.value.push({ name, uri, active: true })
      }
    } else {
      prefixList.value = prefixList.value.filter((p) => p.name !== name)
    }
  }

  function setActive(name, active) {
    const p = prefixList.value.find((p) => p.name === name)
    if (p) p.active = active
  }

  // Sync checkbox state to match a prefix array (e.g. from a loaded example)
  function syncPrefixButtonState(prefixes) {
    const names = new Set(prefixes.map((p) => p.name))
    prefixList.value.forEach((p) => {
      p.active = names.has(p.name)
    })
  }

  // The prefixes to show above an example query, as in qonsole v1:
  // - the ones the query declares itself, if it declares any
  // - else the ones the example's `prefixes` config names
  // - else the ones currently checked
  function assemblePrefixes(queryBody, queryDefinitionPrefixes) {
    if (/@?prefix\s/i.test(queryBody)) {
      return assemblePrefixesFromQuery(queryBody)
    }
    if (queryDefinitionPrefixes) {
      const map = currentPrefixMap()
      return queryDefinitionPrefixes
        .map((name) => ({ name, uri: map[name] }))
        .filter((p) => p.uri)
    }
    return prefixList.value.filter((p) => p.active)
  }

  // { name: uri } of every prefix, checked or not, for shortening URIs
  // in results to QNames
  function currentPrefixMap() {
    return Object.fromEntries(prefixList.value.map((p) => [p.name, p.uri]))
  }

  return {
    prefixList,
    addOrUpdatePrefix,
    setActive,
    syncPrefixButtonState,
    assemblePrefixes,
    currentPrefixMap,
  }
}
