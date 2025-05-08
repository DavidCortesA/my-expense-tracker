<script setup lang="ts">
import IncomeCategoriesList from '@/components/IncomeCategories/IncomeCategoriesList.vue';
import { ref } from 'vue';

const categories = ref([
  { name: 'Salary', date: '2024-01-01' },
  { name: 'Freelance', date: '2024-02-01' },
  { name: 'Investments', date: '2024-03-01' }
]);

interface IncomeCategory {
  name: string;
  date: string;
}

const addCategory = (category: IncomeCategory) => {
  categories.value.push(category);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Income Categories</h1>
    <IncomeCategoriesList :categories="categories" @add-category="addCategory" />
  </div>
</template>
