export default {
  state: {
    'messages': []
  },
  getters: {},
  mutations: {
    add_message (state, message) {
      state.messages.push(message)
    },
    remove_message (state, message) {
      // Find message place in array
      let indx = state.messages.indexOf(message)
      if (indx > -1) {
        state.messages.splice(indx, 1)
      }
    }
  },
  actions: {
    add_message: ({ commit, state }, message, duration = 5000) => {
      commit('add_message', message)
      setTimeout(() => {
        commit('remove_message', message)
      }, duration)
    }
  }
}
