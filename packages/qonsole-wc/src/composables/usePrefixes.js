import { ref } from 'vue'
import { assemblePrefixesFromQuery } from '../lib/prefixes.js'

export function usePrefixes(initialPrefixMap) {
  // { name: string, uri: string, active: boolean }[]
  const prefixList = ref([])

  function initPrefixes(prefixMap) {
    prefixList.value = Object.entries(prefixMap).map(([name, uri]) => ({
      name,
      uri,
      active: true,
    }))
  }

  initPrefixes(initialPrefixMap)

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

  // Three-strategy prefix assembly (mirrors original assemblePrefixes)
  function assemblePrefixes(queryBody, queryDefinitionPrefixes) {
    if (/@?prefix\s/i.test(queryBody)) {
      return assemblePrefixesFromQuery(queryBody)
    }
    if (queryDefinitionPrefixes) {
      const map = Object.fromEntries(
        prefixList.value.map((p) => [p.name, p.uri])
      )
      return queryDefinitionPrefixes
        .map((name) => ({ name, uri: map[name] }))
        .filter((p) => p.uri)
    }
    return prefixList.value.filter((p) => p.active)
  }

  // Return { name: uri } map for QName shortening
  function parsedPrefixMap() {
    return Object.fromEntries(prefixList.value.map((p) => [p.name, p.uri]))
  }

  return {
    prefixList,
    initPrefixes,
    addOrUpdatePrefix,
    setActive,
    syncPrefixButtonState,
    assemblePrefixes,
    parsedPrefixMap,
  }
}
