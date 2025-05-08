<script setup lang="ts">
import ExpensesCategoriesList from '@/components/ExpensesCategories/ExpenseCategoriesList.vue';
import { ref } from 'vue';

const categories = ref([
  { name: 'Food', createdAt: '2024-01-01' },
  { name: 'Transport', createdAt: '2024-02-01' },
  { name: 'Utilities', createdAt: '2024-03-01' }
]);

const addCategory = (category: ExpenseCategory) => {
  categories.value.push(category);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Expense Categories</h1>
    <ExpensesCategoriesList :categories="categories" @add-category="addCategory" />
  </div>
</template>
