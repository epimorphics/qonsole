<template>
  <div class="query-edit">
    <div id="query-edit-cm" class=""></div>
    <button @click="format_query">Format Query</button>
    <codemirror v-model="query" :options="cmOptions"></codemirror>
  </div>
</template>
<script>
// Support user editing of the current query
import { codemirror } from 'vue-codemirror'
import { mapActions, mapMutations } from 'vuex'

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
        this.checkQuery(value)
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
  },
  mounted () {
    window.codemirror = codemirror
  },
  methods: {
    ...mapActions([
      'checkQuery'
    ]),
    ...mapMutations([
      'format_query'
    ])
  }
}

</script>

<style>
  @import "~codemirror/theme/base16-light.css";

  .CodeMirror {
    text-align: left!important;
  }
</style>
