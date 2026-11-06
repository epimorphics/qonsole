// Prefix handling on query text. Stateless: the checkbox state lives in
// composables/usePrefixes.js

// Parse prefix declarations out of the leader of a query body
export function assemblePrefixesFromQuery(queryBody) {
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

// Render prefix array to SPARQL prefix block
export function renderPrefixes(prefixes) {
  return prefixes.map((p) => `prefix ${p.name}: <${p.uri}>`).join('\n')
}

// Split query into [leader, body]
export function queryLeader(query) {
  const isLeaderLine = (line) => /(^\s*@?prefix)|(^\s*#)|(^\s*$)/i.test(line)
  const lines = query.split('\n')
  const leaderLines = []
  while (lines.length && isLeaderLine(lines[0])) {
    leaderLines.push(lines.shift())
  }
  return [leaderLines.join('\n'), lines.join('\n')]
}

// Remove the prefix declarations from the leader, keeping any comments
// (example queries use them to describe themselves)
export function stripLeader(query) {
  const [leader, body] = queryLeader(query)
  const kept = leader.split('\n').filter((line) => !/^\s*@?prefix/i.test(line))
  while (kept.length && /^\s*$/.test(kept[0])) kept.shift()
  return kept.length ? `${kept.join('\n')}\n${body}` : body
}

// Add or remove a prefix declaration line in a query string
export function updatePrefixDeclaration(prefix, uri, added, queryText) {
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

export async function lookupPrefixCC(prefix) {
  const res = await fetch(`https://prefix.cc/${prefix}.file.json`)
  if (!res.ok) throw new Error(`prefix.cc lookup failed: ${res.status}`)
  const data = await res.json()
  return data[prefix] || null
}
