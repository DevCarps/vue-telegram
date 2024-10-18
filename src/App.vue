<template>
  <NuxtPage />
  <ClientOnly>
    <HomeView />
  </ClientOnly>
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue';



</script>