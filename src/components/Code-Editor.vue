<template>
    <div>
        <codemirror
            ref="cmEditor"
            v-if="this.mode=='sparql'"
            :value="this.$store.getters['sparqlEditorStore/SPARQLCode']"
            :options="cmOptions"
            @input="onCmCodeChange" />
        <codemirror
            ref="cmEditor"
            v-if="this.mode=='turtle'"
            :value="this.$store.getters['rdfEditorStore/turtleCode']"
            :options="cmOptions"
            @input="onCmCodeChange" />
    </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/sparql/sparql.js'
import 'codemirror/mode/turtle/turtle.js'
import 'codemirror/theme/base16-light.css'

import store from '@/store/store.js'

export default {
    name: 'CodeEditor',
    props: ['mode'], 
    components: {
        codemirror
    },
    store: store, 
    data() {
        return {
            cmOptions: {
                tabSize: 4,
                mode: this.mode,
                theme: 'base16-light',
                lineNumbers: true,
                line: true
            }, 
        }
    },
    methods: {
        onCmCodeChange(newCode) {
            switch (this.mode) {
                case 'turtle':
                    this.$store.dispatch('rdfEditorStore/updateCode', newCode)
                    break; 
                case 'sparql':
                    this.$store.dispatch('sparqlEditorStore/updateCode', newCode)
            }
        },      
    },
    computed: {
        codemirror() {
            return this.$refs.cmEditor.codemirror
        }
    },
    mounted() {
        // Things to do when this component is loaded 
    }
}
</script>
<style>
.CodeMirror {
    border: 1px ridge lightgray; 
}
</style>
