<template>
  <div v-if="!config.hideEndpoints">
    <h2>Endpoint</h2>
    <el-input type="text" v-model="endpoint" class="form-control" list="endpoints" />
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
        return this.$store.state.qonsole.endpoint
      },
      set (value) {
        this.$store.commit('set_endpoint', value)
      }
    }
  }
}
</script>
