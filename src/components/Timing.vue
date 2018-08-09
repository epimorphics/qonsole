<template>
  <span>
    {{timeTaken}} ms
    {{resultsCount}} result${suffix} in ${duration} ${min} min ${sec}.${ms} s
  </span>
</template>
<script>
// Display the query count and timing
import { mapState } from 'vuex'

/*
var duration = new Date().getTime() - _startTime
var ms = duration % 1000
duration = Math.floor(duration / 1000)
var sec = duration % 60
var min = Math.floor(duration / 60)
var suffix = (count !== 1) ? 's' : ''
*/
export default {
  props: ['resultsCount'],
  computed: {
    ...mapState({
      timeTaken: state => state.qonsole.timeTaken
    })
  }
}
</script>
