<template>
<el-dialog
  title="Qonsole config editor"
  :visible.sync="visible"
  width="30%">
  <div class="modal-body">
    <form class="form-horizontal" role="form">
      <el-input
        type="textarea"
        :rows="8"
        placeholder="{}"
        v-model="config">
      </el-input>
    </form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="button" class="btn btn-default" @click="close">cancel</el-button>
    <el-button type="button" class="btn btn-primary" @click="saveConfig(config)" data-dismiss="modal">load</el-button>
  </span>
</el-dialog>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'Prefix-Modal',
  data () {
    return {
      config: {}
    }
  },
  mounted () {
    this.loadConfig()
  },
  props: {
    visible: Boolean
  },
  watch: {
    visible () {
      this.loadConfig()
    }
  },
  // computed: {
  //   config: {
  //     get () {
  //       return _.cloneDeep(this.$store.getters.config)
  //     }
  //   }
  // },
  methods: {
    loadConfig () {
      this.config = JSON.stringify(this.$store.getters.config)
    },
    saveConfig (confStr) {
      let conf
      try {
        conf = JSON.parse(confStr)
      } catch (e) {
        this.add_message({message: 'Failed to parse config'})
      }
      this.set_config(conf)
      this.$emit('update:visible', false)
    },
    close () {
      this.$emit('update:visible', false)
    },
    ...mapMutations(['set_config']),
    ...mapActions(['add_message'])
  }
}
</script>
