import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Дополнительные настройки Vue
      template: {
        compilerOptions: {
          // Игнорировать custom-элементы для карт (например, для Яндекс Карт)
          isCustomElement: (tag) => tag.startsWith('ymaps-')
        }
      }
    })
  ],

  // Настройки сервера разработки
  server: {
    port: 3000,
    open: true, // Автоматически открывать браузер
    proxy: {
      '/api': { // Прокси для API-запросов
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  // Алиасы для путей
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },

  // Оптимизация сборки
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Выделение vendor-чанков
          vue: ['vue', 'vue-router', 'pinia'],
          yandexmaps: ['yandex-maps']
        }
      }
    }
  },

  // Глобальные CSS-переменные
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@assets/styles/variables.scss";`
      }
    }
  }
});