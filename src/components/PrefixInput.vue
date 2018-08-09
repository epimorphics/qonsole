<template>
  <div>
    <h2 class="">Prefixes</h2>
    <ul class="list-inline prefixes">
      <li v-for="(prefix, key) of config.prefixes" class='prefix' :key="prefix">
        <label>
          <input type='checkbox' @change="updateSelectedPrefixes(key)" :checked="!!selectedPrefixes[key]"  :data-prefix='key' />
          {{key}}
        </label>
      </li>
    </ul>
    <a data-toggle="modal" href="#prefixEditor" class="btn" title="Add a SPARQL prefix">
      <i class="fa fa-plus-circle"></i>
    </a>
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
