<template>
  <RootLayout>
    <router-view />
  </RootLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import RootLayout from './layouts/RootLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    RootLayout,
  },
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
