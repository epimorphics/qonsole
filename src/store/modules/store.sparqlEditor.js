const sparqlEditor = {
    namespaced: true, 
    state: () => ({
        SPARQLCode: '',
        jsonResponse: '',
        queryComplete: false, 
        storeQueryResult: '', 
        queryTime: ''
    }),
    mutations: {
        updateSPARQLCode (state, newCode) {
            state.SPARQLCode = newCode 
        },
        updateJSONResponse (state, newResponse) {
            state.jsonResponse = newResponse
        },
        // error handling 
        changeError (state, boolean) {
            state.error = boolean 
        },
        updateErrorMessage (state, errorMessage) {
            state.errorMessage = errorMessage
        },
        queryStore (state) {
            state.queryTime = 0
            state.queryComplete = false 
            var t0 = performance.now()
            state.rdfstore.execute(state.SPARQLCode, function(err,results) {
                console.log(err)
                if (!err){
                    state.error = false 
                    state.storeQueryResult = results 
                    state.queryComplete = true 
                } 
            })
            var t1 = performance.now()
            state.queryTime = Math.round(((t1-t0) + Number.EPSILON) * 100) / 100
        }
    },
    getters: {
        SPARQLCode: state => state.SPARQLCode,
        jsonResponse: state => state.jsonResponse, 
        storeQueryResult: state  => state.storeQueryResult,
        queryTime: state => state.queryTime,
        queryComplete: state => state.queryComplete
    }
  }
  
export default {sparqlEditor}