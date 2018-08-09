<template>
  <div>
    <h2 class="">Example queries</h2>
    <span class="form-inline">
      <select v-model="selectedExample" class="form-control" id="examples">
        <option v-for="query in config.queries" :value="query" :key="query.name">{{query.name}}</option>
      </select>
    </span>
  </div>
</template>
<script>
// List the example queries from the config
// Select current query
export default {
  name: 'ExampleQueries',
  computed: {
    query: {
      get () {
        return this.$store.getters.query
      },
      set (value) {
        this.$store.commit('set_query', value)
      }
    },
    selectedExample: {
      get () {
        return this.$store.getters.selectedExample
      },
      set (value) {
        this.$store.commit('set_selectedExample', value)
      }
    },
    config: {
      get () {
        return this.$store.getters.config
      }
    }
  }
}
</script>
