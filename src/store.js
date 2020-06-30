import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Error handling  
    error: false,
    errorMessage: '', 
    // RDF 

    // SPARQL
    SPARQLCode: '',
    jsonResponse: '',

    // Prefixes 

  },
  mutations: {
    updateSPARQLCode (state, newCode) {
        state.SPARQLCode = newCode 
    },
    updateJSONResponse (state, newResponse) {
        state.jsonResponse = newResponse
    },
    changeError (state, boolean) {
      state.error = boolean 
    },
    updateErrorMessage (state, errorMessage) {
      state.errorMessage = errorMessage
    }
  },
  getters: {
      SPARQLCode: state => state.SPARQLCode,
      jsonResponse: state => state.jsonResponse, 
      errorMessage: state => state.errorMessage,
      error: state => state.error
  }
})

export default store 