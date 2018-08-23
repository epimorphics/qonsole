<template>
  <div>
    <h2> Format </h2>
    <el-select class="form-control" v-model="selectedFormat" name="format">
      <el-option v-for="format in formats" :key="format.name" :value="format.format">{{format.name}}</el-option>
    </el-select>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// Show available output formats
// Select output format
export default {
  computed: {
    selectedFormat: {
      get () {
        return this.$store.getters.selectedFormat
      },
      set (value) {
        this.$store.commit('set_selectedFormat', value)
      }
    },
    ...mapState({
      formats: state => state.qonsole.formats
    })
  }
}
</script>
