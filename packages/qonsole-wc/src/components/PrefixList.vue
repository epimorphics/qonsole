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
  gap: 0.5em;
  align-items: center;
}
.prefixes .prefix label {
  display: flex;
  align-items: center;
  /* WCAG 2.2 target size: keep 24px clear around each checkbox */
  min-height: 24px;
  gap: 0.25em;
  font-weight: normal;
  cursor: pointer;
}
.btn-add-prefix {
  background: none;
  border: 1px solid var(--qonsole-border-color, #aaa);
  border-radius: 50%;
  /* WCAG 2.2 target size minimum */
  width: max(24px, 1.5em);
  height: max(24px, 1.5em);
  cursor: pointer;
  font-size: 1em;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-add-prefix:hover {
  filter: brightness(0.95);
  background: var(--qonsole-table-header-bg, #eee);
}
</style>
