<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/store';
import Button from 'primevue/button';

const isSidebarOpen = ref(true);
const route = useRoute();

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const sidebarLinks = [
  { name: 'Home', icon: 'pi pi-home', link: '/' },
  { name: 'Expenses', icon: 'pi pi-credit-card', link: '/expenses' },
  { name: 'Income', icon: 'pi pi-wallet', link: '/income' },
  { name: 'Expense Categories', icon: 'pi pi-tags', link: '/expenses-categories' },
  { name: 'Income Categories', icon: 'pi pi-tags', link: '/income-categories' },
  { name: 'Profile', icon: 'pi pi-user', link: '/profile' },
  { name: 'Settings', icon: 'pi pi-cog', link: '/settings' },
];

const isActive = (link: string) => {
  return route.path === link;
};

const handleLogout = () => {
  const authStore = useAuthStore();
  authStore.logout();
};
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar-open': isSidebarOpen, 'sidebar-closed': !isSidebarOpen }">
    <div class="sidebar-header">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <h2 class="app-title" v-if="isSidebarOpen">Expense Tracker</h2>
    </div>
    <ul class="sidebar-list">
      <li v-for="(link, index) in sidebarLinks" :key="index">
        <RouterLink :to="link.link" class="sidebar-link" :class="{ 'active-link': isActive(link.link) }">
          <i :class="link.icon"></i>
          <span v-if="isSidebarOpen" class="sidebar-text">{{ link.name }}</span>
        </RouterLink>
      </li>
      <li class="sidebar-logout">
        <Button
          class="sidebar-link"
          @click="handleLogout"
          icon="pi pi-sign-out"
          :label="isSidebarOpen ? 'Logout' : ''"
        />
      </li>
    </ul>

    <div class="sidebar-footer">
      <Button class="!rounded-full flex items-center gap-2 justify-center" :class="{ '!px-8 transition-all ease-in-out': isSidebarOpen, '!px-2 transition-all ease-in-out': !isSidebarOpen }" @click="toggleSidebar">
        <i class="pi" :class="isSidebarOpen ? 'pi-chevron-left' : 'pi-chevron-right'"></i>
        <span v-if="isSidebarOpen" class="sidebar-text">Close Sidebar</span>
      </Button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--sidebar-background);
  color: var(--sidebar-text);
  min-height: 100vh;
  padding: 18px;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: width 0.3s ease; /* Transición suave del ancho */
  overflow-x: hidden; /* Oculta el texto que sobresalga */
}

.sidebar-open {
  width: 275px;
}

.sidebar-closed {
  width: 80px;
}

.sidebar-toggle {
  position: absolute;
  transition: transform 0.3s ease;
}
.sidebar-toggle:hover {
  transform: scale(1.1);
}

.sidebar-logout {
  margin-top: auto;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

.sidebar-logout button {
  background-color: transparent !important;
  color: var(--sidebar-logout-text) !important;
  border: none !important;
  justify-content: flex-start; /* Para que el ícono se alinee como el resto */
}

.sidebar-logout, .sidebar-link {
  background-color: var(--sidebar-logout-background);
  color: var(--sidebar-logout-text);
  border: none;
  font-weight: bold;
  transition: all 0.3s ease; /* Transiciones suaves para hover y cambios */
}

.sidebar-link:hover, .sidebar-logout:hover {
  background-color: var(--color-accent-light);
  color: white;
}

.sidebar-link i, .sidebar-logout i {
  color: var(--sidebar-logout-icon);
  font-size: 1.2rem;
}

.sidebar-footer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.8rem;
  color: var(--sidebar-footer-text);
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.logo {
  width: 40px;
  height: 40px;
}

.app-title {
  font-size: 1rem;
  color: var(--color-heading);
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--sidebar-text);
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.active-link {
  background-color: var(--sidebar-active-background);
  color: var(--sidebar-active-text);
}

.sidebar-text {
  white-space: nowrap;
  overflow: hidden;
}

</style>
