<template>
    <div v-html="table" />
</template>
<script>
export default {
    name: 'Output',
    props: ['jsonResponse'],
    data () {
        return {
            table: null
        }
    },
    methods: {
        makeTable () {
            this.table = ''
            this.table += '<table style="width:60%">'
            var results = this.jsonResponse.results.bindings

            // Make top row 
            var entries = Object.entries(results[0])
            this.table += '<tr>'
            for (var x = 0; x < entries.length; x++) {
                this.table += '<td>'
                this.table += entries[x][0]
                this.table += '</td>'
            }
            this.table += '</tr>'

            for (var i = 0; i < results.length; i++) {
                this.table += '<tr>'

                entries = Object.entries(results[i])

                for (var j = 0; j < entries.length; j ++) {
                    this.table += '<td>'
                    this.table += entries[j][1].value
                    this.table += '</td>'
                }
                this.table += '</tr>'
            }
            this.table += '</table>'
        }
    }
}
</script>