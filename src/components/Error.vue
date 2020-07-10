<template>
    <div>
        <p> {{ this.$store.getters.errorMessage }} </p>
    </div>
</template>
<script>
import store from '@/store/store.js'

export default {
    name: 'Error',
    store: store 
}
</script>