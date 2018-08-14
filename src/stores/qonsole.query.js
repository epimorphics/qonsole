import RemoteSparqlService from '../remote-sparql-service'
import {getPrefixesFromQuery} from '../query'
import _ from 'lodash'

var SparqlParser = require('sparqljs').Parser
var parser = new SparqlParser()

const sparqlService = new RemoteSparqlService()

export default {
  state: {
    'query': ''
  },
  getters: {
    query: state => {
      return state.query
    }
  },
  mutations: {
    set_query (state, query) {
      // TODO
      state.selectedPrefixes = getPrefixesFromQuery(query)
      // Check for errors in Query
      // Parse out the selected Prefixes.
      // Update the selected Prefixes Obj
      // state.selectedPrefixes = selectedPrefixes
      state.query = query
    }
  },
  actions: {
    checkQuery: _.debounce(({ commit, state }, query) => {
      if (!query) { // Empty query
        commit('set_error', null)
      }
      try {
        parser.parse(query)
        commit('set_error', null) // Didn't error. Remove
      } catch (e) {
        commit('set_error', e)
      }
    }, 800),

    /*
      Run the query on a remote server.
      Listen to the results
    */
    runQuery ({ commit, state }) {
      // Clear the results
      commit('set_results', '')
      commit('set_timeTaken', 0)
      // Timer for total time taken
      let startTime = new Date().getTime()

      var query = state.query
      var format = state.selectedFormat

      commit('set_isLoading', true)

      var options = {
        url: state.endpoint,
        format: format,
        success: function (data) {
          commit('set_isLoading', false)
          commit('set_results', data)
          commit('set_timeTaken', (new Date().getTime()) - startTime)
        },
        error: function (err) {
          console.error(err)
          commit('set_isLoading', false)
          commit('set_resultsError', err.message)
        }
      }

      sparqlService.execute(query, options)
    }
  }
}
