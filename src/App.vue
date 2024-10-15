<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const tele = window.Telegram.WebApp;

    onMounted(() => {
      tele.ready();
    });
  },
});
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
