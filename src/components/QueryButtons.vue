<template>
  <el-row>
    <el-button @click="save_query" type="warning" icon="el-icon-star-off"/>

    <el-button @click="format_query" icon="el-icon-check"/>

    <transition name="running">
      <el-button @click="runQuery" :type="isLoading ? 'danger' : 'success'">
        {{isLoading ? 'Cancel' : 'Run'}}
      </el-button>
    </transition>

  </el-row>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    save_query () {
      this.$prompt('Please name saved query', 'Tip', {
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel'
      }).then(({value}) => {
        this.save_current_state(value)
      }).catch(() => {})
    },
    ...mapMutations(['save_current_state']),
    ...mapActions([
      'runQuery',
      'format_query'
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
