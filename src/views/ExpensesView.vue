<script setup lang="ts">
import ExpensesList from '@/components/Expenses/ExpensesList.vue';
import { ref } from 'vue';

const expenses = ref([
  { title: 'Groceries', amount: 120, date: '2024-05-01', category: 'Food' },
  { title: 'Bus Ticket', amount: 15, date: '2024-05-02', category: 'Transport' },
  { title: 'Electric Bill', amount: 60, date: '2024-05-03', category: 'Utilities' }
]);

const addExpense = (expense: Expense) => {
  expenses.value.push(expense);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Expenses</h1>
    <ExpensesList :expenses="expenses" @add-expense="addExpense" />
  </div>
</template>
