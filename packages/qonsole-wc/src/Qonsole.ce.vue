<template>
  <div class="qonsole" part="container">
    <!-- Example queries selector -->
    <div v-if="examples.length > 0" class="qonsole__section" part="section">
      <component :is="headingTag" class="qonsole__heading" part="heading">
        <label for="qc-examples">Example queries</label>
      </component>
      <select
        id="qc-examples"
        part="select"
        @change="onExampleChange($event.target.selectedIndex)"
      >
        <option v-for="(ex, i) in examples" :key="i">{{ ex.name }}</option>
      </select>
    </div>

    <!-- Prefix list -->
    <div class="qonsole__section qonsole__prefixes" part="section">
      <component :is="headingTag" class="qonsole__heading" part="heading">
        Prefixes
      </component>
      <PrefixList
        :prefixes="prefixList"
        @toggle="onPrefixToggle"
        @open-add-dialog="showAddPrefix = true"
      />
    </div>

    <!-- Query editor -->
    <div class="qonsole__section" part="section">
      <p
        id="qc-editor-desc"
        class="qonsole__editor-desc"
        part="editor-description"
      >
        Multi-line SPARQL query editor: enter or paste your query below.
        <span class="visually-hidden">
          Press Escape to leave the editor, or Shift and Tab to go back.
        </span>
      </p>
      <button
        type="button"
        class="qonsole__skip"
        part="skip-link"
        @click="focusEndpoint"
      >
        Skip SPARQL editor (go to endpoint selection)
      </button>
      <SparqlEditor
        v-model="queryText"
        part="editor"
        language="sparql"
        label="SPARQL query"
        described-by="qc-editor-desc"
        @escape="focusEndpoint"
      />
    </div>

    <!-- Controls row -->
    <div class="qonsole__controls" part="controls">
      <label for="qc-endpoints" part="label">SPARQL endpoint</label>
      <select
        id="qc-endpoints"
        ref="endpointSelect"
        v-model="selectedEndpoint"
        part="select"
      >
        <option v-for="(url, name) in parsedEndpoints" :key="name" :value="url">
          {{ name }}
        </option>
      </select>

      <label for="qc-format" part="label">Results format</label>
      <select id="qc-format" v-model="resultsFormat" part="select">
        <option value="tsv">table</option>
        <option value="text">plain text</option>
        <option value="json">JSON</option>
        <option value="xml">XML</option>
      </select>

      <button
        type="button"
        class="btn-run"
        part="run-button"
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
      :heading-tag="headingTag"
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
import { ref, computed, onMounted } from 'vue'
import { parseJsonProp } from './lib/parseJsonProp.js'
import { usePrefixes } from './composables/usePrefixes.js'
import {
  lookupPrefixCC,
  renderPrefixes,
  stripLeader,
  updatePrefixDeclaration,
} from './lib/prefixes.js'
import { useExamples } from './composables/useExamples.js'
import { useSparqlService } from './composables/useSparqlService.js'
import { checkOutputFormat } from './lib/outputFormat.js'
import SparqlEditor from './components/SparqlEditor.vue'
import PrefixList from './components/PrefixList.vue'
import AddPrefixModal from './components/AddPrefixModal.vue'
import ResultsPane from './components/ResultsPane.vue'

const props = defineProps({
  endpoints: { type: String, default: '{}' },
  prefixes: { type: String, default: '{}' },
  queries: { type: String, default: '[]' },
  allowQueriesFromURL: { type: String, default: 'false' },
  // Level of the section headings, to fit the host page's outline
  headingLevel: { type: String, default: '2' },
  service: { type: Object, default: null },
})

const headingTag = computed(() => {
  const level = Number.parseInt(props.headingLevel, 10)
  return `h${level >= 1 && level <= 6 ? level : 2}`
})

const parsedEndpoints = computed(() => parseJsonProp(props.endpoints))
const parsedPrefixes = computed(() => parseJsonProp(props.prefixes))
const parsedQueries = computed(() => parseJsonProp(props.queries, []))

const selectedEndpoint = ref(null)
const resultsFormat = ref('tsv')
const queryText = ref('')
const showAddPrefix = ref(false)

// The endpoint selector, where focus goes when leaving the editor
const endpointSelect = ref(null)

function focusEndpoint() {
  endpointSelect.value?.focus()
}

const {
  prefixList,
  addOrUpdatePrefix,
  setActive,
  syncPrefixButtonState,
  assemblePrefixes,
  currentPrefixMap,
} = usePrefixes(parsedPrefixes.value)

const { examples, initExamples, checkForURLQuery } = useExamples()

const { loading, error, executionTime, resultCount, result, execute } =
  useSparqlService()

// Show an example query under its prefix declarations, and check the
// boxes of the prefixes it uses
function displayExample(example) {
  const prefixes = assemblePrefixes(example.query, example.prefixes)
  const rendered = renderPrefixes(prefixes)
  const body = stripLeader(example.query)
  queryText.value = rendered ? `${rendered}\n\n${body}` : body
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
    displayExample(examples.value[0])
  }
})

function onExampleChange(index) {
  displayExample(examples.value[index])
}

function onPrefixToggle(name, uri, checked) {
  setActive(name, checked)
  queryText.value = updatePrefixDeclaration(name, uri, checked, queryText.value)
}

function onAddPrefix({ prefix, uri }) {
  addOrUpdatePrefix(prefix, uri)

  // Rebuild the query's prefix block from the checked prefixes
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
    currentPrefixMap(),
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
  gap: 0.75em;
  color: var(--qonsole-color, #333);
}

.qonsole__section {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}

.qonsole__section label,
.qonsole__controls label,
.qonsole__heading {
  font-weight: bold;
  font-size: 0.875em;
}

.qonsole__heading {
  margin: 0;
}

.qonsole__editor-desc {
  margin: 0;
  font-size: 0.875em;
}

/* The skip link is hidden until it receives keyboard focus, as in qonsole v1 */
.visually-hidden,
.qonsole__skip:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.qonsole__skip:focus {
  align-self: flex-start;
  padding: 0.3em 0.6em;
  border: none;
  background: var(--qonsole-focus-color, #ffbf47);
  color: #0b0c0c;
  outline: 2px solid var(--qonsole-focus-color, #ffbf47);
}

.qonsole__heading label {
  font-size: inherit;
}

.qonsole__section select,
.qonsole__controls select {
  padding: 0.3em 0.5em;
  border: 1px solid var(--qonsole-border-color, #ccc);
  border-radius: var(--qonsole-border-radius, 3px);
}

.qonsole__section select {
  max-width: 30em;
}

.qonsole__prefixes {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
}

.qonsole__controls {
  display: flex;
  align-items: center;
  gap: 0.75em;
  flex-wrap: wrap;
}

.btn-run {
  background: var(--qonsole-accent-color, #2e7d32);
  color: var(--qonsole-accent-text-color, #fff);
  border: none;
  border-radius: var(--qonsole-border-radius, 3px);
  padding: 0.4em 1em;
  cursor: pointer;
  font-size: 0.9em;
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
