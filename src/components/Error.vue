<template>
  <div class="error" v-if="error">
    <pre class="error">{{error.message}}</pre>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Error',
  computed: {
    ...mapState({
      error: state => state.qonsole.error
    })
  },
  data () {
    return {}
  }
}

</script>

<style>
  .error pre {
    background-color: #dc3545;
    color: #fff;
  }
</style>
