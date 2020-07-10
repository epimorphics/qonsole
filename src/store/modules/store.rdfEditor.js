const rdfEditor = {
  namespaced: true, 
  state: () => ({
      error: false,
      errorMessage: '', 
      turtleCode: '',
  }),
  mutations: {
    updateThisTurtleCode (state, newCode) {
        state.turtleCode = newCode
    }, 
  },
  actions: {
    loadRDF ({dispatch}, state) {
        dispatch('db/addGraph', state.turtleCode, {root: true})
    },
    updateTurtleCode ({commit}, newCode) {
        commit('updateThisTurtleCode', newCode)
    }
  }, 
  getters: {
    error: state => state.error,
    errorMessage: state => state.errorMessage,
    turtleCode: state => state.turtleCode, 
    rdfstore: state => state.rdfstore,
  }
}

export default {rdfEditor}