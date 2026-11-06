import { ref } from 'vue'
import { formatDuration } from '../lib/formatDuration.js'
import { parseAsTable, parseAsCode } from '../lib/results.js'

const ACCEPT_HEADERS = {
  tsv: 'text/tab-separated-values',
  json: 'application/sparql-results+json',
  xml: 'application/sparql-results+xml',
  text: 'text/plain',
}

export function useSparqlService() {
  const loading = ref(false)
  const error = ref(null)
  const executionTime = ref(null)
  const resultCount = ref(null)
  const result = ref(null)

  async function execute(
    queryText,
    endpointUrl,
    format,
    prefixMap = {},
    customService = null
  ) {
    loading.value = true
    error.value = null
    result.value = null
    resultCount.value = null

    const t0 = performance.now()
    const recordTime = () => {
      executionTime.value = formatDuration(performance.now() - t0)
    }

    try {
      let rawData

      if (customService) {
        // Adapter for the callback-based service API kept from v1. v2
        // services pass success() the response string; v1 services passed
        // a RemoteSparqlServiceResult, whose raw value is in _val and may be
        // a parsed JSON object or XML Document, which parseAsCode accepts
        rawData = await new Promise((resolve, reject) => {
          customService.execute(queryText, {
            url: endpointUrl,
            format,
            success: (res) =>
              resolve(typeof res.asText === 'function' ? res._val : res),
            error: (err) => reject(err),
          })
        })
      } else {
        // The format is asked for with the Accept header alone, as the SPARQL
        // protocol specifies. A non-standard `output` parameter as well makes
        // Virtuoso (e.g. DBpedia) answer 406 for tsv and text.
        const params = new URLSearchParams({ query: queryText })
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

      recordTime()

      const parsed =
        format === 'tsv'
          ? { kind: 'table', ...parseAsTable(rawData, prefixMap) }
          : { kind: 'code', ...parseAsCode(rawData, format) }
      resultCount.value = parsed.count
      result.value = parsed
    } catch (e) {
      recordTime()
      resultCount.value = 0
      error.value = e.message || String(e)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    executionTime,
    resultCount,
    result,
    execute,
  }
}
