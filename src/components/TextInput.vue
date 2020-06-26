<template>
    <input type="text" :value="value" @input="e => $emit('input', e.target.value)">
</template>

<script>
    export default {
        name: "TextInput",
        props: ['value'],
    }
</script>

<style scoped>

</style>