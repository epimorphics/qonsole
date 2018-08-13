<template>
  <div class="query-edit">
    <div id="query-edit-cm" class=""></div>
    <codemirror v-model="query" :options="cmOptions"></codemirror>
  </div>
</template>
<script>
// Support user editing of the current query
import { codemirror } from 'vue-codemirror'

// language sparql
import 'codemirror/mode/sparql/sparql.js'

export default {
  components: {
    codemirror
  },
  name: 'Prefix-Input',
  computed: {
    query: {
      get () {
        return this.$store.getters.query
      },
      set (value) {
        this.$store.commit('set_query', value)
      }
    }
  },
  data () {
    return {
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'sparql',
        theme: 'base16-light',
        lineNumbers: true,
        line: true
      }
    }
  }
}

</script>

<style scoped>
  @import "~codemirror/theme/base16-light.css"
</style>
