<template>
    <div id="user-input">
        <v-row align="center"
               justify="space-around"
               style="display:inline-block; margin: 10px;">
            <v-btn @click="clearCode"> Clear </v-btn>
            <v-btn v-show="mode=='turtle'" 
                   @click="loadStore"
                   :disabled="this.$store.getters['rdfEditorStore/turtleCode']==''"> Load </v-btn>

            <!-- For SPARQL Editor -->
            <!-- For SPARQL Editor in RDF mode -->
            <v-btn v-show="mode=='rdfsparql'"
                   @click="queryStore"
                   :disabled="this.$store.getters['sparqlEditorStore/SPARQLCode']==''"> Query Store </v-btn>

            <!-- For SPARQL Editor only -->
            <strong v-show="mode=='sparql'"> Query from: </strong>
            <input v-show="mode=='sparql'" type="text" id="endpoint" v-model="endpoint" @input="updateEndpoint" style="border: 1px solid gray; border-radius:2px;">
            <v-btn v-show="mode=='sparql'" 
                   @click="queryEndpoint"
                   :disabled="this.$store.getters['sparqlEditorStore/SPARQLCode']==''
                   || this.$store.getters['sparqlEditorStore/endpoint']==''"> Perform Query </v-btn>
            <v-btn v-show="mode=='sparql'" @click="saveQuery">Save Query</v-btn>
            
            <strong v-show="mode=='sparql'"> Output Format: </strong>
            <select v-show="mode=='sparql'" v-model="selectedFormat"
                    @change="updateSelectedOutputFormat" style="border: 1px solid gray; border-radius: 2px;">
                <option value="Table" selected="selected"> Table </option>
                <option value="JSON"> JSON </option>
                <option value="CSV"> CSV </option>
                <option value="XML"> XML </option>
            </select>

            <br>

            <!-- Load code from local file -->
            <strong> Import code from local: </strong>
            <input type="file" @change="loadTextFromFile">
        </v-row>
    </div>
</template>
<script>
import store from '@/store/store.js'

export default{
    name: 'UserInput',
    store: store, 
    props: ['mode'], 
    data () {
        return {
            endpoint: '',
            selectedFormat: 'Table', 
        }
    }, 
    methods: {
        clearCode () {
            switch (this.mode) {
                case 'sparql':
                    this.$store.dispatch('sparqlEditorStore/updateCode', '')
                    break; 
                case 'rdfsparql':
                    this.$store.dispatch('sparqlEditorStore/updateCode', '')
                    break; 
                case 'turtle':
                    this.$store.dispatch('rdfEditorStore/updateCode', '')
            }
        },
        loadStore () {
            this.$store.dispatch('rdfEditorStore/loadRDF')
        },
        queryEndpoint () {
            this.$store.dispatch('sparqlEditorStore/queryEndpoint')
        },
        queryStore () {
            this.$store.dispatch('sparqlEditorStore/queryStore')
        }, 
        updateEndpoint () {
            this.$store.dispatch('sparqlEditorStore/updateEndpoint', this.endpoint)
        },
        loadTextFromFile (ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();
            switch (this.mode) {
                case 'sparql':
                    reader.onload = e => this.$store.dispatch('sparqlEditorStore/updateCode', e.target.result)
                    break; 
                case 'turtle':
                    reader.onload = e => this.$store.dispatch('rdfEditorStore/updateCode', e.target.result)
            }
            reader.readAsText(file)
        },
        saveQuery () {
            this.$store.dispatch('sparqlEditorStore/saveQuery')
        },
        updateSelectedOutputFormat () {
            this.$store.dispatch('sparqlEditorStore/updateOutputFormat', this.selectedFormat)
        }
    }
}
</script>
<style>
label {
    font-size: 15px; 
}
</style>