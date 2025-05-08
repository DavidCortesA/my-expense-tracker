import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'
import { initializeDarkMode, initializeAuth } from '@/store'

import App from './App.vue'
import router from './router'
import Aura from '@primeuix/themes/aura'

import '@/assets/main.css';
import '@/assets/dark-mode.css';

const app = createApp(App);


app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
      cssVars: {
        'primary-color': '#4CAF50', // Verde principal
        'primary-color-text': '#FFFFFF',
        'surface-ground': 'var(--color-background)',
        'surface-card': 'var(--dashboard-widget-background)',
        'text-color': 'var(--color-text)'
      }
    }
  }
});
app.use(ToastService)
initializeAuth()
initializeDarkMode()
app.mount('#app')
