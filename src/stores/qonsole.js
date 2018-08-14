import {renderPrefixes, getQueryBody} from '../query'
import query from './qonsole.query'
import example from './qonsole.example'
import history from './qonsole.history'
import Vue from 'vue'

const state = {
  'config': {},
  'endpoint': '',
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
  resultsError: '',
  ...query.state,
  ...example.state,
  ...history.state
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
  selectedPrefixes: state => {
    return state.selectedPrefixes
  },
  selectedFormat: state => {
    return state.selectedFormat
  },
  results: state => {
    return state.results
  },
  error: state => {
    return state.error
  },
  ...query.getters,
  ...example.getters,
  ...history.getters
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
  set_selectedPrefixes (state, selectedPrefixes) {
    state.selectedPrefixes = selectedPrefixes
    // Also update the query and remove any prefixes not selected
    // let queryPrefixes = getPrefixesFromQuery(state.query)
    state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + getQueryBody(state.query)
  },
  set_timeTaken (state, timeTaken) {
    state.timeTaken = timeTaken
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
  },
  ...query.mutations,
  ...example.mutations,
  ...history.mutations
}

const actions = {
  initialise ({ commit, state }, config) {
    commit('set_config', config)
    commit('set_endpoint', config.endpoints.default)
  },
  ...query.actions,
  ...example.actions,
  ...history.actions
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
