<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const visible = defineModel<boolean>('visible');
const emit = defineEmits(['save']);

const category = ref({
  name: '',
  date: new Date().toISOString().slice(0, 10)
});

const saveCategory = () => {
  emit('save', category.value);
  visible.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="block mb-1 text-sm font-medium">Category Name</label>
      <InputText v-model="category.name" class="w-full" />
    </div>

    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Save" @click="saveCategory" class="w-full" />
    </div>
  </div>
</template>
