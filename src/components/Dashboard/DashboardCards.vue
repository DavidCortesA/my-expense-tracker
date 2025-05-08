<script setup lang="ts">
import Card from 'primevue/card';

const props = defineProps<{
  totalIncome: number;
  totalExpense: number;
  monthlyIncome: number;
  monthlyExpense: number;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <Card class="text-center p-4 shadow-md !bg-green-100">
      <template #header>
        <h2 class="text-xl font-bold text-green-700">Total Income</h2>
      </template>
      <template #content>
        <p class="text-2xl mt-2 font-semibold">${{ props.totalIncome }}</p>
      </template>
    </Card>

    <Card class="text-center p-4 shadow-md !bg-red-100">
      <template #header>
        <h2 class="text-xl font-bold text-red-700">Total Expenses</h2>
      </template>
      <template #content>
        <p class="text-2xl mt-2 font-semibold">${{ props.totalExpense }}</p>
      </template>
    </Card>

    <Card class="text-center p-4 shadow-md !bg-green-100">
      <template #header>
        <h2 class="text-xl font-bold text-green-800">Income This Month</h2>
      </template>
      <template #content>
        <p class="text-2xl mt-2 font-semibold">${{ props.monthlyIncome }}</p>
      </template>
    </Card>

    <Card class="text-center p-4 shadow-md !bg-red-100">
      <template #header>
        <h2 class="text-xl font-bold text-red-800">Expenses This Month</h2>
      </template>
      <template #content>
        <p class="text-2xl mt-2 font-semibold">${{ props.monthlyExpense }}</p>
      </template>

    </Card>
  </div>
</template>
