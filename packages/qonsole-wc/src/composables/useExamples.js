import { ref, computed } from 'vue'

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

  function checkForURLQuery(allowQueriesFromURL) {
    if (!allowQueriesFromURL) return null
    return new URLSearchParams(window.location.search).get('query')
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
