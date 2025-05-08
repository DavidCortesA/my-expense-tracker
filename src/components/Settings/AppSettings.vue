<script setup lang="ts">
import { useAppStore } from '@/store';

const appStore = useAppStore();
</script>

<template>
  <div class="dark-mode-toggle">
    <span>🌞</span>
    <label class="switch">
      <input type="checkbox" :checked="appStore.isDarkMode" @change="appStore.toggleDarkMode()" />
      <span class="slider round"></span>
    </label>
    <span>🌙</span>
  </div>
</template>

<style scoped lang="css">
.dark-mode-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--color-primary);
}

input:checked + .slider:before {
  transform: translateX(26px);
}
</style>
