<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="row">
        <div class="navbar-header col-md-12">
          <h1 class="brand">Qonsole</h1>
          <h2 class="brand">a query console for SPARQL</h2>
        </div>
        </div>
      </div>
    </nav>

    <div class="container qonsole">
      <div class="col-md-12 well">
        <ExampleQueries/>
      </div>

      <div class="col-md-12 well vertical">
        <PrefixInput/>
      </div>

      <div class="col-md-12 well">
        <QueryInput/>
        <div class="query-chrome">
          <form class="form-inline" role="form">
            <div class="form-group">
                <Endpoints/>
            </div>
            <div class="form-group">
              <input type="hidden" class="form-control" id="sparqlEndpoint" />
            </div>
            <div class="form-group">
              <FormatInput/>
            </div>
            <div class="form-group">
              <a @click="runQuery" class="btn btn-success run-query form-control">perform query</a>
            </div>

          </form>
        </div>
      </div>

      <!-- results -->
      <Results/>

      <div class="row clearfix"></div>

      <QonsoleFooter/>
    </div><!-- .container-->

    <PrefixModal/>
  </div>
</template>

<script>
import Endpoints from './components/Endpoints.vue'
import PrefixInput from './components/PrefixInput.vue'
import FormatInput from './components/FormatInput.vue'
import ExampleQueries from './components/ExampleQueries.vue'
import QonsoleFooter from './components/QonsoleFooter.vue'
import PrefixModal from './components/PrefixModal.vue'
import Results from './components/Results.vue'
import QueryInput from './components/QueryInput.vue'
import { mapActions } from 'vuex'

import defaults from './default-config'
/* TODO
** Add loading amimation
** Support passing in query or config as module
**
**
*/

/**
* Check to see if a query has been passed via the URL
* @return {string} The query passed-in via the URL, or null
*/
// var checkForURLQuery = function () {
//   return getConfig().allowQueriesFromURL ? searchParams().query : null
// }

export default {
  name: 'app',
  components: {
    Endpoints, PrefixInput, FormatInput, ExampleQueries, QonsoleFooter, PrefixModal, Results, QueryInput
  },
  mounted () {
    // TODO - Look in to the URL to see if we have additional config. Look at props to see if we have additional config
    this.initialise(defaults)
  },
  methods: {
    ...mapActions([
      'runQuery',
      'initialise'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
