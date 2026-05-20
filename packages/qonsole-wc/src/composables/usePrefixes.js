import { ref } from 'vue'

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

  // Parse prefix declarations out of the leader of a query body
  function assemblePrefixesFromQuery(queryBody) {
    const [leader] = queryLeader(queryBody)
    const leaderLines = leader.split('\n')
    const prefixLines = leaderLines.filter((line) => /prefix/i.test(line))
    return prefixLines
      .map((line) => {
        const parts = line.split(/@?prefix\s+/i)
        if (parts.length < 2) return null
        const m = parts[1].match(/^\s*([\w-]*)\s*:\s*<([^>]*)>\s*\.?\s*$/)
        if (!m) return null
        return { name: m[1], uri: m[2] }
      })
      .filter(Boolean)
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

  // Render prefix array to SPARQL prefix block
  function renderPrefixes(prefixes) {
    return prefixes.map((p) => `prefix ${p.name}: <${p.uri}>`).join('\n')
  }

  // Split query into [leader, body]
  function queryLeader(query) {
    const isLeaderLine = (line) => /(^\s*@?prefix)|(^\s*#)|(^\s*$)/i.test(line)
    const lines = query.split('\n')
    const leaderLines = []
    while (lines.length && isLeaderLine(lines[0])) {
      leaderLines.push(lines.shift())
    }
    return [leaderLines.join('\n'), lines.join('\n')]
  }

  function stripLeader(query) {
    return queryLeader(query)[1]
  }

  // Add or remove a prefix declaration line in a query string
  function updatePrefixDeclaration(prefix, uri, added, queryText) {
    const lines = queryText.split('\n')
    const pattern = new RegExp(`^prefix +${prefix}:`)
    let found = false

    for (let i = 0; !found && i < lines.length; i++) {
      found = pattern.test(lines[i])
      if (found && !added) {
        lines.splice(i, 1)
      }
    }

    if (!found && added) {
      for (let i = 0; i < lines.length; i++) {
        if (!/^prefix/i.test(lines[i])) {
          lines.splice(i, 0, `prefix ${prefix}: <${uri}>`)
          break
        }
      }
    }

    return lines.join('\n')
  }

  // Return { name: uri } map for QName shortening
  function parsedPrefixMap() {
    return Object.fromEntries(prefixList.value.map((p) => [p.name, p.uri]))
  }

  async function lookupPrefixCC(prefix) {
    const res = await fetch(`https://prefix.cc/${prefix}.file.json`)
    if (!res.ok) throw new Error(`prefix.cc lookup failed: ${res.status}`)
    const data = await res.json()
    return data[prefix] || null
  }

  return {
    prefixList,
    initPrefixes,
    addOrUpdatePrefix,
    setActive,
    syncPrefixButtonState,
    assemblePrefixes,
    assemblePrefixesFromQuery,
    renderPrefixes,
    queryLeader,
    stripLeader,
    updatePrefixDeclaration,
    parsedPrefixMap,
    lookupPrefixCC,
  }
}
