<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

// Simulamos datos de usuario
const user = ref({
  name: 'David Cortez',
  email: 'david@example.com'
});

const saveProfile = () => {
  // Aquí iría la lógica de guardar perfil
  console.log('Perfil guardado:', user.value);
};
</script>

<template>
  <div class="p-4 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Profile</h1>

    <div class="flex flex-col gap-4">
      <div>
        <label class="block mb-1 font-medium text-sm">Name</label>
        <InputText v-model="user.name" class="w-full" />
      </div>

      <div>
        <label class="block mb-1 font-medium text-sm">Email</label>
        <InputText v-model="user.email" class="w-full" />
      </div>

      <div class="flex justify-end mt-4">
        <Button label="Save" icon="pi pi-save" @click="saveProfile" />
      </div>
    </div>
  </div>
</template>
