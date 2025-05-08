<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DialogInput from '../Dialog/DialogInput.vue';
import AddIncome from './AddIncome.vue';

const props = defineProps({
  incomes: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(['add-income']); // 👈 emitimos evento

const isDialogOpen = ref(false);

const handleSave = (income: Income) => {
  emit('add-income', income); // 👈 emitimos al padre
  isDialogOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Add Income" icon="pi pi-plus" class="!rounded-full" @click="isDialogOpen = true" />
    </div>

    <DataTable :value="props.incomes" :paginator="true" :rows="10" tableStyle="min-width: 100%">
      <Column field="title" header="Title" />
      <Column field="amount" header="Amount" />
      <Column field="date" header="Date" />
      <Column field="category" header="Category" />
    </DataTable>
  </div>

  <DialogInput v-model:visible="isDialogOpen" :title="'Add Income'">
    <AddIncome @save="handleSave" />
  </DialogInput>
</template>
