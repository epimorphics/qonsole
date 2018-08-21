import {getPrefixesFromQuery, renderPrefixes} from '../query'

export default {
  state: {},
  getters: {},
  mutations: {
    set_selectedSaved (state, selectedSaved) {
      // Check if the selectedExample has prefixes already
      if (Object.keys(getPrefixesFromQuery(selectedSaved.query)).length < 1) { // If no prefixes in example query
        state.selectedPrefixes = state.config.prefixes
        // Add prefixes in to string before setting query
        state.query = renderPrefixes(state.selectedPrefixes) + '\n\n' + selectedSaved.query
        if (selectedSaved.endpoint) {
          state.endpoint = selectedSaved.endpoint
        }
      } else {
        state.query = state.selectedExample.query
      }
    }
  },
  actions: {}
}
