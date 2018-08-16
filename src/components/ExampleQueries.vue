<template>
  <div>
    <h2 class="">Example queries</h2>
    <div v-for="query in config.queries" :key="query.name" class="example">
      <a href="#" @click.prevent="selectedExample = query">{{query.name}}</a>
    </div>
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

<style>
  .example {
    border-bottom: 1px solid #DDD;
  }
</style>
