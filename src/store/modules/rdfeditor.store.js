/* Store module to handle RDF Editor component store */

var rdfstore = require('rdfstore')

export default {
    namespaced: true,
    state: {
        // Attributes of the rdfEditor component 
        turtleCode: '',
        rdfstore: new rdfstore.Store(function(error, store){
            if (!error) {
                return store
            }
        }), 
        errorStatus: false, 
        errorMessage: '',
        storeSize: 0, 
    },
    getters: {
        // getters and computed props of rdfEditor 
        errorStatus: state => state.errorStatus, 
        errorMessage: state => state.errorMessage,
        turtleCode: state => state.turtleCode,
        resultsReady: state => state.resultsReady,
        storeSize: state => state.storeSize
    },
    mutations: {
        // back-end functions 
        updateCode (state, newCode) {
            state.turtleCode = newCode 
        },
        updateError (state, {newErrorStatus, newErrorMessage}) {
            state.errorStatus = newErrorStatus, 
            state.errorMessage = newErrorMessage 
        },
        loadRDF (state) {
            state.rdfstore.load("text/turtle", state.turtleCode, function(error, results){
                if (!error) {
                    state.storeSize = results 
                }
            })
        }
    },
    actions: {
        updateCode: ({ commit }, newCode) => {
            commit('updateCode', newCode) 
        },
        loadRDF: ({commit}) => {
            commit('loadRDF')
        },
        queryStore: ({state, commit}, sparqlCode) => {
            state.rdfstore.execute(sparqlCode, function(error, results){
                if (!error) {
                    commit('sparqlEditorStore/updateLocalResult', results, {root: true})
                }
            })
        }
    }
}