<template>
<el-dialog
  title="Add a SPARQL prefix"
  :visible.sync="visible"
  width="30%">
  <div class="modal-body">
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="inputPrefix" class="col-lg-2 control-label">Prefix</label>
        <el-input type="text" class="form-control" id="inputPrefix" v-model="prefix" placeholder="Prefix" autofocus/>
      </div>
      <div class="form-group">
        <label for="inputURI" class="col-lg-2 control-label">URI</label>
        <el-input type="text" class="form-control" id="inputURI" v-model="uri" placeholder="URI"/>
      </div>
    </form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="button" class="btn btn-default" @click="close">cancel</el-button>
    <el-button type="button" class="btn btn-primary" @click="addPrefix" data-dismiss="modal" id="addPrefix">Save Query</el-button>
  </span>
  <div class="modal-footer">

  </div>
</el-dialog>
</template>
<script>

export default {
  name: 'Saved-Queries-Add',
  data () {
    return {
      name: ''
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
    close () {
      this.$emit('update:visible', false)
    },
    save () {
      // Emit event?
      this.close()
    }
  }
}
</script>
