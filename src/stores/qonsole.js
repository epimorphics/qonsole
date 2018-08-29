import query from './qonsole.query'
import saved from './qonsole.saved'
import history from './qonsole.history'
import prefixes from './qonsole.prefixes'
import messages from './qonsole.messages'

const state = {
  'config': {
    prefixes: {},
    queries: []
  },
  'endpoint': '',
  'selectedFormat': 'tsv',
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
  ...saved.state,
  ...history.state,
  ...prefixes.state,
  ...messages.state
}

const getters = {
  endpoint: state => {
    return state.endpoint
  },
  config: state => {
    return state.config
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
  ...saved.getters,
  ...history.getters,
  ...prefixes.getters,
  ...messages.getters
}

const mutations = {
  set_endpoint (state, endpoint) {
    state.endpoint = endpoint
  },
  set_config (state, config) {
    state.config = config
    state.selectedExample = config.queries[0]
    this.commit('load_saved', state.config.queries[0])
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
  ...saved.mutations,
  ...history.mutations,
  ...prefixes.mutations,
  ...messages.mutations
}

const actions = {
  initialise ({ commit, state }, config) {
    commit('set_config', config)
    commit('set_endpoint', config.endpoints.default)
  },
  ...query.actions,
  ...saved.actions,
  ...history.actions,
  ...prefixes.actions,
  ...messages.actions
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
