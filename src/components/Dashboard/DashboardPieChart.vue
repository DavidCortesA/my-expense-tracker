<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const props = defineProps<{
  labels: string[];
  data: number[];
}>();

const chartData = {
  labels: props.labels,
  datasets: [
    {
      backgroundColor: ['#60a5fa', '#f472b6', '#facc15', '#34d399', '#a78bfa'],
      data: props.data
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
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
