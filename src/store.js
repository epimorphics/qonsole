import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const N3 = require('n3');
// const rdfstore = new N3.Store()

const store = new Vuex.Store({
  state: {
    // Overall 
    currentLanguage: '', 

    // Error handling  
    error: false,
    errorMessage: '',

    // RDF 
    turtleCode: '',
    prefixes: [], 
    rdfstore: new N3.Store(),

    // SPARQL
    SPARQLCode: '',
    jsonResponse: '',

    // Prefixes 
    selectedPrefixes: []
  },
  mutations: {
    updateSPARQLCode (state, newCode) {
      state.SPARQLCode = newCode 
    },
    updateTurtleCode (state, newCode) {
      state.turtleCode = newCode
    }, 
    updateJSONResponse (state, newResponse) {
      state.jsonResponse = newResponse
    },
    changeError (state, boolean) {
      state.error = boolean 
    },
    updateErrorMessage (state, errorMessage) {
      state.errorMessage = errorMessage
    },
    updateCurrentLanguage (state, newLanguage) {
      state.currentLanguage = newLanguage
    },
    addPrefix (state, newPrefix) {
      state.prefixes.push(newPrefix)
    },
    clearTurtleStore (state) {
      state.prefixes = []
      state.rdfstore = new N3.Store()
    },
    populateRDFStore (state, quad){
      state.rdfstore.addQuad(quad)
    },
    updateSelectedPrefixes (state, prefixes) {
      state.selectedPrefixes = prefixes
    }
  },
  getters: {
      SPARQLCode: state => state.SPARQLCode,
      jsonResponse: state => state.jsonResponse, 
      errorMessage: state => state.errorMessage,
      error: state => state.error,
      turtleCode: state => state.turtleCode, 
      currentLanguage: state => state.currentLanguage,
      prefixes: state => state.prefixes,
      rdfstore: state => state.rdfstore,
      selectedPrefixes: state => state.selectedPrefixes
  }
})

export default store 