<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useAppStore } from '@/store';

const appStore = useAppStore();

onMounted(() => {
  // Al montar la aplicación, verifica si hay una preferencia guardada
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    appStore.setDarkMode(true);
    document.body.classList.add('p-dark');
  }
});

watch(
  () => appStore.isDarkMode,
  (newDarkMode) => {
    if (newDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }
);
</script>

<template>
  <router-view />
</template>
