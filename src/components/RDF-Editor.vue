<template>
<div>
    <Multipane class="vertical-panes" layout="vertical">
        <div class="pane" >
            <h3>RDF Editor</h3>
            <CodeEditor :language="language" 
            ref="codeEditor" 
            @sendCode="code = $event" />
            <input type="file" @change="loadTextFromFile">
            <Buttons :language="language"
                @buttonClicked="buttonClicked" /> 
        </div>
        <MultipaneResizer></MultipaneResizer>
        <div class="pane" >
            <h3>SPARQL Editor</h3>
            <SPARQLEditor :rdfsparql="rdfsparql"/>
        </div>
    </Multipane>        
    <grid :cols="resultCol" :rows="resultRow" 
          :auto-width="autoWidth"
          :language="{}"
          :pagination="pagination"
          :search="search"
          :sort="sort"
          :width="width"
          v-if="this.$store.getters.storeQueryResult!=''">
    </grid>
</div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import Buttons from './Buttons.vue' 
import store from '@/store/store.js'
import { Multipane, MultipaneResizer } from 'vue-multipane'
import SPARQLEditor from './SPARQL-Editor.vue'
import Grid from 'gridjs-vue'

export default {
    name: 'RDFEditor',
    components: {
        Multipane,
        MultipaneResizer, 
        CodeEditor,
        Buttons,
        SPARQLEditor,
        Grid
    },
    store: store, 
    data () {
        return {
            language: 'turtle', 
            parsedRDF: '' ,
            rdfsparql: true, 
            autoWidth: true,
            pagination: true,
            search: true,
            sort: true,
            theme: 'mermaid',
            width: '100%',
        }
    },
    methods: {
        buttonClicked (button) {
            switch (button) { 
                case "Clear":
                    this.$refs.codeEditor.clearEditor(); 
                    break; 
                case "Load":
                    try {
                        this.$store.commit('clearTurtleStore')
                        // parseTurtle(this.$store.getters.turtleCode)
                        this.$store.commit('loadRDF')
                        this.$store.commit('changeError', false)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
            }
        },
        loadTextFromFile: function (ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.$store.commit('updateTurtleCode', e.target.result)
            reader.readAsText(file)
        },
        getVariables: function (results) {
            var variables = []
            try {
                var entries = Object.entries(results[0])
                console.log(entries)
                for (var i = 0; i < entries.length; i++) {
                    variables.push(entries[i][0])
                }
                return variables
            } catch (err) {
                console.log(err)
            } 
        },
        getRows: function (results) {
            var rows = []
            for (var i = 0; i < results.length; i++){
                var entries = Object.entries(results[i])
                var row = []
                for (var j = 0; j < entries.length; j++) {
                    row.push(entries[j][1].value)
                }
                rows.push(row)
            }
            return rows 
        }
    },
    mounted: function () {
        this.$store.commit('updateCurrentLanguage', this.language)
    },
    computed: {
        resultCol: function () {
            return this.getVariables(this.$store.getters.storeQueryResult)
        },
        resultRow: function () {
            return this.getRows(this.$store.getters.storeQueryResult)
        }
    }
}
</script>
<style >
div {
    line-height: 1.5; 
}
.vertical-panes {
  width: 100%;
  height: 450px;
  border: 1px solid #ccc;
}
.vertical-panes > .pane {
    width: 50%; 
    text-align: left;
    padding: 15px;
    overflow: hidden;
    background: #eee;
}
.vertical-panes > .pane ~ .pane {
  border-left: 1px solid #ccc;
}
</style>