import Vue from 'vue'
import App from './App.vue'
// import './webStore.js'

Vue.config.productionTip = false

new Vue({
  // store: webStore, 
  render: h => h(App), 
}).$mount('#app')
