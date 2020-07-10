<template>
    <div>
        <codemirror
            ref="cmEditor"
            v-if="language=='sparql'"
            :value="this.$store.getters.SPARQLCode"
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
        />
        <codemirror
            ref="cmEditor"
            v-if="language=='turtle'"
            :value="this.$store.getters.turtleCode"
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
        />
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
    components: {
        codemirror
    },
    // Get language mode from parent and change the mode of Code Mirror accordingly 
    props: ['language'], 
    store: store, 
    data() {
        return {
            cmOptions: {
                // Code Mirror options 
                tabSize: 4,
                mode: this.language,
                theme: 'base16-light',
                lineNumbers: true,
                line: true
            }, 
        }
    },
    methods: {
        onCmReady(cm) {
            console.log('the editor is readied!', cm)
        },
        onCmFocus(cm) {
            console.log('the editor is focused!', cm)
        },
        onCmCodeChange(newCode) {
            // Write in console for debugging purposes 
            // console.log('this is new code', newCode)
            switch (this.language){
                case "turtle":
                    this.$store.commit('updateTurtleCode', newCode)
                    break; 
                case "sparql":
                    this.$store.commit('updateSPARQLCode', newCode)
            }
            // this.code = newCode
        },
        clearEditor() {
            this.code = '' 
        },
    },
    computed: {
        codemirror() {
            return this.$refs.cmEditor.codemirror
        }
    },
    mounted() {
        console.log('the current CodeMirror instance object:', this.codemirror)
    }
}

</script>
