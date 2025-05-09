<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'

const emit = defineEmits(['save'])

const props = defineProps<{
  categories: ExpenseCategory[],
  expense: Expense | null,
}>();

const item = ref<Expense>({
  title: '',
  amount: 0,
  date: new Date(),
  category: '',
})

watch(() => props.expense, (newExpense) => {
  if (newExpense) {
    item.value = { ...newExpense }
  } else {
    item.value = {
      title: '',
      amount: 0,
      date: new Date(),
      category: '',
    }
  }
}, { immediate: true })

const saveExpense = () => {
  emit('save', { title: item.value.title, amount: item.value.amount, date: item.value.date, category: item.value.category })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="block mb-1 text-sm font-medium">Title</label>
      <InputText v-model="item.title" class="w-full" />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Amount</label>
      <InputNumber
        v-model="item.amount"
        class="w-full"
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Date</label>
      <Calendar v-model="item.date" class="w-full" dateFormat="yy-mm-dd" />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Category</label>
      <Dropdown
        v-model="item.category"
        :options="props.categories"
        optionLabel="name"
        optionValue="name"
        placeholder="Select a Category"
        class="w-full"
      />
    </div>

    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Save" @click="saveExpense" class="w-full" />
    </div>
  </div>
</template>
