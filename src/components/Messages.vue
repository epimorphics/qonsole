<template>
  <div class='messages'>
    <template v-for="message in messages">
      <transition name="fade" :key="message">
        <div class="message">{{message}}</div>
      </transition>
    </template>
  </div>
</template>
<script>
import {mapState} from 'vuex'
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
  computed: {
    ...mapState({
      messages: state => state.qonsole.messages
    })
  }
}
</script>
<style>
  .messages {
    position: fixed;
    bottom: 10px;
    left: 0px;
    width: 100%;
  }
  .message {
    background: rgba(100,100,100, 0.7);
    opacity: 0.7;
    border: 1px solid #BBB;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    color: #FFF;
    text-shadow: 1px 1px 1px #DDD;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
