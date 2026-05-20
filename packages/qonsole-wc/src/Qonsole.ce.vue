<template>
  <div class="qonsole">
    <!-- Example queries selector -->
    <div v-if="examples.length > 0" class="qonsole__section">
      <label for="qc-examples">Example queries</label>
      <select
        id="qc-examples"
        @change="onExampleChange($event.target.selectedIndex)"
      >
        <option v-for="(ex, i) in examples" :key="i">{{ ex.name }}</option>
      </select>
    </div>

    <!-- Prefix list -->
    <div class="qonsole__section qonsole__prefixes">
      <span class="section-label">Prefixes</span>
      <PrefixList
        :prefixes="prefixList"
        @toggle="onPrefixToggle"
        @open-add-dialog="showAddPrefix = true"
      />
    </div>

    <!-- Query editor -->
    <div class="qonsole__section">
      <SparqlEditor v-model="queryText" language="sparql" />
    </div>

    <!-- Controls row -->
    <div class="qonsole__controls">
      <label for="qc-endpoints">SPARQL endpoint</label>
      <select id="qc-endpoints" v-model="selectedEndpoint">
        <option v-for="(url, name) in parsedEndpoints" :key="name" :value="url">
          {{ name }}
        </option>
      </select>

      <label for="qc-format">Results format</label>
      <select id="qc-format" v-model="resultsFormat">
        <option value="tsv">table</option>
        <option value="text">plain text</option>
        <option value="json">JSON</option>
        <option value="xml">XML</option>
      </select>

      <button
        type="button"
        class="btn-run"
        :disabled="loading || !selectedEndpoint"
        @click="onRunQuery"
      >
        {{ loading ? 'Running…' : 'Perform query' }}
      </button>
    </div>

    <!-- Results -->
    <ResultsPane
      :result="result"
      :loading="loading"
      :error="error"
      :execution-time="executionTime"
      :result-count="resultCount"
    />

    <!-- Add prefix modal -->
    <AddPrefixModal
      :show="showAddPrefix"
      :lookup-prefix="lookupPrefixCC"
      @close="showAddPrefix = false"
      @add-prefix="onAddPrefix"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { parseJsonProp } from './composables/parseProps.js'
import { usePrefixes } from './composables/usePrefixes.js'
import { useExamples } from './composables/useExamples.js'
import { useSparqlService } from './composables/useSparqlService.js'
import SparqlEditor from './components/SparqlEditor.vue'
import PrefixList from './components/PrefixList.vue'
import AddPrefixModal from './components/AddPrefixModal.vue'
import ResultsPane from './components/ResultsPane.vue'

const props = defineProps({
  endpoints: { type: String, default: '{}' },
  prefixes: { type: String, default: '{}' },
  queries: { type: String, default: '[]' },
  allowQueriesFromURL: { type: String, default: 'false' },
  service: { type: Object, default: null },
})

const parsedEndpoints = computed(() => parseJsonProp(props.endpoints))
const parsedPrefixMap = computed(() => parseJsonProp(props.prefixes))
const parsedQueries = computed(() => parseJsonProp(props.queries, []))

const selectedEndpoint = ref(null)
const resultsFormat = ref('tsv')
const queryText = ref('')
const showAddPrefix = ref(false)

const {
  prefixList,
  initPrefixes,
  addOrUpdatePrefix,
  setActive,
  syncPrefixButtonState,
  assemblePrefixes,
  renderPrefixes,
  stripLeader,
  updatePrefixDeclaration,
  parsedPrefixMap: getPrefixMap,
  lookupPrefixCC,
} = usePrefixes(parsedPrefixMap.value)

const { examples, initExamples, selectExample, checkForURLQuery } =
  useExamples()

const {
  loading,
  error,
  executionTime,
  resultCount,
  result,
  execute,
  checkOutputFormat,
} = useSparqlService()

function displayQuery(exampleOrQuery) {
  if (!exampleOrQuery) return
  const queryBody = exampleOrQuery.query ?? exampleOrQuery
  const prefixes = assemblePrefixes(queryBody, exampleOrQuery.prefixes)
  const rendered = renderPrefixes(prefixes)
  queryText.value = rendered
    ? `${rendered}\n\n${stripLeader(queryBody)}`
    : stripLeader(queryBody)
  syncPrefixButtonState(prefixes)
}

onMounted(async () => {
  // Set first endpoint as selected
  const urls = Object.values(parsedEndpoints.value)
  selectedEndpoint.value = urls[0] ?? null

  // Load examples (fetches any remote queryURLs)
  await initExamples(parsedQueries.value)

  // Check URL param first, otherwise show first example
  const urlQuery = checkForURLQuery(props.allowQueriesFromURL === 'true')
  if (urlQuery) {
    queryText.value = urlQuery
  } else if (examples.value.length > 0) {
    displayQuery(examples.value[0])
  }
})

function onExampleChange(index) {
  selectExample(index)
  displayQuery(examples.value[index])
}

function onPrefixToggle(name, uri, checked) {
  setActive(name, checked)
  queryText.value = updatePrefixDeclaration(name, uri, checked, queryText.value)
}

function onAddPrefix({ prefix, uri }) {
  // Save current checkbox state
  const prevState = Object.fromEntries(
    prefixList.value.map((p) => [p.name, p.active])
  )

  addOrUpdatePrefix(prefix, uri)

  // Restore prior state for existing prefixes
  prefixList.value.forEach((p) => {
    if (p.name !== prefix && prevState[p.name] !== undefined) {
      p.active = prevState[p.name]
    }
  })

  // Rebuild query text prefix block
  const lines = queryText.value.split('\n').filter((l) => !/^prefix\s/i.test(l))
  const activePrefixes = prefixList.value.filter((p) => p.active)
  queryText.value = `${renderPrefixes(activePrefixes)}\n${lines.join('\n')}`
}

async function onRunQuery() {
  const adjustedFormat = checkOutputFormat(queryText.value, resultsFormat.value)
  resultsFormat.value = adjustedFormat
  await execute(
    queryText.value,
    selectedEndpoint.value,
    adjustedFormat,
    getPrefixMap(),
    props.service
  )
}

// Public API
defineExpose({
  currentQueryText: () => queryText.value,
  setCurrentQueryText: (text) => {
    queryText.value = text
  },
})
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.qonsole {
  font-family: var(--qonsole-font-family, sans-serif);
  font-size: var(--qonsole-font-size, 14px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--qonsole-color, #333);
}

.qonsole__section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.qonsole__section label,
.section-label {
  font-weight: bold;
  font-size: 0.875rem;
}

.qonsole__section select {
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--qonsole-border-color, #ccc);
  border-radius: var(--qonsole-border-radius, 3px);
  max-width: 30rem;
}

.qonsole__prefixes {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.qonsole__controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.qonsole__controls label {
  font-weight: bold;
  font-size: 0.875rem;
}

.qonsole__controls select {
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--qonsole-border-color, #ccc);
  border-radius: var(--qonsole-border-radius, 3px);
}

.btn-run {
  background: var(--qonsole-accent-color, #5cb85c);
  color: var(--qonsole-accent-text-color, #fff);
  border: none;
  border-radius: var(--qonsole-border-radius, 3px);
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
}
.btn-run:hover:not(:disabled) {
  filter: brightness(0.9);
}
.btn-run:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
