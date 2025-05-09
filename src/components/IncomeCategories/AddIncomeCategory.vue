<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const props = defineProps<{
  category: IncomeCategory | null
}>();
const emit = defineEmits(['save']);

const name = ref('');

watch(() => props.category, (newCategory) => {
  name.value = newCategory ? newCategory.name : '';
}, { immediate: true });

const save = () => {
  emit('save', { name: name.value });
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="block !mb-4 text-sm font-medium">Category Name</label>
      <InputText v-model="name" class="w-full" />
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <Button label="Save" class="w-full" @click="save" />
    </div>
  </div>
</template>
