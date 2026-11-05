import { ref, computed } from 'vue'

/** ?query= value meaning "read the query from session storage" */
const LOCAL_STORE_QUERY = '_localstore'

/** Session storage key under which linking pages save the query */
const SESSION_QUERY_KEY = 'qonsole.query'

export function useExamples() {
  const examples = ref([])
  const selectedExampleIndex = ref(0)

  const currentExample = computed(
    () => examples.value[selectedExampleIndex.value] ?? null
  )

  async function initExamples(queriesConfig) {
    examples.value = queriesConfig.map((q) => ({ ...q }))

    const remoteLoads = examples.value
      .filter((ex) => ex.queryURL && !ex.query)
      .map((ex) => loadRemoteQuery(ex))

    await Promise.all(remoteLoads)

    // Configs may use \r or \r\n line endings, but prefix handling splits on \n
    examples.value.forEach((ex) => {
      if (typeof ex.query === 'string') {
        ex.query = ex.query.replace(/\r\n?/g, '\n')
      }
    })
  }

  async function loadRemoteQuery(ex) {
    try {
      const res = await fetch(ex.queryURL)
      ex.query = res.ok ? await res.text() : `Not found: ${ex.queryURL}`
    } catch {
      ex.query = `Not found: ${ex.queryURL}`
    }
  }

  function selectExample(index) {
    selectedExampleIndex.value = index
  }

  // Query to show on load, from links in other applications:
  // - ?query=<sparql>, as in qonsole v1
  // - ?q=<sparql>, which qonsole-rails read on the server
  // - ?query=_localstore, for queries too long for a URL, which the linking
  //   page has saved in session storage under SESSION_QUERY_KEY
  function checkForURLQuery(allowQueriesFromURL) {
    if (!allowQueriesFromURL) return null
    const params = new URLSearchParams(window.location.search)
    const query = params.get('query') ?? params.get('q')
    return query === LOCAL_STORE_QUERY ? readSessionQuery() : query
  }

  function readSessionQuery() {
    try {
      return window.sessionStorage.getItem(SESSION_QUERY_KEY)
    } catch {
      // Storage can be unavailable, e.g. blocked by privacy settings
      return null
    }
  }

  return {
    examples,
    selectedExampleIndex,
    currentExample,
    initExamples,
    selectExample,
    checkForURLQuery,
  }
}
