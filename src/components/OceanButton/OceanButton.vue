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

<style scoped lang="scss">
    button {
        color: white;
        background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(118,125,241,1) 46%, rgba(172,255,192,1) 100%);
    }
</style>