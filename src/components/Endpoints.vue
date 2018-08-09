<template>
  <div>
    <label for="endpoints">SPARQL endpoint:</label>
    <select class="form-control" v-model="endpoint" id="endpoints">
      <option v-for="item of config.endpoints" :value="item" :key="item">{{item}}</option>
    </select>
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
