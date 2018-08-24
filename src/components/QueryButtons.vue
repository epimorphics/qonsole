<template>
  <el-row>
    <el-button @click="$store.commit('add_saved')" type="warning" icon="el-icon-star-off"/>

    <el-button @click="format_query" icon="el-icon-check"/>

    <transition name="running">
      <el-button @click="runQuery" :type="isLoading ? 'danger' : 'success'">
        {{isLoading ? 'Cancel' : 'Run'}}
      </el-button>
    </transition>

  </el-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'runQuery',
      'format_query',
      'add_saved'
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
