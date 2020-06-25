<template>
    <div> 
        <ul>
            <li v-for="prefix in prefixes" :key="prefix.id"> {{ prefix }} </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PrefixEditor',
    data () {
        return {
            prefixes: ['prefix','prefix','prefix']
        }
    }
}
</script>