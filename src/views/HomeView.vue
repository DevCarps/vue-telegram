<script lang="ts" setup>
import { MainButton, useWebAppPopup, useWebApp   } from 'vue-tg';

const { showAlert } = useWebAppPopup()
const { initdata, initDataUnsafe } = useWebApp()

</script>

<template>
  <h2>User Data</h2>
  <pre>{{ initdata }}</pre>
  <pre>{{ initDataUnsafe }}</pre>
  <MainButton text="Tap alert" @click="() => showAlert('Taena pano yun')" />

</template>

