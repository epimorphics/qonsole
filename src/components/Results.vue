<template>
  <div id="results-block" class="row sparql sparql-results">
    <div class="col-md-12">
      <div class="well">
        <div class="row">
          <div class="col-md-12">
            <timing :timeTaken="timeTaken" :resultsCount="resultsCount"/>
            <div v-if="isLoading">
              Loading...
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" id="results">
            <h2 v-if="!results && resultsError" class="col-md-12">
              <pre class='text-danger'>
                {{resultsError}}
              </pre>
            </h2>
            <h2 v-if="!results" class="col-md-12">Query results</h2>
            <codemirror v-if="showIn === 'codemirror'" v-model="results._val" :options="codeMirrorOptions"></codemirror>
            <div id="table" v-if="showIn === 'table'">
              Table
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Display the current query results
// Uses either codeMirror or $DataTables to display result
/* global $ */
import { codemirror } from 'vue-codemirror'

// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/xml/xml.js'

import timing from './Timing'
import {mapState} from 'vuex'

export default {
  components: {
    codemirror, timing
  },
  data () {
    return {
      showIn: 'codemirror',
      codeMirrorOptions: {
        mode: 'text/javascript',
        lineNumbers: true,
        extraKeys: {'Ctrl-Q': function (cm) { cm.foldCode(cm.getCursor()) }},
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        foldGutter: true,
        readOnly: true
      }
    }
  },
  computed: {
    resultsCount () {
      if (this.results) {
        return this.results.asFormat(this.selectedFormat, this.config).count
      }
    },
    results: {
      get () {
        return this.$store.getters.results
      }
    },
    config: {
      get () {
        return this.$store.getters.config
      }
    },
    selectedFormat: {
      get () {
        return this.$store.getters.selectedFormat
      }
    },
    query: {
      get () {
        return this.$store.getters.query
      }
    },
    isLoading: {
      get () {
        return this.$store.getters.isLoading
      }
    },
    resultsError: {
      get () {
        return this.$store.getters.resultsError
      }
    },
    ...mapState({
      timeTaken: state => state.qonsole.timeTaken
    })
  },
  watch: {
    results () {
      if (!this.results || !this.results.asFormat) return
      var options = this.results.asFormat(this.selectedFormat, this.config)
      if (options && options.table) {
        this.showTableResult(options)
      } else {
        this.codeMirrorOptions.mode = options.mime
        this.showIn = 'codemirror' // Adds codemirror to page
      }
    }
  },
  methods: {
    /**
       * Show the result using jQuery dataTables
       * @param  {object} options Display options
       */
    showTableResult (options) {
      // showResultsTimeAndCount(options.count)
      this.showIn = 'table'

      options.oLanguage = {
        'sEmptyTable': 'Query did not return any results.'
      }

      // if user has specified an order, don't let datatables override the sort
      if (this.query.match(/order by/i)) {
        options.aaSorting = []
      }

      // Wait for the DOM element to be displayed
      this.$nextTick(function () {
        $('#table').empty()
          .append("<div class='auto-overflow'></div>")
          .children()
          .append("<table cellpadding='0' cellspacing='0' border='0' class='display'></table>")
          .children()
          .dataTable(options)
      }, 500)
    }
  }
}

</script>

<style>
  @import "~codemirror/theme/base16-light.css";

  .CodeMirror {
    text-align: left!important;
  }
</style>
