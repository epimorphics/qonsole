<template>
    <div>
        Example datasheets: 
        <CodeEditor :language="language" 
                    ref="codeEditor" />
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
import store from '@/store.js'

export default {
    name: 'SPARQLEditor',
    components: {
        CodeEditor,
        Buttons,
        Output
    },
    store: store, 
    data () {
        return {
            language: 'sparql',
            endpoint: 'http://dbpedia.org/sparql',
            resultTypes: { options: ['JSON'],
                           selectedOption: 'JSON'} ,
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
                    // this.$refs.codeEditor.sendContent(); 
                    // Send SPARQL query to SPARQL endpoint with the user decided output format
                    var queryURL = makeQuery(this.$store.getters.SPARQLCode, this.endpoint, this.resultTypes.selectedOption)
                    var rawResponse = sendQuery(queryURL)
                    try {
                        this.$store.commit('updateJSONResponse', JSON.parse(rawResponse))
                        this.$store.commit('changeError', false)
                    } catch (error) {
                        this.$store.commit('changeError', true)
                        this.$store.commit('updateErrorMessage', rawResponse)
                    }
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