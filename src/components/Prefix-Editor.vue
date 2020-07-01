<template>
    <div> 
        <h3>Prefixes</h3>
        <ul style="list-style-type:none">
            <li v-for="prefix in this.$store.getters.prefixes" :key="prefix.id">
                <input type="checkbox" :id="prefix[0]" :value="prefix" v-model="selectedPrefixes">
                <label :for="prefix"> {{ prefix[0] }}: {{ prefix[1] }} </label>
            </li>
        </ul>
    </div>
</template>
<script>
import store from '@/store.js'

export default {
    name: 'PrefixEditor',
    store: store, 
    data () {
        return {
            selectedPrefixes: [], 
        }
    },
    watch: {
        // whenever selectedPrefixes changes, this function will run
        selectedPrefixes: function (newSelectedPrefixes) {
            this.$store.commit('updateSelectedPrefixes', newSelectedPrefixes)
        }
    },
}
</script>