<template>
    <div class="sparqleditor">
        <div> 
            <v-row align="center"
                   justify="space-around"
                   style="display: inline-block; padding: 0px 10px;">
                <strong>Toolbox: </strong> 
                <v-btn v-for="(query, key) in this.$store.getters['sparqlEditorStore/exampleQueries']" 
                       :key="key" @click="loadExampleQuery(key)" x-small>
                    {{ key }} 
                </v-btn>
            </v-row>
        </div>
        <br>
        <div v-show="rdfmode!='rdfsparql'">
            <CodeEditor ref="codeEditor" :mode="mode"/>
            <UserInput :mode="mode"/>
            <Error :mode="mode"/>
            <Output :mode="mode"/>
        </div>
        <div v-show="rdfmode=='rdfsparql'">
            <CodeEditor ref="codeEditor" :mode="mode"/>
            <UserInput :mode="'rdfsparql'"/>
        </div>
    </div>
</template>

<script>
import CodeEditor from './Code-Editor.vue'
import UserInput from './User-Input.vue'
import Output from './Output.vue'
import Error from './Error.vue'

import store from '@/store/store.js'

export default {
    name: 'SPARQLEditor',
    components: {
        CodeEditor,
        UserInput,
        Output,
        Error,
    },
    store: store, 
    props: ['rdfmode'], 
    data () {
        return {
            mode: 'sparql',
            toggle_exclusive: undefined,
        }
    },
    methods: {
        loadExampleQuery(queryFile) {
            this.$store.dispatch('sparqlEditorStore/loadExampleQuery', queryFile)
        }
    },
    mounted: function () {
        this.$store.commit('updateCurrentMode', this.mode)
    }
}
</script>
<style>
.sparqleditor {
    background: #eee;
}
</style>