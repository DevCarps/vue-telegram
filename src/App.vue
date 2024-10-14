<template>
  <RootLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RootLayout from './layouts/RootLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    RootLayout,
  },
});
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
