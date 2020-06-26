<template>
    <div ref="table"/>
</template>
<script>
var Tabulator = require('tabulator-tables')

export default {
    name: 'Tabulator',
    props: ['jsonResponse'], 
    data () {
        return {
            tabulator: null,
            tableData: [{id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
                       {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},] 
        }
    },
    watch: {
        //update table if data changes
        tableData: {
            handler: function (newData) {
                this.tabulator.replaceData(newData);
            },
            deep: true,
        }  
    },
    mounted () {
        //instantiate Tabulator when element is mounted
        this.tabulator = new Tabulator(this.$refs.table, {
            data: this.tableData, //link data to table
            columns: [], //define table columns
        });
    }
}
</script>