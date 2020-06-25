<template>
    <div id="app-nav" class="demo">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
        >
            {{ tab }}
        </button> 
        <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
</template>

<script>
// import CodeEditor from './Code-Editor.vue'
import RDFEditor from './RDF-Editor.vue'
import SPARQLEditor from './SPARQL-Editor.vue'
import PrefixEditor from './Prefix-Editor.vue'

export default {
    name: 'AppNav',
    components: {
        RDFEditor,
        SPARQLEditor, 
        PrefixEditor
    },
    data () {
        return {
            currentTab: "RDFEditor",
            tabs: ["RDFEditor", "SPARQLEditor","PrefixEditor"]
        }
    },
    computed: {
        currentTabComponent: function() {
            return this.currentTab;
        }
    }
}
</script>
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>