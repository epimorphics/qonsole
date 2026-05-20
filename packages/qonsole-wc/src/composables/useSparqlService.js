import { ref } from 'vue'
import { parseAsTable, parseAsCode } from './useResultsRenderer.js'

const ACCEPT_HEADERS = {
  tsv:  'text/tab-separated-values',
  json: 'application/sparql-results+json',
  xml:  'application/sparql-results+xml',
  text: 'text/plain',
}

export function useSparqlService() {
  const loading = ref(false)
  const error = ref(null)
  const executionTime = ref(null)
  const resultCount = ref(null)
  const result = ref(null)

  function checkOutputFormat(queryText, currentFormat) {
    if (currentFormat !== 'tsv') return currentFormat
    const bodyMatch = queryText.match(/\@?prefix[^]*?\n+([\s\S]*)/)
    const body = bodyMatch ? bodyMatch[1] : queryText
    if (/^\s*(describe|construct)\b/i.test(body.trim())) return 'text'
    return currentFormat
  }

  async function execute(queryText, endpointUrl, format, prefixMap = {}, customService = null) {
    loading.value = true
    error.value = null
    result.value = null
    resultCount.value = null

    const t0 = performance.now()

    try {
      let rawData

      if (customService) {
        // Adapter for the legacy callback-based service API
        rawData = await new Promise((resolve, reject) => {
          customService.execute(queryText, {
            url: endpointUrl,
            format,
            success: (res) => resolve(typeof res.asText === 'function' ? res._val : res),
            error: (err) => reject(err),
          })
        })
      } else {
        const params = new URLSearchParams({ query: queryText, output: format })
        const res = await fetch(endpointUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: ACCEPT_HEADERS[format] || 'text/plain',
          },
          body: params,
        })

        if (!res.ok) {
          const text = await res.text()
          throw new Error(text || `${res.status} ${res.statusText}`)
        }

        rawData = await res.text()
      }

      const elapsed = performance.now() - t0
      const totalMs = Math.round(elapsed)
      const ms = totalMs % 1000
      const s = Math.floor(totalMs / 1000) % 60
      const m = Math.floor(totalMs / 60000)
      executionTime.value = `${m} min ${s}.${String(ms).padStart(3, '0')} s`

      if (format === 'tsv') {
        const parsed = parseAsTable(rawData, prefixMap)
        resultCount.value = parsed.count
        result.value = { kind: 'table', ...parsed }
      } else {
        const parsed = parseAsCode(rawData, format)
        resultCount.value = parsed.count
        result.value = { kind: 'code', ...parsed }
      }
    } catch (e) {
      const elapsed = performance.now() - t0
      const totalMs = Math.round(elapsed)
      const ms = totalMs % 1000
      const s = Math.floor(totalMs / 1000) % 60
      const m = Math.floor(totalMs / 60000)
      executionTime.value = `${m} min ${s}.${String(ms).padStart(3, '0')} s`
      resultCount.value = 0
      error.value = e.message || String(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, error, executionTime, resultCount, result, execute, checkOutputFormat }
}
