<template>
  <div id="app">
    <h1>Welcome to {{ appTitle }}</h1>
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
</style>
