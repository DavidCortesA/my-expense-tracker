<script setup lang="ts">
import IncomesList from '@/components/Incomes/IncomesList.vue';
import { ref } from 'vue';

const incomes = ref([
  { title: 'Salary', amount: 5000, date: '2023-10-01', category: 'Salary' },
  { title: 'Freelance', amount: 2000, date: '2023-10-02', category: 'Freelance' },
  { title: 'Investments', amount: 1500, date: '2023-10-03', category: 'Investments' }
]);

const addIncome = (income: Income) => {
  incomes.value.push(income); // Aquí sí podemos agregar
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Incomes</h1>
    <IncomesList :incomes="incomes" @add-income="addIncome" />
  </div>
</template>
