<template>
    <button @click="onClickHandler">
        Click Me
    </button>
</template>

<script lang="ts">

export default {
    methods: {
        onClickHandler() {
            console.log('clicked');
            alert('clicked');
        }
    }
}
</script>

<style scoped>
    button {
        background-color: rgb(86, 83, 251);
    }
</style>