<template>
  <dialog ref="dialogRef" class="prefix-dialog" @close="emit('close')">
    <form method="dialog" @submit.prevent>
      <h4>Add a SPARQL prefix</h4>

      <div class="field-row">
        <label for="qc-input-prefix">Prefix</label>
        <input
          id="qc-input-prefix"
          v-model="inputPrefix"
          type="text"
          placeholder="e.g. skos"
          autofocus
          @input="lookupLabel = inputPrefix ? `'${inputPrefix}'` : ''"
        />
        <button
          type="button"
          @click="onLookup"
          :disabled="!inputPrefix || lookupLoading"
        >
          Lookup {{ lookupLabel }} on prefix.cc
        </button>
      </div>

      <div class="field-row">
        <label for="qc-input-uri">URI</label>
        <input
          id="qc-input-uri"
          v-model="inputUri"
          type="text"
          placeholder="https://…"
        />
      </div>

      <div v-if="lookupError" class="lookup-error">{{ lookupError }}</div>

      <div class="dialog-buttons">
        <button type="button" @click="onCancel">Cancel</button>
        <button
          type="button"
          class="btn-primary"
          @click="onAdd"
          :disabled="!inputPrefix"
        >
          Add prefix
        </button>
      </div>
    </form>
  </dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  lookupPrefix: { type: Function, required: true },
})

const emit = defineEmits(['close', 'add-prefix'])

const dialogRef = ref(null)
const inputPrefix = ref('')
const inputUri = ref('')
const lookupLabel = ref('')
const lookupLoading = ref(false)
const lookupError = ref(null)

watch(
  () => props.show,
  (val) => {
    if (val) {
      inputPrefix.value = ''
      inputUri.value = ''
      lookupLabel.value = ''
      lookupError.value = null
      dialogRef.value?.showModal()
    } else {
      dialogRef.value?.close()
    }
  }
)

async function onLookup() {
  if (!inputPrefix.value) return
  lookupLoading.value = true
  lookupError.value = null
  try {
    const uri = await props.lookupPrefix(inputPrefix.value)
    if (uri) inputUri.value = uri
    else lookupError.value = `No match found for '${inputPrefix.value}'`
  } catch {
    lookupError.value = `Lookup failed for '${inputPrefix.value}'`
  } finally {
    lookupLoading.value = false
  }
}

function onAdd() {
  if (!inputPrefix.value) return
  emit('add-prefix', {
    prefix: inputPrefix.value.trim(),
    uri: inputUri.value.trim(),
  })
  emit('close')
}

function onCancel() {
  emit('close')
}
</script>

<style>
.prefix-dialog {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1.5rem;
  min-width: 22rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
.prefix-dialog::backdrop {
  background: rgba(0, 0, 0, 0.4);
}
.prefix-dialog h4 {
  margin: 0 0 1rem;
}
.field-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}
.field-row input {
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.dialog-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}
.btn-primary {
  background: #337ab7;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.3rem 0.75rem;
  cursor: pointer;
}
.btn-primary:hover {
  background: #286090;
}
.btn-primary:disabled {
  opacity: 0.6;
  cursor: default;
}
.lookup-error {
  color: #c00;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
