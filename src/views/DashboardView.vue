<script setup lang="ts">
import DashboardCards from '@/components/Dashboard/DashboardCards.vue';
import DashboardBarChart from '@/components/Dashboard/DashboardBarChart.vue';
import DashboardPieChart from '@/components/Dashboard/DashboardPieChart.vue';
import { ref } from 'vue';

// Tus datos (simulación, reemplázalos luego)
const incomes = ref([
  { amount: 5000, date: '2025-01-01' },
  { amount: 2000, date: '2025-02-15' },
  { amount: 1500, date: '2025-03-10' },
  { amount: 3000, date: '2025-05-05' }
]);
const expenses = ref([
  { amount: 500, category: 'Food', date: '2025-01-05' },
  { amount: 700, category: 'Transport', date: '2025-02-12' },
  { amount: 1200, category: 'Food', date: '2025-03-18' },
  { amount: 1200, category: 'Food', date: '2025-05-18' },
  { amount: 400, category: 'Entertainment', date: '2025-05-03' }
]);

// Funciones para fecha
const getMonth = (date: string) => new Date(date).getMonth(); // 0 = Enero
const getYear = (date: string) => new Date(date).getFullYear();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth(); // para cards y pie chart

// --- TOTALIZADOS (anual completo)
const totalIncome = incomes.value.reduce((sum, item) => sum + item.amount, 0);
const totalExpense = expenses.value.reduce((sum, item) => sum + item.amount, 0);

// --- MENSUAL (sólo del mes actual)
const monthlyIncome = incomes.value
  .filter(i => getMonth(i.date) === currentMonth && getYear(i.date) === currentYear)
  .reduce((sum, item) => sum + item.amount, 0);

const monthlyExpense = expenses.value
  .filter(e => getMonth(e.date) === currentMonth && getYear(e.date) === currentYear)
  .reduce((sum, item) => sum + item.amount, 0);

// --- DATOS PARA BARRAS (Anual, agrupados por mes)
const labels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const incomesData = labels.map((_, monthIndex) =>
  incomes.value
    .filter(i => getMonth(i.date) === monthIndex && getYear(i.date) === currentYear)
    .reduce((sum, item) => sum + item.amount, 0)
);

const expensesData = labels.map((_, monthIndex) =>
  expenses.value
    .filter(e => getMonth(e.date) === monthIndex && getYear(e.date) === currentYear)
    .reduce((sum, item) => sum + item.amount, 0)
);

// --- DATOS PARA PIE (solo gastos de este mes)
const expensesThisMonth = expenses.value.filter(e =>
  getMonth(e.date) === currentMonth && getYear(e.date) === currentYear
);

const categories = [...new Set(expensesThisMonth.map(e => e.category))];
const categoryTotals = categories.map(cat =>
  expensesThisMonth
    .filter(e => e.category === cat)
    .reduce((sum, e) => sum + e.amount, 0)
);
</script>

<template>
  <div class="p-4 space-y-8">
    <h1 class="text-2xl font-bold !mb-4">Dashboard</h1>
    <DashboardCards
      :totalIncome="totalIncome"
      :totalExpense="totalExpense"
      :monthlyIncome="monthlyIncome"
      :monthlyExpense="monthlyExpense"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 !mt-3">
      <div class="p-4 border rounded-lg shadow-md col-span-1 lg:col-span-2">
        <h2 class="text-xl font-bold mb-4">Incomes vs Expenses (Annual)</h2>
        <DashboardBarChart :labels="labels" :incomes="incomesData" :expenses="expensesData" />
      </div>

      <div class="p-4 border rounded-lg shadow-md col-span-1">
        <h2 class="text-xl font-bold mb-4">Expenses This Month by Category</h2>
        <DashboardPieChart :labels="categories" :data="categoryTotals" />
      </div>
    </div>
  </div>
</template>
