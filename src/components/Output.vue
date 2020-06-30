<template>
    <div>
        <grid :cols="getVariables(this.$store.getters.jsonResponse)" :rows="deconstructJSON(this.$store.getters.jsonResponse)" 
              :auto-width="autoWidth"
              :language="language"
              :pagination="pagination"
              :search="search"
              :sort="sort"
              :width="width"
              v-if="this.$store.getters.error==false && this.$store.getters.jsonResponse!=''">
        </grid>
        <div v-if="this.$store.getters.error==true"> {{ this.$store.getters.errorMessage }} </div>
    </div>
</template>
<script>
import Grid from 'gridjs-vue'
import store from '@/store.js'


export default {
    name: 'Output',
    components: { 
        Grid 
    }, 
    store: store, 
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
    methods: {
        deconstructJSON: function (jsonResponse) {
            const variables = jsonResponse.head.vars 
            const listOfResults = jsonResponse.results.bindings 
            var results = new Array(listOfResults.length)

            for (var i = 0; i < listOfResults.length; i++) {
                var entries = Object.entries(listOfResults[i])
                var temp = new Array(listOfResults.length)
                for (var j = 0; j < variables.length; j++) {
                    temp[j] = entries[j][1].value 
                }
                results[i] = temp
            }
            return results
        },
        getVariables: function (jsonResponse) {
            return jsonResponse.head.vars
        }
    }
}
</script>
<style>
</style>
