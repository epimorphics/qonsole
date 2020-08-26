<template>
    <div>
        <!-- Depending on the mode this component is in -->
        <!--   display corresponding error messages -->
        <p v-show="this.$store.getters['rdfEditorStore/errorStatus']
           && mode == 'turtle'"> 
            {{ this.$store.getters['rdfEditorStore/errorMessage'] }} </p>
        <p v-show="this.$store.getters['sparqlEditorStore/errorStatus']
           && mode == 'sparql'"> 
            {{ this.$store.getters['sparqlEditorStore/errorMessage'] }} </p>
    </div>
</template>
<script>
import store from '@/store/store.js'

export default {
    name: 'Error',
    store: store,
    props: ['mode'], 
}
</script>