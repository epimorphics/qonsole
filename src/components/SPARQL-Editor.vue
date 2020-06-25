<template>
    <div>
        Example datasheets: 
        <CodeEditor :language="language" 
                    ref="codeEditor" 
                    @sendCode="code = $event"/>
        <label for="endpoint">SPARQL Endpoint: </label>
        <input type="text" id="endpoint" name="endpoint" v-model="endpoint">
        <Buttons :language="language" 
                 @buttonClicked="buttonClicked" />

        <select v-model="resultTypes.selectedOption">
            <option v-for="type in resultTypes.options" 
                    :value="type" 
                    :key="type"> {{ type }} </option>
        </select>
        <Output :result="result" :resultType="resultTypes.selectedOption" />
    </div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue'
import Output from './Output.vue'
// import 'sparqljs'
import sparqlQuery from '@/query.js'

// var SparqlParser = require('sparqljs').Parser;
// var parser = new SparqlParser();

export default {
    name: 'SPARQLEditor',
    components: {
        CodeEditor,
        Buttons,
        Output
    },
    data () {
        return {
            language: 'sparql',
            code: '',
            parsedQuery: '',
            endpoint: 'http://dbpedia.org/sparql',
            result: '',
            resultTypes: { options: ['Text', 'JSON', 'CSV'],
                           selectedOption: 'Text'} ,
        }
    },
    methods: {
        buttonClicked (button) {
            switch (button) {
                case "Clear":
                    this.$refs.codeEditor.clearEditor();
                    break;
                case "Perform Query":
                    this.$refs.codeEditor.sendContent(); 
                    this.result=sparqlQuery(this.code, this.endpoint, this.resultTypes.selectedOption.replace(/['"]+/g, ''));
                    console.log(this.result)
            }
        }, 
    }
}
</script>
<style>
div {
    line-height: 2; 
}
</style>