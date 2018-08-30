<template>
  <div>
    <h2> History </h2>
    <a href="#" v-if="historyItems.length" @click.prevent="clear_history">Clear</a>
    <historyItem v-for="hstryItm in historyItems.slice().reverse()" :key="hstryItm.date" :historyItem="hstryItm"/>
    <template v-if="!historyItems.length">
        Sorry, nothing in history yet
    </template>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import HistoryItem from './HistoryItem.vue'
// Display a single item in the history
export default {
  components: {
    HistoryItem
  },
  name: 'History',
  data () { return {} },
  params: {
    historyItem: Object
  },
  computed: {
    ...mapState({
      historyItems: state => state.qonsole.history
    })
  },
  methods: {
    ...mapMutations(['clear_history'])
  }
}
</script>
<style>
  historyItem {
      clear: both;
  }
</style>
