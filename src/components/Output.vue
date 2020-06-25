<template>
    <div>
        <div v-if="resultType == 'Text'"> If result type is text </div>
    </div>
</template>
<script>
export default {
    name: 'Output',
    props: ['resultType', 'result']
}
</script>