<template>
  <div class="history-item" @click='set_query(historyItem.query)'>
    <span class="date">{{historyItem.date | moment("from", "now")}}</span>
    <span class="query">
      <!-- <pre v-highlightjs> -->
          <!-- <code class="sparql"> -->
          {{historyItem.query | getQueryBody}}
        <!-- </code> -->
      <!-- </pre> -->
    </span>
    <span class="elapsed">
      {{historyItem.elapsed}}
      <span class="elapsed-unit">ms</span>
    </span>
    <span class="count">
      {{historyItem.count}} items
    </span>
    <span class="error" v-if="historyItem.error">
      {{historyItem.error}}
    </span>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { getQueryBody } from '../query'
// Display a single item in the history
let intervalId

export default {
  name: 'HistoryItem',
  data () { return {} },
  mounted () {
    let vm = this
    // Every 5 seconds re-draw all history. updates timers
    intervalId = setInterval(function () {
      vm.historyItem.date = vm.historyItem.date
      // vm.$forceUpdate()
    }, 5000)
  },
  beforeDestroy () {
    clearInterval(intervalId)
  },
  props: {
    historyItem: Object
  },
  computed: {},
  methods: {
    ...mapMutations([
      'set_query'
    ])
  },
  filters: {
    getQueryBody
  }
}
</script>
<style scoped>
  @import '~/vue-highlightjs/styles/default.min.css';

  .history-item {
    padding: 5px;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    grid-gap: 0%;
    border: 1px solid #000;
    margin-bottom: 2px;
    cursor: pointer;
    border-radius: 2px;
  }
  .date {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    text-align: left;
    font-size: 0.8em;
  }
  .query {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    font-style: italic;
    font-weight: 100;
    color: #666;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .elapsed {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    text-align: right;
  }
  .count {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    text-align: right;
  }
</style>
