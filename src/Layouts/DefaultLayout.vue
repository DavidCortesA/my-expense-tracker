<script setup lang="ts">
import MainSidebar from '@/components/MainSidebar.vue';

</script>

<template>
  <div class="layout">
    <main-sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="css">
.layout {
  display: flex;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: var(--color-background);
  transition: background-color 0.3s ease;
  width: 100%;
}
</style>
