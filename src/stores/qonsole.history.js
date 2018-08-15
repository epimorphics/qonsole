export default {
  state: {
    'history': []
  },
  getters: {},
  mutations: {
    add_history (state, queryItem) {
      // Check it has everything needed for a history item.
      if (!queryItem.date || !queryItem.query || !queryItem.elapsed) { throw new Error('Incorrect history object') }
      state.history.push(queryItem)
    }
  },
  actions: {}
}
