
<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DialogInput from '../Dialog/DialogInput.vue';
import AddExpense from './AddExpense.vue';

const props = defineProps({
  expenses: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(['add-expense']);

const isDialogOpen = ref(false);

const handleSave = (expense: Expense) => {
  emit('add-expense', expense);
  isDialogOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Add Expense" icon="pi pi-plus" class="!rounded-full" @click="isDialogOpen = true" />
    </div>

    <DataTable :value="props.expenses" :paginator="true" :rows="10" tableStyle="min-width: 100%">
      <Column field="title" header="Title" />
      <Column field="amount" header="Amount" />
      <Column field="date" header="Date" />
      <Column field="category" header="Category" />
    </DataTable>

    <DialogInput v-model:visible="isDialogOpen" title="Add Expense">
      <AddExpense @save="handleSave" />
    </DialogInput>
  </div>
</template>
