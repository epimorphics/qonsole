// Cell value types for ResultsPane to render safely without innerHTML
// { type: 'uri', href, display }
// { type: 'typed', value, datatype }
// { type: 'langTagged', value, lang }
// { type: 'qname' | 'literal', value }

function toQName(prefixMap, uri) {
  let u = uri
  if (u.startsWith('<')) u = u.slice(1, -1)

  let best = uri
  for (const [prefix, prefURI] of Object.entries(prefixMap)) {
    if (u.startsWith(prefURI)) {
      const qname = `${prefix}:${u.slice(prefURI.length)}`
      if (qname.length < best.length) best = qname
    }
  }
  return best
}

function parseCell(v, prefixMap) {
  if (typeof v === 'number' || !isNaN(parseFloat(v))) {
    return { type: 'literal', value: String(parseFloat(v)) }
  }

  const typedMatch = v.match(/^"*([^\\^"]*)"*\^\^<*(.*)>*$/m)
  if (typedMatch && v.includes('^^')) {
    return { type: 'typed', value: typedMatch[1], datatype: typedMatch[2] }
  }

  const langMatch = v.match(/^"(.*)"@([^@]*)$/)
  if (langMatch) {
    return { type: 'langTagged', value: langMatch[1], lang: langMatch[2] }
  }

  const shortened = toQName(prefixMap, v)

  if (v.match(/^<https?:/)) {
    const href = v.slice(1, -1)
    return {
      type: 'uri',
      href,
      display: shortened.startsWith('<') ? shortened.slice(1, -1) : shortened,
    }
  }

  return {
    type: shortened === v ? 'literal' : 'qname',
    value: shortened.startsWith('<') ? shortened.slice(1, -1) : shortened,
  }
}

export function parseAsTable(rawTsv, prefixMap = {}) {
  const lines = rawTsv.split('\n').filter((l) => l.trim() !== '')
  if (lines.length === 0) return { headers: [], rows: [], count: 0 }

  const headers = lines.shift().replace(/\?/g, '').split('\t')
  const rows = lines.map((line) =>
    line.split('\t').map((cell) => parseCell(cell.trim(), prefixMap))
  )

  return { headers, rows, count: rows.length }
}

export function parseAsCode(rawText, format) {
  if (format === 'json') {
    let parsed, json
    try {
      if (typeof rawText === 'string') {
        parsed = JSON.parse(rawText)
        json = rawText
      } else {
        parsed = rawText
        json = JSON.stringify(rawText, null, 2)
      }
      const count = parsed?.results?.bindings?.length ?? 1
      return { data: json, mime: 'application/json', count }
    } catch {
      return { data: String(rawText), mime: 'application/json', count: 1 }
    }
  }

  if (format === 'xml') {
    let xml =
      typeof rawText === 'string'
        ? rawText
        : new XMLSerializer().serializeToString(rawText)
    let count = 1
    try {
      const doc =
        typeof rawText === 'string'
          ? new DOMParser().parseFromString(rawText, 'application/xml')
          : rawText
      const results = doc.querySelector('results')
      count = results ? results.children.length : 1
    } catch {
      /* ignore */
    }
    return { data: xml, mime: 'application/xml', count }
  }

  // text/plain
  const isTabular = rawText.match(/^----/)
  const count = isTabular ? rawText.split('\n').length - 5 : 1
  return { data: String(rawText), mime: 'text/plain', count }
}
