import {getPrefixesFromQuery, renderPrefixes} from '../query'

export default {
  state: {
    'selectedExample': ''
  },
  getters: {
    selectedExample: state => {
      return state.selectedExample
    }
  },
  mutations: {
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
    }
  },
  actions: {}
}
