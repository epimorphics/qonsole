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
        <Output ref="output" />
    </div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue'
import Output from './Output.vue'
import {makeQuery, sendQuery} from '@/query.js'

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
            endpoint: 'http://dbpedia.org/sparql',
            resultTypes: { options: ['JSON'],
                           selectedOption: 'JSON'} ,
            jsonResponse: []
        }
    },
    methods: {
        buttonClicked (button) {
            switch (button) {
                case "Clear":
                    this.$refs.codeEditor.clearEditor();
                    break;
                case "Perform Query":
                    // Get code from code mirror 
                    this.$refs.codeEditor.sendContent(); 
                    // Send SPARQL query to SPARQL endpoint with the user decided output format
                    var queryURL = makeQuery(this.code, this.endpoint, this.resultTypes.selectedOption)
                    this.jsonResponse = JSON.parse(sendQuery(queryURL))
                    this.$refs.output.makeTable(this.jsonResponse)
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