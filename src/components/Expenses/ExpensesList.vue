<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import DialogInput from '../Dialog/DialogInput.vue'
import AddExpense from './AddExpense.vue'
import { useLocalStorage } from '@/composables/useLocalStorage'
import { useFormatData } from '@/composables/useResetDates'
import { useFormatAmount } from '@/composables/useResetAmounts'

const { formatDate } = useFormatData()
const { formatAmount } = useFormatAmount()

const isDialogOpen = ref(false)
const editingItem = ref<Expense | null>(null)

const expenses = useLocalStorage<Expense[]>('expenses', [])
const categories = useLocalStorage<ExpenseCategory[]>('expenseCategories', []) // 🟢 Obtener categorías

const handleSave = (item: Expense) => {
  if (editingItem.value) {
    const index = expenses.value.findIndex((expense) => expense.id === item.id)
    if (index !== -1) {
      expenses.value[index] = { ...item, date: new Date(item.date) }
    }
  } else {
    expenses.value.push({ ...item, date: new Date(item.date) })
  }
  isDialogOpen.value = false
  editingItem.value = null
}

const handleDelete = (item: Expense) => {
  const index = expenses.value.findIndex((expense) => expense.id === item.id)
  if (index !== -1) {
    expenses.value.splice(index, 1)
  }
}

const openEditDialog = (item: Expense) => {
  editingItem.value = item
  isDialogOpen.value = true
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button
        label="Add Expense"
        icon="pi pi-plus"
        class="!rounded-full"
        @click="isDialogOpen = true"
      />
    </div>

    <DataTable :value="expenses" :paginator="true" :rows="10" tableStyle="min-width: 100%">
      <Column field="title" header="Title" />
      <Column header="Amount">
        <template #body="slotProps">
          {{ formatAmount(slotProps.data.amount) }}
        </template>
      </Column>
      <Column header="Date">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.date) }}
        </template>
      </Column>
      <Column field="category" header="Category" />
      <Column header="Actions">
        <template #body="slotProps">
          <div class="flex gap-2">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-info"
              @click="openEditDialog(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="handleDelete(slotProps.data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <DialogInput v-model:visible="isDialogOpen" title="Add Expense">
      <!-- 🔥 Pasa las categorías -->
      <AddExpense @save="handleSave" :categories="categories" :expense="editingItem" />
    </DialogInput>
  </div>
</template>
