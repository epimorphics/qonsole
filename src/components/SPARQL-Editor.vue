<template>
    <div>
        <div v-show="!rdfmode">
            <CodeEditor ref="codeEditor" :mode="mode"/>
            <UserInput :mode="mode"/>
            <Error :mode="mode"/>
            <Output :mode="mode"/>
        </div>
        <div v-show="rdfmode">
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
        Error 
    },
    store: store, 
    props: ['rdfmode'], 
    data () {
        return {
            mode: 'sparql',
        }
    },
    methods: {
    },
    mounted: function () {
        this.$store.commit('updateCurrentMode', this.mode)
    }
}
</script>
<style>
</style>