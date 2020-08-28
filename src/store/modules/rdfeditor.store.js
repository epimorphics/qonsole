/* Store module to handle RDF Editor component store */

const N3 = require('n3')

export default {
    namespaced: true,
    state: {
        // Attributes of the rdfEditor component 
        turtleCode: '',
        rdfstore: new N3.Store(), 
        errorStatus: false, 
        errorMessage: '',
    },
    getters: {
        // getters and computed props of rdfEditor 
        errorStatus: state => state.errorStatus, 
        errorMessage: state => state.errorMessage,
        turtleCode: state => state.turtleCode,
        resultsReady: state => state.resultsReady,
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
            const parser = new N3.Parser();
            parser.parse(
                state.turtleCode, 
                (_, quad, prefixes) => {
                    if (quad) {
                        state.rdfstore.addQuad(quad.subject, quad.predicate, quad.object)
                    } else {
                        console.log(prefixes)
                    }
                }
            )
        }
    },
    actions: {
        updateCode: ({ commit }, newCode) => {
            commit('updateCode', newCode) 
        },
        loadRDF: ({commit}) => {
            commit('loadRDF')
        },
        queryStore: () => {
            console.log("This function is under construction!")
        }
    }
}