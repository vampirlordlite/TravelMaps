import { defineStore } from 'pinia';
import { auth } from 'src/config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isLoading: false,
        error: null
    }),
    actions: {
        async login(email, password) {
            this.isLoading = true;
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },
        async register(email, password) {
            // Аналогичная логика
        },
        initAuthListener() {
            onAuthStateChanged(auth, (user) => {
                this.user = user;
            });
        }
    }
});