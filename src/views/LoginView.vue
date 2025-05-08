<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store';
import { useToast } from 'primevue/usetoast';
import { InputGroup, InputGroupAddon, InputText, Password, Button } from 'primevue';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const initialValues = ref({
    username: '',
    password: ''
});


const onFormSubmit = () => {
  const { username, password } = initialValues.value;

  // Validar login "duro" aquí
  if (username === 'admin@tracker.com' && password === '1234') {
    authStore.login({ username });

    toast.add({ severity: 'success', summary: 'Login successful', life: 3000 });

    router.push('/');
  } else {
    toast.add({ severity: 'error', summary: 'Invalid credentials', life: 3000 });
  }
};
</script>

<template>
  <div class="layout">
    <div class="card">
      <h1>Login</h1>
      <div class="card-body">
        <InputGroup>
          <InputGroupAddon><i class="pi pi-user"></i></InputGroupAddon>
          <InputText  v-model="initialValues.username" placeholder="Username"/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon><i class="pi pi-key"></i></InputGroupAddon>
          <Password v-model="initialValues.password" placeholder="Password" toggleMask />
        </InputGroup>
        <Button label="Login" icon="pi pi-check" class="mt-2" @click="onFormSubmit" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  height: 100vh;
  width: 100%;
}
.card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Courier New', Courier, monospace;
}
.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.mt-2 {
  margin-top: 20px;
}
</style>
