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
    add_prefix (state, prefixObj) {
      Vue.set(state.config.prefixes, prefixObj.prefix, prefixObj.uri)
    },
    remove_prefix (state, remove) {
      // Remove prefix from available
      let indx = state.config.prefixes.indexOf(remove)
      if (indx > -1) {
        state.config.prefixes.splice(indx, 1)
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
