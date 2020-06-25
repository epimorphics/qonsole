<template>
    <div>
        This is where the RDF editor will go!
        <CodeEditor :language="language" 
        ref="codeEditor" 
        @sendCode="code = $event" />
        <Buttons :language="language"
            @buttonClicked="buttonClicked" /> 
    </div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue' 
import 'rdf'

const rdf = require('rdf')
// const { NamedNode, BlankNode, Literal } = rdf;

export default {
    name: 'RDFEditor',
    components: {
        CodeEditor,
        Buttons 
    },
    data () {
        return {
            language: 'turtle', 
            code: '',
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
                    this.$refs.codeEditor.sendContent(); 
                    this.parsedRDF = rdf.TurtleParser.parse(this.code)

            }
        }
    }
}
</script>