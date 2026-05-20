<template>
  <div class="results-pane">
    <div v-if="executionTime || resultCount !== null" class="results-meta">
      <span v-if="resultCount !== null">
        {{ resultCount }} result{{ resultCount !== 1 ? 's' : '' }}
      </span>
      <span v-if="executionTime"> in {{ executionTime }}</span>
    </div>

    <div v-if="loading" class="results-loading" aria-live="polite">
      Running query…
    </div>

    <pre v-else-if="error" class="results-error">{{ error }}</pre>

    <template v-else-if="result">
      <!-- TSV table result -->
      <div v-if="result.kind === 'table'" class="results-table-wrap">
        <table class="results-table">
          <thead>
            <tr>
              <th
                v-for="(col, i) in result.headers"
                :key="i"
                @click="onSort(i)"
                :aria-sort="
                  sortBy === i
                    ? sortDir === 1
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                "
              >
                {{ col }}
                <span class="sort-indicator" aria-hidden="true">
                  {{ sortBy === i ? (sortDir === 1 ? ' ▲' : ' ▼') : '' }}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="sortedRows.length === 0">
              <td :colspan="result.headers.length" class="results-empty">
                Query did not return any results.
              </td>
            </tr>
            <tr v-for="(row, ri) in sortedRows" :key="ri">
              <td v-for="(cell, ci) in row" :key="ci">
                <a
                  v-if="cell.type === 'uri'"
                  :href="cell.href"
                  target="_blank"
                  rel="noopener"
                  >{{ cell.display }}</a
                >
                <span
                  v-else-if="cell.type === 'typed'"
                  :title="`Type: ${cell.datatype}`"
                  >{{ cell.value }}</span
                >
                <span
                  v-else-if="cell.type === 'langTagged'"
                  :title="`Language: ${cell.lang}`"
                  >{{ cell.value }}</span
                >
                <span v-else>{{ cell.value }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Code (JSON / XML / text) result -->
      <SparqlEditor
        v-else-if="result.kind === 'code'"
        :model-value="result.data"
        :language="mimeToLanguage(result.mime)"
        :readonly="true"
        class="results-code"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SparqlEditor from './SparqlEditor.vue'

const props = defineProps({
  result: { type: Object, default: null },
  loading: { type: Boolean, default: false },
  error: { type: String, default: null },
  executionTime: { type: String, default: null },
  resultCount: { type: Number, default: null },
})

const sortBy = ref(null)
const sortDir = ref(1)

function onSort(colIndex) {
  if (sortBy.value === colIndex) {
    sortDir.value = sortDir.value === 1 ? -1 : 1
  } else {
    sortBy.value = colIndex
    sortDir.value = 1
  }
}

const sortedRows = computed(() => {
  if (!props.result?.rows) return []
  if (sortBy.value === null) return props.result.rows

  return [...props.result.rows].sort((a, b) => {
    const av = a[sortBy.value]?.value ?? a[sortBy.value]?.display ?? ''
    const bv = b[sortBy.value]?.value ?? b[sortBy.value]?.display ?? ''
    return av.localeCompare(bv, undefined, { numeric: true }) * sortDir.value
  })
})

function mimeToLanguage(mime) {
  if (mime === 'application/json') return 'json'
  if (mime === 'application/xml') return 'xml'
  return 'text'
}
</script>

<style>
.results-pane {
  margin-top: 0.75rem;
}
.results-meta {
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.5rem;
}
.results-loading {
  color: #888;
  font-style: italic;
  padding: 0.5rem 0;
}
.results-error {
  color: #c00;
  background: #fff0f0;
  padding: 0.75rem;
  border-radius: 3px;
  white-space: pre-wrap;
}
.results-table-wrap {
  overflow-x: auto;
}
.results-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.9rem;
}
.results-table th {
  background: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.4rem 0.6rem;
  text-align: left;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
}
.results-table th:hover {
  background: #e0e0e0;
}
.results-table td {
  border: 1px solid #ddd;
  padding: 0.3rem 0.6rem;
  vertical-align: top;
}
.results-table tr:nth-child(even) td {
  background: #fafafa;
}
.results-empty {
  text-align: center;
  color: #888;
  padding: 1rem;
}
.results-code {
  margin-top: 0.5rem;
}
.sort-indicator {
  font-size: 0.75rem;
}
</style>
