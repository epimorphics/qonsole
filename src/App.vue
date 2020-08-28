<template>
  <div id="app">
    <img src="@/assets/logo.png" id="logo"/>
    <AppNav/>
  </div>
</template>

<script>
import AppNav from './components/App-Navigation.vue'
export default {
  name: 'App',
  components: {
    AppNav 
  },
  data () {
    return {
      appTitle: 'Qonsole 2.0'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 220px;
  height: 46px; 
}
</style>