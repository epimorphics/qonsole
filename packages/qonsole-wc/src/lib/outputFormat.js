import { queryLeader } from './prefixes.js'

// DESCRIBE and CONSTRUCT return RDF graphs, which have no table form, so
// the table format is switched to plain text for them
export function checkOutputFormat(queryText, currentFormat) {
  if (currentFormat !== 'tsv') return currentFormat
  const [, body] = queryLeader(queryText)
  if (/^\s*(describe|construct)\b/i.test(body)) return 'text'
  return currentFormat
}
