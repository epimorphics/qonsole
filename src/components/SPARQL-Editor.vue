<template>
    <div>
        <div v-show="!rdfsparql">
            <CodeEditor :language="language" 
                        ref="codeEditor" />
            <label for="endpoint">Query from: </label>
            <input type="text" id="endpoint" name="endpoint" v-model="endpoint">
            <input type="file" @change="loadTextFromFile">
            <Buttons :language="language" 
                    @buttonClicked="buttonClicked" />
            <select v-model="resultTypes.selectedOption">
                <option v-for="type in resultTypes.options" 
                        :value="type" 
                        :key="type"> {{ type }} </option>
            </select>
            <Output ref="output" />
        </div>
        <div v-show="rdfsparql">
            <CodeEditor :language="language" 
                        ref="codeEditor" />
            <input type="file" @change="loadTextFromFile">
            <Buttons :language="'rdfsparql'" 
                    @buttonClicked="buttonClicked" />
        </div>
    </div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue'
import Output from './Output.vue'
import {makeQuery, sendQuery} from '@/query.js'
import store from '@/store/store.js'
import {saveAs} from 'file-saver'

export default {
    name: 'SPARQLEditor',
    components: {
        CodeEditor,
        Buttons,
        Output
    },
    props: ['rdfsparql'], 
    store: store, 
    data () {
        return {
            language: 'sparql',
            endpoint: 'http://dbpedia.org/sparql',
            resultTypes: { options: ['JSON'],
                           selectedOption: 'JSON'} ,
            file: null,
        }
    },
    methods: {
        buttonClicked (button) {
            switch (button) {
                case "Clear":
                    this.$store.commit('updateSPARQLCode','')
                    break;
                case "Perform Query":
                    // Get code from code mirror 
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
                    break; 
                case "Save Query To Local":
                    var blob = new Blob([this.$store.getters.SPARQLCode], {type: "text/plain;charset=utf-8"})
                    saveAs(blob, 'query.txt')
                    break; 
                case "Query Store":
                    this.$store.commit('queryStore')
                    break; 
                case "Save Query For Later":
                    this.$store.commit('addQueryToSavedQueries')
            }
        }, 
        loadTextFromFile: function (ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.$store.commit('updateSPARQLCode', e.target.result)
            reader.readAsText(file)
        }
    },
    mounted: function () {
        this.$store.commit('updateCurrentLanguage', this.language)
    }
}
</script>
<style>
div {
    line-height: 2; 
}
</style>