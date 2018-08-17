<template>
  <div class="query-buttons">
    <transition name="running">
      <button @click="runQuery" class="btn btn-success">
        {{isLoading ? 'Cancel' : 'Run'}}
      </button>
    </transition>
    <button @click="format_query" class="btn btn-info">
      Format
    </button>

    <button @click="save_query" class="btn btn-info">
      Save
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'runQuery',
      'format_query',
      'save_query'
    ])
  },
  computed: {
    isLoading: {
      get () {
        return this.$store.getters.isLoading
      }
    }
  }
}
</script>
<style>
  .running-enter-active, .fade-leave-active {
    transition: width .1s;
  }
  .running-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
