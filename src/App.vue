<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerVue/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <PrefixInput/>
          <SavedQueries/>
        </el-aside>
        <el-main>
          <QueryButtons/>
          <QueryInput/>
          <ErrorView/>
          <Results/>
        </el-main>
        <el-aside width="200px">
          <a href="#" @click.prevent="showConfigModal = true" title="Add a SPARQL prefix">
            <i class="fa fa-plus-circle"></i>
          </a>
          <Endpoints/>
          <FormatInput/>
          <History/>
        </el-aside>
      </el-container>
    </el-container>
    <!-- <Footer/> -->
    <Messages/>
    <ConfigModal v-bind:visible.sync="showConfigModal"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Endpoints from './components/Endpoints.vue'
import PrefixInput from './components/PrefixInput.vue'
import FormatInput from './components/FormatInput.vue'
import SavedQueries from './components/SavedQueries.vue'
import Footer from './components/Footer.vue'
import Results from './components/Results.vue'
import QueryInput from './components/QueryInput.vue'
import ErrorView from './components/Error.vue'
import History from './components/History.vue'
import Messages from './components/Messages.vue'
import QueryButtons from './components/QueryButtons.vue'
import ConfigModal from './components/ConfigModal.vue'

import { mapActions } from 'vuex'

import defaults from './default-config'
/* TODO
** Support passing in query or config as module
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
  data () {
    return {
      showConfigModal: false
    }
  },
  components: {
    ConfigModal,
    Endpoints,
    PrefixInput,
    FormatInput,
    SavedQueries,
    Footer,
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
$fa-font-path: "~font-awesome/fonts";
@import '~font-awesome/scss/font-awesome.scss';

/* icon font path, required */
// import 'element-ui/lib/theme-chalk/index.css'

@import "~element-ui/lib/theme-chalk/index.css";

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
