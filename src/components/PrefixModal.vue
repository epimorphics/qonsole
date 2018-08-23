<template>
<el-dialog
  title="Add a SPARQL prefix"
  :visible.sync="visible"
  width="30%">
  <div class="modal-body">
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="inputPrefix" class="col-lg-2 control-label">Prefix</label>
        <div class="col-lg-10">
          <el-input type="text" class="form-control" id="inputPrefix" v-model="prefix" placeholder="Prefix" autofocus/>
        </div>
      </div>
      <div class="form-group">
        <div class="col-lg-offset-2 col-lg-10">
          <el-button class="btn btn-sm btn-primary" @click.prevent="lookupPrefix(prefix)" id="lookupPrefix">Lookup <span></span> on prefix.cc</el-button>
        </div>
      </div>
      <div class="form-group">
        <label for="inputURI" class="col-lg-2 control-label">URI</label>
        <div class="col-lg-10">
          <el-input type="text" class="form-control" id="inputURI" v-model="uri" placeholder="URI"/>
        </div>
      </div>
    </form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="button" class="btn btn-default" @click="close">cancel</el-button>
    <el-button type="button" class="btn btn-primary" @click="addPrefix" data-dismiss="modal" id="addPrefix">add prefix</el-button>
  </span>
</el-dialog>
</template>
<script>
// Support adding a new prefix to selection
// Lookup prefix uri on prefix.cc
import superagent from 'superagent'

export default {
  name: 'Prefix-Modal',
  data () {
    return {
      prefix: '',
      uri: ''
    }
  },
  props: {
    visible: Boolean
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
    close () {
      this.$emit('update:visible', false)
    },
    addPrefix () {
      // Add to globally available prefixes
      // Add to selected prefixes
      this.$store.commit('add_prefix', {prefix: this.prefix, uri: this.uri})
      this.$store.commit('add_selectedPrefix', {prefix: this.prefix, uri: this.uri})
      // Clean modal
      this.prefix = ''
      this.uri = ''
      this.close()
    }
  }
}
</script>
