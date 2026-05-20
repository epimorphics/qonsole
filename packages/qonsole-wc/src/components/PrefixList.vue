<template>
  <ul class="prefixes">
    <li v-for="prefix in prefixes" :key="prefix.name" class="prefix">
      <label>
        <input
          type="checkbox"
          :checked="prefix.active"
          :data-prefix="prefix.name"
          :value="prefix.uri"
          @change="
            emit('toggle', prefix.name, prefix.uri, $event.target.checked)
          "
        />
        {{ prefix.name === '' ? ':' : prefix.name }}
      </label>
    </li>
    <li class="keep">
      <button
        type="button"
        class="btn-add-prefix"
        title="Add a SPARQL prefix"
        @click="emit('open-add-dialog')"
      >
        +
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  prefixes: { type: Array, default: () => [] },
})

const emit = defineEmits(['toggle', 'open-add-dialog'])
</script>

<style>
.prefixes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.prefixes .prefix label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: normal;
  cursor: pointer;
}
.btn-add-prefix {
  background: none;
  border: 1px solid #aaa;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-add-prefix:hover {
  background: #eee;
}
</style>
