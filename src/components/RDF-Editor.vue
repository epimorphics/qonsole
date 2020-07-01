<template>
    <div>
        This is where the RDF editor will go!
        <CodeEditor :language="language" 
        ref="codeEditor" 
        @sendCode="code = $event" />
        <Buttons :language="language"
            @buttonClicked="buttonClicked" /> 
        <Output />
    </div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue' 
import Output from './Output.vue'
import store from '@/store.js'

const N3 = require('n3');

function parseTurtle(code) {
    const parser = new N3.Parser();
    parser.parse(code, 
        (error, quad, prefixes) => {
            if (error) {
                store.commit('changeError', true)
                store.commit('updateErrorMessage', error)
                return error 
            } else if (prefixes) {
                var entries = Object.entries(prefixes)
                console.log(entries)
                for (var i = 0; i < entries.length; i++) {
                    store.commit('addPrefix', entries[i])
                }
            } else {
                store.commit('populateRDFStore', quad)
            }
        })
}

export default {
    name: 'RDFEditor',
    components: {
        CodeEditor,
        Buttons,
        Output 
    },
    store: store, 
    data () {
        return {
            language: 'turtle', 
            parsedRDF: '' 
        }
    },
    methods: {
        buttonClicked (button) {
            switch (button) { 
                case "Clear":
                    this.$refs.codeEditor.clearEditor(); 
                    break; 
                case "Load":
                    try {
                        this.$store.commit('clearTurtleStore')
                        parseTurtle(this.$store.getters.turtleCode)
                        this.$store.commit('changeError', false)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
            }
        }
    },
    mounted: function () {
        this.$store.commit('updateCurrentLanguage', this.language)
    }
}
</script>
<style >
div {
    line-height: 2; 
}
</style>