<template>
  <main class="p-4">
    <div v-if="userData">
      <h1 class="text-2xl font-bold mb-4">User Data</h1>
      <ul>
        <li>ID: {{ userData.id }}</li>
        <li>First Name: {{ userData.first_name }}</li>
        <li>Last Name: {{ userData.last_name || 'N/A' }}</li>
        <li>Username: {{ userData.username || 'N/A' }}</li>
        <li>Language Code: {{ userData.language_code }}</li>
        <li>Is Premium: {{ userData.is_premium ? 'Yes' : 'No' }}</li>
      </ul>
    </div>
    <div v-else>Loading...</div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import WebApp from '@twa-dev/sdk';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default defineComponent({
  setup() {
    const userData = ref<UserData | null>(null);

    onMounted(() => {
      if (WebApp.initDataUnsafe.user) {
        userData.value = WebApp.initDataUnsafe.user as UserData;
      }
    });

    return { userData };
  },
});
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
