<template>
  <div>
    <h2> History </h2>
    <historyItem v-for="hstryItm in historyItems" :key="hstryItm.date" :historyItem="hstryItm"/>
    <template v-if="!historyItems.length">
        Sorry, nothing in history yet
    </template>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import HistoryItem from './HistoryItem.vue'
// Display a single item in the history
export default {
  components: {
    HistoryItem
  },
  name: 'History',
  data () { return {} },
  mounted () {},
  params: {
    historyItem: Object
  },
  computed: {
    ...mapState({
      historyItems: state => state.qonsole.history
    })
  }
}
</script>
<style>
  historyItem {
      clear: both;
  }
</style>
