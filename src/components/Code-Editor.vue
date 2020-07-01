<template>
    <div>
        <codemirror
            ref="cmEditor"
            :value="code"
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
import store from '@/store.js'

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
            code : '', 
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
        // you can use this.codemirror to do something...
        switch (this.language) {
            case "sparql":
                this.code = this.$store.getters.SPARQLCode
                break; 
            case "turtle":
                this.code = this.$store.getters.turtleCode 
        }
    }
}

</script>
