<script setup lang="ts">
import { ref } from 'vue';
import OceanButton from '../OceanButton/OceanButton.vue';

defineProps<{ msg: string }>()

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <OceanButton />

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>


<style lang="scss">
// Note: Using scoped here will override the OceanButton's button style rule
// TODO: figure out why
@import '../../style.scss';

button {
  background-color: $mainColor;
}

.read-the-docs {
  color: #888;
}

p {
  color: blue;
}
</style>
