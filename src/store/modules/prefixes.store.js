import axios from 'axios'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        prefixes: {
            madsrdf : 'http://www.loc.gov/mads/rdf/v1#',
            bflc    : 'http://id.loc.gov/ontologies/bflc/', 
            rdf     : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            foaf    : 'http://xmlns.com/foaf/0.1/',
            yago    : 'http://yago-knowledge.org/resource/',
            rdfs    : 'http://www.w3.org/2000/01/rdf-schema#',
            dbo     : 'http://dbpedia.org/ontology/',
            dbp     : 'http://dbpedia.org/property/' ,
            ex      : 'http://example.org/'
        },
        selectedPrefixes: {},
        apiLoaded: false, 
        jsonldcontext: 'https://prefix.cc/context',
        contextList: null, 
    },
    getters: {
        prefixes: state => state.prefixes, 
        selectedPrefixes: state => state.selectedPrefixes,
        contextList: state => state.contextList
    }, 
    mutations: {
        addToSelectedPrefixes (state, payload) {
            // state.selectedPrefixes[payload.name] = payload.url
            Vue.set(state.selectedPrefixes, payload.name, payload.url)
        },
        deleteFromSelectedPrefixes (state, name) {
            Vue.delete(state.selectedPrefixes, name)
        },
        updateContextList (state, newData) {
            state.contextList = newData
        },
        addToPrefixes (state, payload) {
            Vue.set(state.prefixes, payload.name, payload.url)
        },
        deleteFromPrefixes (state, payload) {
            Vue.delete(state.prefixes, payload.name)
        },
        updatePrefix (state, payload) {
            console.log(payload)
            Vue.delete(state.prefixes, payload.old.name)
            Vue.set(state.prefixes, payload.new.name, payload.new.url)
        }
    },
    actions: {
        addToSelectedPrefixes: ({commit, dispatch}, payload) => {
            commit('addToSelectedPrefixes', payload)
            dispatch('sparqlEditorStore/addPrefixToCode', payload, {root: true})
        },
        deleteFromSelectedPrefixes: ({commit, dispatch}, payload) => {
            commit('deleteFromSelectedPrefixes', payload.name)
            dispatch('sparqlEditorStore/removePrefixFromCode', payload, {root: true})
        },
        getContextList: ({state, commit}) => {
            axios.get(state.jsonldcontext).then( response => {
                commit('updateContextList', response.data['@context'])
            })
        },
        addToPrefixes: ({commit}, payload) => {
            commit('addToPrefixes', payload)
        },
        deleteFromPrefixes: ({commit}, payload) => {
            commit('deleteFromPrefixes', payload)
        },
        updatePrefix: ({commit}, payload) => {
            commit('updatePrefix', payload)
        }
    }
}