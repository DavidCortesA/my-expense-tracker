<script setup lang="ts">
import AppSettings from '@/components/Settings/AppSettings.vue';
import { ref } from 'vue';

const selectedLanguage = ref('en'); // Default English

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' }
];

// Luego conectarás esto con vue-i18n
const changeLanguage = (lang: string) => {
  selectedLanguage.value = lang;
  // Aquí luego agregas: i18n.global.locale = lang;
};
</script>

<template>
  <div class="p-4 w-full mx-auto">
    <h1 class="text-2xl font-bold mb-6">Settings</h1>
    <div class="flex flex-row flex-nowrap justify-between gap-4 w-full !mt-4">
      <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col gap-4 mb-6 w-full">
        <h2 class="text-lg font-semibold">Appearance</h2>
        <AppSettings />
      </div>

      <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col gap-4 w-full">
        <h2 class="text-lg font-semibold">Language</h2>
        <select v-model="selectedLanguage" @change="changeLanguage(selectedLanguage)" class="p-2 rounded-md bg-white dark:bg-gray-700">
          <option v-for="lang in languages" :key="lang.value" :value="lang.value">
            {{ lang.label }}
          </option>
        </select>
      </div>
    </div>

  </div>
</template>
