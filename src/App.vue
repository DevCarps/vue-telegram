<template>
  <RootLayout />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import RootLayout from './layouts/RootLayout.vue';

// Import your Telegram Web App functionality
import { useWebApp } from 'vue-tg';

export default defineComponent({
  name: 'App',
  components: {
    RootLayout,
  },
  setup() {
    const tele = window.Telegram.WebApp;
    const webApp = useWebApp(); // Use the hook if necessary

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
