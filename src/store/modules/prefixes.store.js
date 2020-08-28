import axios from 'axios'

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
            state.selectedPrefixes[payload.name] = payload.url
        },
        deleteFromSelectedPrefixes (state, name) {
            delete state.selectedPrefixes[name]
        },
        updateContextList (state, newData) {
            state.contextList = newData
        },
        addToPrefixes (state, payload) {
            state.prefixes[payload.name] = payload.url
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
        }
    }
}