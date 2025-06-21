<script setup>
  import { ref } from 'vue'
  const darkMode = ref(false)

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark')
  }
</script>

<template>
  <button @click="toggleDarkMode">
    {{ darkMode ? 'Светлая тема' : 'Темная тема' }}
  </button>
</template>

<style scoped lang='scss'>

</style>
