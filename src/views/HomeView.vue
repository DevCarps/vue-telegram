<template>
  <div class="text-white">
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
      // Check if the Telegram SDK is loaded
      console.log("Telegram SDK:", window.Telegram); // Log the entire object

       // Call WebApp.ready() to initialize the SDK
       window.Telegram.WebApp.ready();

        // Inspect initDataUnsafe
      console.log("WebApp Data:", WebApp.initDataUnsafe);

      // Detailed log of the initDataUnsafe structure
      console.log("WebApp Data Structure:", JSON.stringify(WebApp.initDataUnsafe, null, 2));


       // Check if user data is available
      if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
        userData.value = WebApp.initDataUnsafe.user as UserData;
        console.log("User data:", userData.value); // Log the user data
      } else {
        console.warn('User data is not available. Ensure the app is launched from Telegram.');
      }
    });

    return { userData };
  },
});
</script>

<style scoped>

</style>
