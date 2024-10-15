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
  // Log init data
  console.log("WebApp.initDataUnsafe:", WebApp.initDataUnsafe);
  
  // Use hardcoded data for testing
  userData.value = {
    id: 123,
    first_name: 'John',
    last_name: 'Doe',
    username: 'johndoe',
    language_code: 'en',
    is_premium: false,
  };
  console.log("Hardcoded User data:", userData.value);
});


    return { userData };
  },
});
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
