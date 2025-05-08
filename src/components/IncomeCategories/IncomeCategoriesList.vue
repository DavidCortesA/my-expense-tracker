<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DialogInput from '../Dialog/DialogInput.vue';
import AddIncomeCategory from './AddIncomeCategory.vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(['add-category']);

const isDialogOpen = ref(false);

const handleSave = (category: IncomeCategory) => {
  emit('add-category', category);
  isDialogOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Add Income Category" icon="pi pi-plus" class="!rounded-full" @click="isDialogOpen = true" />
    </div>

    <DataTable :value="props.categories" :paginator="true" :rows="10" tableStyle="min-width: 100%">
      <Column field="name" header="Category Name" />
      <Column field="date" header="Date" />
    </DataTable>

    <DialogInput v-model:visible="isDialogOpen" :title="'Add Category'">
      <AddIncomeCategory @save="handleSave" />
    </DialogInput>
  </div>
</template>
