<template>
  <div class="flex items-center justify-center rounded-lg">
    <div class="wrapper bg-white bg-opacity-60 p-10 rounded-lg border shadow-lg">
      <form @submit.prevent="">
        <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

        

        <div class="input-box relative mb-4">
          <input
            type="text"
             
            placeholder="Username"  
            required
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
          />
          <i class="bx bxs-user absolute right-3 top-3 text-gray-400"></i>
        </div>

        <div class="input-box relative mb-4">
          <input
            type="password"
            
            placeholder="Password"
            required
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
          />
          <i class="bx bxs-lock-alt absolute right-3 top-3 text-gray-400"></i>
        </div>

        <div class="flex justify-between mb-4 text-gray-600">
          <label class="flex items-center">
            <input type="checkbox"  class="mr-2 accent-gray-600" />
            Remember me
          </label>
          <a href="#" class="hover:underline ml-4">Forgot password?</a>
        </div>

        <button
          type="submit"
          class="w-full text-gray-700 bg-slate-50 hover:text-white border border-gray-700 hover:bg-gray-400 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            
          >
          <span >
            <i class="bx bx-loader-alt loading"></i> Loading...
          </span>
          <span >
            Login
          </span>
        </button>

        <div class="mt-4 text-center text-gray-600">
          <p>Don't have an account? 
            <router-link to="/register" class="text-gray-600 hover:underline">Register</router-link>
          </p>
        </div>
      </form>
    </div>
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
