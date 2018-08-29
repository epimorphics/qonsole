import RemoteSparqlService from '../remote-sparql-service'
import {getPrefixesFromQuery} from '../query'
import _ from 'lodash'
import {Parser, Generator} from 'sparqljs'

const parser = new Parser()
const generator = new Generator()
const sparqlService = new RemoteSparqlService()

export default {
  state: {
    'query': '',
    'isLoading': false,
    outstandingQuery: undefined // Used to store query for aborting
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
    format_query ({ dispatch, commit, state }) {
      if (!state.query) { // Empty query
        return
      }
      try {
        let parsedQuery = parser.parse(state.query)
        state.query = generator.stringify(parsedQuery)
        dispatch('add_message', {message: 'Query formatted'})
      } catch (e) {
        dispatch('add_message', {message: 'Failed to format query'})
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
      if (state.outstandingQuery) {
        dispatch('add_message', {message: 'Aborting Query'})
        commit('set_isLoading', false)
        state.outstandingQuery.abort()
        state.outstandingQuery = null
        return
      }

      if (!state.endpoint || !state.endpoint.length) {
        throw new Error('Endpoint must be set')
      }

      if (!state.query || !state.query.length) {
        throw new Error('Query must be set')
      }

      // Clear the results
      commit('set_results', null)
      commit('set_timeTaken', 0)
      dispatch('add_message', {message: 'Running Query'})
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
          dispatch('add_message', {message: 'Query loaded'})
          commit('set_isLoading', false)
          commit('set_results', data)
          commit('set_timeTaken', elapsed)
          commit('add_history', {
            date: startDate.toISOString(),
            query,
            elapsed,
            count: 11 // TODO Fix count
          })
          state.outstandingQuery = null
        },
        error: function (err) {
          let elapsed = (new Date().getTime()) - startDate.getTime()
          dispatch('add_message', {message: 'Failed to run query'})
          commit('set_isLoading', false)
          commit('set_resultsError', err.message)
          commit('set_results', null)
          commit('add_history', {
            date: startDate.toISOString(),
            query,
            elapsed,
            count: 0
          })
          state.outstandingQuery = null
        }
      }

      state.outstandingQuery = sparqlService.execute(query, options)
    }
  }
}
