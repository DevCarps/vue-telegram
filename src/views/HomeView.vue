<template>
  <div>
    <h1>Welcome to Telegram</h1>
    <main class="p-4">
      <div v-if="userData">
        <h2 class="text-2xl font-bold mb-4">User Data</h2>
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
  </div>
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
      console.log("WebApp.initDataUnsafe:", WebApp.initDataUnsafe); // Log the entire object
      if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
        userData.value = WebApp.initDataUnsafe.user as UserData;
      } else {
        console.warn('User data is not available. Ensure the app is launched from Telegram.');
      }
    });

    return { userData };
  },
});
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
