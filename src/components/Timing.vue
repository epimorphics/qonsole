<template>
  <span>
    {{resultsCount}} result(s) in {{timeTaken}}ms
  </span>
</template>
<script>
// Display the query count and timing

/*
var duration = new Date().getTime() - _startTime
var ms = duration % 1000
duration = Math.floor(duration / 1000)
var sec = duration % 60
var min = Math.floor(duration / 60)
var suffix = (count !== 1) ? 's' : ''
*/
export default {
  props: ['resultsCount', 'timeTaken']
}
</script>
