<template>
    <grid :cols="getVariables(jsonResponse)" :rows="deconstructJSON(jsonResponse)"
          :auto-width="autoWidth"
          :from="from"
          :language="language"
          :pagination="pagination"
          :search="search"
          :server="server"
          :sort="sort"
          :width="width"></grid>
</template>
<script>
import Grid from 'gridjs-vue'
// import {deconstructJSON, getVariables} from '@/result.js'



export default {
    name: 'Output',
    props: ['jsonResponse'],
    components: { Grid }, 
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
            console.log(results)
            return results
        },
        getVariables: function (jsonResponse) {
            console.log(jsonResponse.head.vars)
            return jsonResponse.head.vars
        }
    }
}
</script>
<style>
</style>
