<template>
  <div>
    <h2 class="">Prefixes</h2>
    <a data-toggle="modal" href="#prefixEditor" class="btn" title="Add a SPARQL prefix">
      <i class="fa fa-plus-circle"></i>
    </a>
    <div class="list-inline prefixes">
      <div v-for="(prefix, key) of config.prefixes" class='prefix-holder' :key="prefix">
        <div class="prefix">{{key}}</div>
        <div :title="prefix" class="uri">{{prefix}}</div>
        <!-- <label>
          <input type='checkbox' @change="updateSelectedPrefixes(key)" :checked="!!selectedPrefixes[key]"  :data-prefix='key' />
          {{key}}
        </label> -->
      </div>
    </div>
  </div>
</template>
<script>
// Display all available prefixes as checkboxes
// Tick prefixes on and off
export default {
  name: 'Prefix-Input',
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
    updateSelectedPrefixes (prfx) {
      if (this.selectedPrefixes.hasOwnProperty(prfx)) {
        delete this.selectedPrefixes[prfx] // remove
      } else {
        this.selectedPrefixes[prfx] = this.config.prefixes[prfx]
      }
      this.selectedPrefixes = this.selectedPrefixes
    }
  }
}
</script>
<style>
  .prefix {
    float: right;
    margin-left: 5px;
    text-align: right;
  }
  .uri {
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    color: #666;
    font-size: 0.8em;
    line-height: 2.2em;
  }
  .prefix-holder{
    clear: both;
  }
</style>
