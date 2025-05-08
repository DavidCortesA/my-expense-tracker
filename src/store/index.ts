import { defineStore } from 'pinia'

export interface User {
  username: string;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('my-app-dark');
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    },
    setDarkMode(value: boolean) {
      this.darkMode = value
    },
  },
  getters: {
    isDarkMode: (state) => state.darkMode,
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated') ?? 'false'),
    user: JSON.parse(localStorage.getItem('user') ?? 'null') as { username: string } | null,
  }),
  actions: {
    login(user: { username: string }) {
      this.isAuthenticated = true;
      this.user = user;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      window.location.href = '/login';
    },
  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
})


export const initializeDarkMode = () => {
  const appStore = useAppStore();
  const darkMode = JSON.parse(localStorage.getItem('darkMode') ?? 'false');
  appStore.setDarkMode(darkMode);

  if (darkMode) {
    document.documentElement.classList.add('my-app-dark');
  } else {
    document.documentElement.classList.remove('my-app-dark');
  }
};

export const initializeAuth = () => {
  const authStore = useAuthStore();
  try {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') ?? 'false');
    const user = JSON.parse(localStorage.getItem('user') ?? 'null');

    authStore.isAuthenticated = Boolean(isAuthenticated);
    authStore.user = user;
  } catch (error) {
    console.error('Error parsing auth from localStorage', error);
    authStore.isAuthenticated = false;
    authStore.user = null;
  }
};


