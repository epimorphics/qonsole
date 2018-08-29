import Vue from 'vue'
import {renderPrefixes, getQueryBody} from '../query'

export default {
  state: {
    'selectedPrefixes': {}
  },
  getters: {
    selectedPrefixes: state => {
      return state.selectedPrefixes
    }
  },
  mutations: {
    add_prefix (state, {prefix, uri}) {
      if (!prefix || !uri) throw new Error('Prefix and uri required for new prefix')
      Vue.set(state.config.prefixes, prefix, uri)
    },
    remove_prefix (state, {prefix}) {
      // Remove prefix from available
      if (state.config.prefixes[prefix]) {
        delete state.config.prefixes[prefix]
      }
    },
    add_selectedPrefix (state, prefixObj) {
      Vue.set(state.selectedPrefixes, prefixObj.prefix, prefixObj.uri)
      // Also update the query and remove any prefixes not selected
      state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + getQueryBody(state.query) // TODO DRY
    },
    set_selectedPrefixes (state, selectedPrefixes) {
      state.selectedPrefixes = selectedPrefixes
      // Also update the query and remove any prefixes not selected
      // let queryPrefixes = getPrefixesFromQuery(state.query)
      state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + getQueryBody(state.query)
    }
  },
  actions: {}
}
