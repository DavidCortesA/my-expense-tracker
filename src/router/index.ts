import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '@/Layouts/DefaultLayout.vue';

import DashboardView from '@/views/DashboardView.vue';
import ExpensesView from '@/views/ExpensesView.vue';
import ExpensesCategoriesView from '@/views/ExpensesCategoriesView.vue';
import IncomeView from '@/views/IncomeView.vue';
import IncomeCategoriesView from '@/views/IncomeCategoriesView.vue';
import ProfileView from '@/views/ProfileView.vue';
import SettingsView from '@/views/SettingsView.vue';
import LoginView from '@/views/LoginView.vue';
import { useAuthStore } from '@/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: DashboardView,
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingsView,
        },
        {
          path: '/expenses',
          name: 'expenses',
          component: ExpensesView,
        },
        {
          path: '/expenses-categories',
          name: 'expenses-categories',
          component: ExpensesCategoriesView,
        },
        {
          path: '/income',
          name: 'income',
          component: IncomeView,
        },
        {
          path: '/income-categories',
          name: 'income-categories',
          component: IncomeCategoriesView,
        },
        {
          path: '/profile',
          name: 'profile',
          component: ProfileView,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Rutas que no necesitan login
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !authStore.isLoggedIn) {
    return next('/login');
  }

  next();
});


export default router
