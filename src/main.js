import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Инициализация слушателя аутентификации
import { useAuthStore } from '/src/stores/auth.store.js';
const authStore = useAuthStore();
authStore.initAuthListener();

app.mount('#app')