<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="row">
          <div class="navbar-header col-md-12">
            <headerVue/>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid qonsole">
      <div class="row flex-xl-nowrap">
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar"> <!-- Left column -->
          <div class="col-md-12 well vertical">
            <PrefixInput/>
          </div>
          <div class="col-md-12 well">
            <ExampleQueries/>
          </div>
        </div> <!-- End left column -->

        <div class="d-none d-xl-block col-xl-2 bd-toc"> <!-- right column -->
            <Endpoints/>
            <FormatInput/>
          <History/>
        </div> <!-- End right column -->

        <div class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"> <!-- Middle column -->
          <QueryButtons/>
          <QueryInput/>

          <Results/>
        </div>  <!-- End middle column -->

        <ErrorView/>
        <!-- results -->

      </div><!-- .container-->

  </div>
  <!-- <QonsoleFooter/> -->
  <PrefixModal/>
  <Messages/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Endpoints from './components/Endpoints.vue'
import PrefixInput from './components/PrefixInput.vue'
import FormatInput from './components/FormatInput.vue'
import ExampleQueries from './components/ExampleQueries.vue'
import QonsoleFooter from './components/QonsoleFooter.vue'
import PrefixModal from './components/PrefixModal.vue'
import Results from './components/Results.vue'
import QueryInput from './components/QueryInput.vue'
import ErrorView from './components/Error.vue'
import History from './components/History.vue'
import Messages from './components/Messages.vue'
import QueryButtons from './components/QueryButtons.vue'

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
    Endpoints,
    PrefixInput,
    FormatInput,
    ExampleQueries,
    QonsoleFooter,
    PrefixModal,
    Results,
    QueryInput,
    ErrorView,
    History,
    Messages,
    QueryButtons,
    HeaderVue: Header
  },
  mounted () {
    // TODO - Look in to the URL to see if we have additional config. Look at props to see if we have additional config
    this.initialise(defaults)
  },
  methods: {
    ...mapActions([
      'initialise'
    ])
  }
}
</script>

<style lang='scss'>
@import '~bootstrap/scss/bootstrap.scss';

$fa-font-path: "~font-awesome/fonts";
@import '~font-awesome/scss/font-awesome.scss';

.bd-toc {
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    height: calc(100vh - 4rem);
    overflow-y: auto;
    border-left: 1px solid #DDD;
}

.bd-toc {
    -ms-flex-order: 2;
    order: 2;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: .875rem;
}

.bd-sidebar {
    border-right: 1px solid #DDD;
    padding: 1em;
}

.query-buttons button {
    margin-left: 0.4em;
    margin-bottom: 0.4em;
}

.query-buttons {
  display: flex;
  flex-direction: row-reverse;
}
</style>
