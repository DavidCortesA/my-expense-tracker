<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DialogInput from '../Dialog/DialogInput.vue';
import AddIncomeCategory from './AddIncomeCategory.vue';
import { useLocalStorage } from '@/composables/useLocalStorage'; // Asegúrate de tener este hook
import { useFormatData } from '@/composables/useResetDates';

const isDialogOpen = ref(false);
const editingCategory = ref<IncomeCategory | null>(null);

const { formatDate } = useFormatData();

const categories = useLocalStorage<IncomeCategory[]>('incomeCategory', []);

// 🟢 Agregar o actualizar
const handleSave = (category: IncomeCategory) => {
  if (editingCategory.value) {
    // Editar categoría existente
    const index = categories.value.findIndex(c => c.id === editingCategory.value!.id);
    if (index !== -1) {
      categories.value[index] = { ...category, id: editingCategory.value.id, createdAt: editingCategory.value.createdAt };
    }
  } else {
    // Agregar nueva categoría
    const newCategory: IncomeCategory = { ...category, id: crypto.randomUUID(), createdAt: new Date() };
    categories.value.push(newCategory);
  }

  isDialogOpen.value = false;
  editingCategory.value = null;
};

// 🛑 Eliminar
const deleteCategory = (id: string) => {
  categories.value = categories.value.filter((c:IncomeCategory) => c.id !== id);
};

const openEdit = (category: IncomeCategory) => {
  editingCategory.value = { ...category };
  isDialogOpen.value = true;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Add Income Category" icon="pi pi-plus" class="!rounded-full" @click="() => { editingCategory = null; isDialogOpen = true }" />
    </div>

    <DataTable :value="categories" :paginator="true" :rows="10" tableStyle="min-width: 100%">
      <Column field="name" header="Category Name" />
      <Column header="Date">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.createdAt) }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <div class="flex gap-2">
            <Button icon="pi pi-pencil" severity="info" rounded @click="() => openEdit(slotProps.data)" />
            <Button icon="pi pi-trash" severity="danger" rounded @click="() => deleteCategory(slotProps.data.id)" />
          </div>
        </template>
      </Column>
    </DataTable>

    <DialogInput v-model:visible="isDialogOpen" :title="editingCategory ? 'Edit Income Category' : 'Add Income Category'">
      <AddIncomeCategory :category="editingCategory" @save="handleSave" />
    </DialogInput>
  </div>
</template>
