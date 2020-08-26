<template>
    <div id="user-input">
        <button @click="clearCode">Clear</button>
        <button v-show="mode=='turtle'" @click="loadStore">Load</button>

        <!-- For SPARQL Editor only -->
        <!-- For SPARQL Editor in RDF mode -->
        <button v-show="mode=='rdfsparql'" @click="queryStore">Query Store</button>
        <label v-show="mode=='sparql'"> Query from: </label>
        <input v-show="mode=='sparql'" type="text" id="endpoint" v-model=endpoint @input="updateEndpoint">
        <button v-show="mode=='sparql'" @click="queryEndpoint">Perform Query</button>
        <button v-show="mode=='sparql'" @click="saveQuery">Save Query</button>

        <br>

        <!-- Load code from local file -->
        <label> Import code from local: </label>
        <input type="file" @change="loadTextFromFile">
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
            endpoint: ''
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
        }
    }
}
</script>
<style>
label {
    font-size: 15px; 
}
#user-input button {
    background-color: #008CBA;
    color: blanchedalmond;
    border-radius: 10%;
    padding: 5px 20px;
    transition-duration: 0.4s;
    border: 2px solid #008CBA; 
    margin: 5px; 
}
#user-input button:hover {
    background-color: white; 
    color: black; 
}
</style>