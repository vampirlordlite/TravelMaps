<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const isLoginMode = ref(true);
const authStore = useAuthStore();

const toggleMode = () => isLoginMode.value = !isLoginMode.value;

const handleSubmit = async () => {
  if (isLoginMode.value) {
    await authStore.login(email.value, password.value);
  } else {
    await authStore.register(email.value, password.value);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto mt-10">
    <h2 class="text-2xl mb-4">{{ isLoginMode ? 'Вход' : 'Регистрация' }}</h2>

    <input v-model="email" type="email" placeholder="Email" required
           class="w-full p-2 mb-3 border rounded">

    <input v-model="password" type="password" placeholder="Пароль" required
           class="w-full p-2 mb-4 border rounded">

    <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">
      {{ isLoginMode ? 'Войти' : 'Зарегистрироваться' }}
    </button>

    <button @click="toggleMode" type="button" class="mt-3 text-blue-500">
      {{ isLoginMode ? 'Нет аккаунта? Создать' : 'Уже есть аккаунт? Войти' }}
    </button>
  </form>
</template>
