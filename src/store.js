import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import qonsoleStore from './stores/qonsole'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    qonsole: qonsoleStore
  },
  plugins: [createPersistedState({
    reducer (state) {
      let a = _.cloneDeep(state) // Make copy of store
      // Remove values that shouldn't be persisted
      a.qonsole.error = ''
      a.qonsole.isLoading = ''
      a.qonsole.messages = []
      a.qonsole.outstandingQuery = false
      a.qonsole.results = ''
      a.qonsole.resultsError = ''
      a.qonsole.timeTaken = 0
      return a
    }
  })]
})
