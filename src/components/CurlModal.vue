<template>
<el-dialog
  title="Query curl command"
  :visible="visible" v-on:update:visible="$emit('update:visible', $event)"
  width="30%">
  <div class="modal-body">
    <form class="form-horizontal" role="form">
      <el-button @click.prevent="copyToClipboard(curlString)"> copy </el-button>
      <el-input
        type="textarea"
        :rows="8"
        placeholder="..."
        v-model="curlString">
      </el-input>
    </form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="button" class="btn btn-default" @click="close">close</el-button>
  </span>
</el-dialog>
</template>
<script>
import {mapState} from 'vuex'
import copyToClipboard from '../clipboard'

export default {
  name: 'Prefix-Modal',
  data () {
    return {}
  },
  mounted () {
  },
  props: {
    visible: Boolean
  },
  watch: {
    visible () {}
  },
  computed: {
    ...mapState({
      config: state => state.qonsole.config,
      query: state => state.qonsole.query,
      endpoint: state => state.qonsole.endpoint,
      selectedFormat: state => state.qonsole.selectedFormat
    }),
    curlString () {
      console.log(this.endpoint)
      return `curl '${this.endpoint}?query=${encodeURIComponent(this.query)}&output=${this.selectedFormat}'` // .replace(/\n/g, '\\\n')
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    copyToClipboard
  }
}
</script>
