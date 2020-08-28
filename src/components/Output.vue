<template>
    <div>
        <div v-show="this.$store.getters['sparqlEditorStore/remoteResultIsReady'] && mode=='sparql'">
            Query time: {{this.$store.getters['sparqlEditorStore/remoteResultTime']}} ms.
            <grid :cols="this.$store.getters['sparqlEditorStore/remoteResultCols']"
                  :rows="this.$store.getters['sparqlEditorStore/remoteResultRows']"
                  :auto-width="autoWidth"
                  :language="language"
                  :pagination="pagination"
                  :search="search"
                  :sort="sort"
                  :width="width" />
        </div>
        <div v-show="this.$store.getters['sparqlEditorStore/localResultIsReady']&&mode=='turtle'">
            Query time: {{this.$store.getters['sparqlEditorStore/localResultTime']}} ms.
            <grid :cols="this.$store.getters['sparqlEditorStore/localResultCols']"
                  :rows="this.$store.getters['sparqlEditorStore/localResultRows']"
                  :auto-width="autoWidth"
                  :language="language"
                  :pagination="pagination"
                  :search="search"
                  :sort="sort"
                  :width="width" />
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