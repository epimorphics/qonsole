import Vue from 'vue'
import Vuex from 'vuex'
import qonsoleStore from './stores/qonsole'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    qonsole: qonsoleStore
  }
})
