import RemoteSparqlService from '../remote-sparql-service'
import {getPrefixesFromQuery, renderPrefixes, getQueryBody} from '../query'
import Vue from 'vue'
import _ from 'lodash'

var SparqlParser = require('sparqljs').Parser
var parser = new SparqlParser()

const sparqlService = new RemoteSparqlService()

const state = {
  'config': {},
  'endpoint': '',
  'selectedExample': '',
  'selectedFormat': 'tsv',
  'isLoading': false,
  'selectedPrefixes': {},
  'timeTaken': 0,
  'results': '',
  'error': null,
  'formats': [
    {
      name: 'table',
      format: 'tsv'
    },
    {
      name: 'plain text',
      format: 'text'
    },
    {
      name: 'JSON',
      format: 'json'
    },
    {
      name: 'XML',
      format: 'xml'
    }
  ],
  'query': '',
  resultsError: ''
}

const getters = {
  endpoint: state => {
    return state.endpoint
  },
  isLoading: state => {
    return state.isLoading
  },
  config: state => {
    return state.config
  },
  selectedExample: state => {
    return state.selectedExample
  },
  selectedPrefixes: state => {
    return state.selectedPrefixes
  },
  selectedFormat: state => {
    return state.selectedFormat
  },
  results: state => {
    return state.results
  },
  query: state => {
    return state.query
  },
  error: state => {
    return state.error
  }
}

const mutations = {
  add_prefix (state, prefixObj) {
    Vue.set(state.config.prefixes, prefixObj.prefix, prefixObj.uri)
  },
  add_selectedPrefix (state, prefixObj) {
    Vue.set(state.selectedPrefixes, prefixObj.prefix, prefixObj.uri)
    // Also update the query and remove any prefixes not selected
    state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + getQueryBody(state.query) // TODO DRY
  },
  set_isLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  set_endpoint (state, endpoint) {
    state.endpoint = endpoint
  },
  set_config (state, config) {
    state.config = config
    state.selectedExample = config.queries[0]
    this.commit('set_selectedExample', state.config.queries[0])
  },
  set_selectedExample (state, selectedExample) {
    // Check if the selectedExample has prefixes already
    state.selectedExample = selectedExample
    if (Object.keys(getPrefixesFromQuery(selectedExample.query)).length < 1) { // If no prefixes in example query
      state.selectedPrefixes = state.config.prefixes
      // Add prefixes in to string before setting query
      state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + selectedExample.query
    } else {
      state.query = state.selectedExample.query
    }
  },
  set_selectedPrefixes (state, selectedPrefixes) {
    state.selectedPrefixes = selectedPrefixes
    // Also update the query and remove any prefixes not selected
    // let queryPrefixes = getPrefixesFromQuery(state.query)
    state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + getQueryBody(state.query)
  },
  set_timeTaken (state, timeTaken) {
    state.timeTaken = timeTaken
  },
  set_query (state, query) {
    // TODO
    state.selectedPrefixes = getPrefixesFromQuery(query)
    // Check for errors in Query
    // Parse out the selected Prefixes.
    // Update the selected Prefixes Obj
    // state.selectedPrefixes = selectedPrefixes
    state.query = query
  },
  set_selectedFormat (state, selectedFormat) {
    state.selectedFormat = selectedFormat
  },
  set_results (state, results) {
    state.results = results
  },
  set_resultsError (state, resultsError) {
    state.resultsError = resultsError
  },
  set_error (state, error) {
    state.error = error
  }
}

const actions = {
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
  initialise ({ commit, state }, config) {
    commit('set_config', config)
    commit('set_endpoint', config.endpoints.default)
  },
  runQuery ({ commit, state }) {
    commit('set_results', '')
    commit('set_timeTaken', 0)

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

/**
   * Check the output format. Reset output format to text for describe and construct queries
   * @param  {string} query The current query
   * @return {string} The preferred output format
   */
// var checkOutputFormat = function (query) {
//   if (isDescribeOrConstructQuery(query) && _.includes(['tsv'], selectedFormat())) {
//     setSelectedFormat('text')
//   }
//
//   return selectedFormat()
// }

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
