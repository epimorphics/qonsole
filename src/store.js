import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const N3 = require('n3');
// const rdfstore = new N3.Store()
var rdfStore = require('rdfstore');

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
    rdfstore: new rdfStore.Store(function(err, store) {
      // the new store is ready
      console.log(err)
      return store 
    }),
    storeQueryResult: [], 

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
      state.rdfstore = new rdfStore.Store(function(err, store) {
        console.log(err)
        return store
      });
    },
    // populateRDFStore (state, quad){
    //   state.rdfstore.addQuad(quad)
    // },
    loadRDF (state) {
      state.rdfstore.load("text/turtle", state.turtleCode, function(err){ console.log(err) })
    }, 
    updateSelectedPrefixes (state, prefixes) {
      state.selectedPrefixes = prefixes
    },
    queryStore (state) {
      state.rdfstore.execute(state.SPARQLCode, function(err,results) {
        if (err) {
          console.log(err)
        } else {
          state.storeQueryResult = results 
          console.log(state.storeQueryResult)
        }
      })
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
      selectedPrefixes: state => state.selectedPrefixes,
      fileText: state => state.fileText,
      storeQueryResult: state  => state.storeQueryResult
  }
})

export default store 