<template>
    <div>
        Triples Loaded: {{this.$store.getters['rdfEditorStore/storeSize']}}
        Query time: {{this.$store.getters['sparqlEditorStore/localResultTime']}} ms.
        <div v-show="this.$store.getters['sparqlEditorStore/remoteResultIsReady'] && mode=='sparql'">
            <grid :cols="this.$store.getters['sparqlEditorStore/remoteResultsRows']"
                  :rows="this.$store.getters['sparqlEditorStore/remoteResultRows']"
                  :auto-width="autoWidth"
                  :language="language"
                  :pagination="pagination"
                  :search="search"
                  :sort="sort"
                  :width="width" />
        </div>
        <div v-show="this.$store.getters['sparqlEditorStore/localResultIsReady'] && mode=='turtle'">
            <grid :cols="this.$store.getters['sparqlEditorStore/localResultCols']"
                  :rows="this.$store.getters['sparqlEditorStore/localResultRows']"
                  :auto-width="autoWidth"
                  :language="language"
                  :pagination="pagination"
                  :search="search"
                  :sort="sort"
                  :width="width" />
        </div>

        <!-- JSON Output -->

        <div>
            <textarea  type="text" 
                       id="output-text"
                       rows="50"
                       v-show="this.$store.getters['sparqlEditorStore/outputFormat']=='JSON'"
                       readonly="true" 
                       v-model="this.$store.getters['sparqlEditorStore/remoteResultJSON']"/>
        </div>

        <!-- XML Output -->

        <div>
            <textarea  type="text" 
                       id="output-text"
                       rows="50"
                       v-show="this.$store.getters['sparqlEditorStore/outputFormat']=='XML'"
                       readonly="true" 
                       v-model="this.$store.getters['sparqlEditorStore/remoteResultXML']"/>
        </div>

        <!-- CSV Output -->
        
        <div>
            <textarea  type="text" 
                       id="output-text"
                       rows="50"
                       v-show="this.$store.getters['sparqlEditorStore/outputFormat']=='CSV'"
                       readonly="true" 
                       v-model="this.$store.getters['sparqlEditorStore/remoteResultCSV']"/>
        </div>
    </div>
</template>
<script>
import Grid from 'gridjs-vue'

import store from '@/store/store.js'

export default {
    name: 'Output',
    components: {
        Grid
    },
    store: store, 
    props: ['mode'], 
    data () {
        return {
            autoWidth: true,
            language: {},
            pagination: true,
            search: true,
            sort: true,
            theme: 'mermaid',
            width: '100%',
        }
    },
}
</script>
<style>
#output-text {
    width: 100%;
    height: auto; 
    background: #ffffff;
    border: 1px solid grey;
    padding: 5px;
}
</style>