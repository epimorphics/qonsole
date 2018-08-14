<template>
  <div v-if="!config.hideEndpoints">
    <label for="endpoints">SPARQL endpoint:</label>
    <input type="text" v-model="endpoint" list="endpoints" />
    <datalist id="endpoints">
        <option v-for="item of config.endpoints" :value="item" :key="item">{{item}}</option>
    </datalist>
  </div>
</template>
<script>
// Display all available endpoints
// Select endpoint
export default {
  name: 'Endpoints',
  data () { return {} },
  mounted () {},
  computed: {
    config: {
      get () {
        return this.$store.getters.config
      }
    },
    endpoint: {
      get () {
        return this.$store.state.endpoint
      },
      set (value) {
        this.$store.commit('set_endpoint', value)
      }
    }
  }
}
</script>
