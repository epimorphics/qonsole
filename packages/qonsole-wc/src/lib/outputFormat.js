// DESCRIBE and CONSTRUCT return RDF graphs, which have no table form, so
// the table format is switched to plain text for them
export function checkOutputFormat(queryText, currentFormat) {
  if (currentFormat !== 'tsv') return currentFormat
  const lines = queryText.split('\n')
  const isLeaderLine = (line) => /(^\s*@?prefix)|(^\s*#)|(^\s*$)/i.test(line)
  while (lines.length && isLeaderLine(lines[0])) lines.shift()
  const body = lines.join('\n')
  if (/^\s*(describe|construct)\b/i.test(body)) return 'text'
  return currentFormat
}
