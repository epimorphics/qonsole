<template>
  <div class="modal fade" id="prefixEditor" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Add a SPARQL prefix</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="inputPrefix" class="col-lg-2 control-label">Prefix</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="inputPrefix" v-model="prefix" placeholder="Prefix" autofocus>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-offset-2 col-lg-10">
                <button class="btn btn-sm btn-primary" @click.prevent="lookupPrefix(prefix)" id="lookupPrefix">Lookup <span></span> on prefix.cc</button>
              </div>
            </div>
            <div class="form-group">
              <label for="inputURI" class="col-lg-2 control-label">URI</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="inputURI" v-model="uri" placeholder="URI">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">cancel</button>
          <button type="button" class="btn btn-primary" @click.prevent="addPrefix" data-dismiss="modal" id="addPrefix">add prefix</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>
<script>
// Support adding a new prefix to selection
// Lookup prefix uri on prefix.cc
import superagent from 'superagent'

export default {
  data () {
    return {
      prefix: '',
      uri: ''
    }
  },
  computed: {
    config: {
      get () {
        return this.$store.getters.config
      }
    },
    selectedPrefixes: {
      get () {
        return this.$store.getters.selectedPrefixes
      },
      set (value) {
        this.$store.commit('set_selectedPrefixes', value)
      }
    }
  },
  methods: {
    /**
       * Lookup a prefix on prefix.cc
       * @param  prefix Input string
       */
    lookupPrefix (prefix) {
      let mVue = this
      if (!prefix) { return }
      superagent.get(`http://prefix.cc/${prefix}.file.json`)
        .end((err, res) => {
          if (err) { console.error(err); return } // TODO Handle this error. Display issue to user.
          mVue.uri = res.body[prefix]
        })
    },
    addPrefix () {
      // Add to globally available prefixes
      // Add to selected prefixes
      this.$store.commit('add_prefix', {prefix: this.prefix, uri: this.uri})
      this.$store.commit('add_selectedPrefix', {prefix: this.prefix, uri: this.uri})
      // Clean modal
      this.prefix = ''
      this.uri = ''
    }
  }
}
</script>
