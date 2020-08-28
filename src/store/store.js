import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import rdfEditorStore from './modules/rdfeditor.store.js'
import sparqlEditorStore from './modules/sparqleditor.store.js'
import prefixEditorStore from './modules/prefixes.store.js'

export default new Vuex.Store({
    modules: {
        rdfEditorStore,
        sparqlEditorStore, 
        prefixEditorStore
    },
    state: {
        currentMode: '',
    },
    getters: {
        currentMode: state => state.currentMode
    }, 
    mutations: {
        updateCurrentMode (state, newMode) {
            state.currentMode = newMode 
        }
    }
})