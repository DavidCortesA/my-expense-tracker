<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';

const visible = defineModel<boolean>('visible');
const emit = defineEmits(['save']);

const expense = ref({
  title: '',
  amount: null,
  date: new Date(),
  category: ''
});

const categories = ref(["Food", "Transport", "Utilities", "Entertainment", "Other"]);

const saveExpense = () => {
  emit('save', expense.value);
  visible.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label class="block mb-1 text-sm font-medium">Title</label>
      <InputText v-model="expense.title" class="w-full" />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Amount</label>
      <InputNumber v-model="expense.amount" class="w-full" mode="currency" currency="USD" locale="en-US" />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Date</label>
      <Calendar v-model="expense.date" class="w-full" dateFormat="yy-mm-dd" />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium">Category</label>
      <Dropdown v-model="expense.category" :options="categories" placeholder="Select a Category" class="w-full" />
    </div>

    <div class="flex justify-end gap-2 mt-4 w-full">
      <Button label="Save" @click="saveExpense" class="w-full" />
    </div>
  </div>
</template>
