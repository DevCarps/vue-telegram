<template>
  <div :class="interClass">
    <!-- Your layout content goes here -->
    <slot></slot> <!-- Allows for content to be passed to this layout -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Remove the import for 'next/font/google'

export default defineComponent({
  name: 'RootLayout',
  computed: {
    interClass() {
      return ''; // Adjust this logic as needed
    },
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
