import RemoteSparqlService from '../remote-sparql-service'
import {getPrefixesFromQuery} from '../query'
import _ from 'lodash'

var SparqlParser = require('sparqljs').Parser
var SparqlGenerator = require('sparqljs').Generator
var parser = new SparqlParser()
var generator = new SparqlGenerator()

const sparqlService = new RemoteSparqlService()

let outstandingQuery // Used to store query for aborting

export default {
  state: {
    'query': '',
    'isLoading': false
  },
  getters: {
    query: state => {
      return state.query
    },
    isLoading: state => {
      return state.isLoading
    }
  },
  mutations: {
    set_isLoading (state, isLoading) {
      state.isLoading = isLoading
    },
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
    save_query ({ dispatch, commit, state }) {
      commit('add_saved') // TODO
    },
    format_query ({ dispatch, commit, state }) {
      if (!state.query) { // Empty query
        return
      }
      try {
        let parsedQuery = parser.parse(state.query)
        state.query = generator.stringify(parsedQuery)
        dispatch('add_message', 'Query formatted')
      } catch (e) {
        dispatch('add_message', 'Failed to format query')
      }
    },

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
    runQuery ({ dispatch, commit, state }) {
      if (outstandingQuery) {
        dispatch('add_message', 'Aborting Query')
        commit('set_isLoading', false)
        outstandingQuery.abort()
        outstandingQuery = null
        return
      }

      // Clear the results
      commit('set_results', '')
      commit('set_timeTaken', 0)
      dispatch('add_message', 'Running Query')
      // Timer for total time taken
      let startDate = new Date()

      var query = state.query
      var format = state.selectedFormat

      commit('set_isLoading', true)

      var options = {
        url: state.endpoint,
        format: format,
        success: function (data) {
          let elapsed = (new Date().getTime()) - startDate.getTime()
          dispatch('add_message', 'Query loaded')
          commit('set_isLoading', false)
          commit('set_results', data)
          commit('set_timeTaken', elapsed)
          commit('add_history', {
            date: startDate.toISOString(),
            query,
            elapsed,
            count: 11 // TODO Fix count
          })
          outstandingQuery = null
        },
        error: function (err) {
          let elapsed = (new Date().getTime()) - startDate.getTime()
          dispatch('add_message', 'Failed to run query')
          commit('set_isLoading', false)
          commit('set_resultsError', err.message)
          commit('add_history', {
            date: startDate.toISOString(),
            query,
            elapsed,
            count: 0
          })
          outstandingQuery = null
        }
      }

      outstandingQuery = sparqlService.execute(query, options)
    }
  }
}
