<template>
  <div ref="editorRef" class="sparql-editor" />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import {
  HighlightStyle,
  defaultHighlightStyle,
  syntaxHighlighting,
} from '@codemirror/language'
import { sparql } from 'codemirror-lang-sparql'
import { json } from '@codemirror/lang-json'
import { xml } from '@codemirror/lang-xml'

const props = defineProps({
  modelValue: { type: String, default: '' },
  readonly: { type: Boolean, default: false },
  language: { type: String, default: 'sparql' }, // 'sparql' | 'json' | 'xml' | 'text'
  // Accessible name for the editable area, announced by screen readers
  label: { type: String, required: true },
})

// CodeMirror's default highlighting, except that its IRI/namespace green
// (#085) is below WCAG AA contrast on the active line; #006b45 is 6.3:1
const highlightStyle = HighlightStyle.define(
  defaultHighlightStyle.specs.map((spec) =>
    spec.color === '#085' ? { ...spec, color: '#006b45' } : spec
  )
)

const emit = defineEmits(['update:modelValue'])

const editorRef = ref(null)
let editorView = null

function getLanguageExtension() {
  switch (props.language) {
    case 'json':
      return json()
    case 'xml':
      return xml()
    default:
      return sparql()
  }
}

onMounted(() => {
  const extensions = [
    basicSetup,
    syntaxHighlighting(highlightStyle),
    getLanguageExtension(),
    // tabindex makes read-only results reachable by keyboard for scrolling
    EditorView.contentAttributes.of({
      'aria-label': props.label,
      tabindex: '0',
    }),
  ]

  if (props.readonly) {
    extensions.push(EditorState.readOnly.of(true))
  } else {
    extensions.push(
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          emit('update:modelValue', update.state.doc.toString())
        }
      })
    )
  }

  editorView = new EditorView({
    doc: props.modelValue,
    extensions,
    // Pass the shadow root so CM6 injects its styles inside the shadow DOM
    root: editorRef.value.getRootNode(),
    parent: editorRef.value,
  })
})

// Sync external changes into the editor (e.g. when an example is selected)
watch(
  () => props.modelValue,
  (newVal) => {
    if (!editorView) return
    const current = editorView.state.doc.toString()
    if (current !== newVal) {
      editorView.dispatch({
        changes: { from: 0, to: current.length, insert: newVal },
      })
    }
  }
)

onBeforeUnmount(() => editorView?.destroy())
</script>

<style>
.sparql-editor {
  border: 1px solid var(--qonsole-border-color, #ccc);
  border-radius: var(--qonsole-border-radius, 3px);
}
.sparql-editor .cm-editor {
  height: 100%;
}
.sparql-editor .cm-scroller {
  overflow: auto;
}
</style>
