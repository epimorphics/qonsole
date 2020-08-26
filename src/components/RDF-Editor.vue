<template>
<div>
    <Multipane class="vertical-panes" layout="vertical">
        <div class="pane" >
            <h3>RDF Editor</h3>
            <CodeEditor ref="codeEditor" :mode="mode"/>
            <UserInput :mode="mode"/> 
            <Error :mode="mode"/>
        </div>
        <MultipaneResizer></MultipaneResizer>
        <div class="pane" >
            <h3>SPARQL Editor</h3>
            <SPARQLEditor :rdfmode="mode"/>
        </div>
    </Multipane>
    <Output :mode="mode"/>
</div>
</template>
<script>
import CodeEditor from './Code-Editor.vue'
import UserInput from './User-Input.vue' 
import Output from './Output.vue'
import Error from './Error.vue'

import store from '@/store/store.js'

import { Multipane, MultipaneResizer } from 'vue-multipane'
import SPARQLEditor from './SPARQL-Editor.vue'

export default {
    name: 'RDFEditor',
    components: {
        Multipane,
        MultipaneResizer, 
        CodeEditor,
        UserInput,
        SPARQLEditor,
        Output,
        Error
    },
    store: store, 
    data () {
        return {
            mode: 'turtle', 
            parsedRDF: '' ,
            autoWidth: true,
            pagination: true,
            search: true,
            sort: true,
            theme: 'mermaid',
            width: '100%',
        }
    },
    methods: {
    },
    mounted: function () {
        this.$store.commit('updateCurrentMode', this.mode)
    },

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