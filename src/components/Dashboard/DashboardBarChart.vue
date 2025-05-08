<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps<{
  labels: string[];
  incomes: number[];
  expenses: number[];
}>();

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: 'Incomes',
      backgroundColor: '#4ade80',
      data: props.incomes
    },
    {
      label: 'Expenses',
      backgroundColor: '#f87171',
      data: props.expenses
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="h-80">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
