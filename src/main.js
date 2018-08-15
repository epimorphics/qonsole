import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import VueMoment from 'vue-moment'
Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(VueHighlightJS)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
