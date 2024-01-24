<script>
import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'WeekChart',
  data() {
    return {
      chart: null,
      weeklyData: [100, 30, 20, 10, 40, 25, 35], // Replace with your actual spending data
    };
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'Weekly Spending',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: this.weeklyData,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  watch: {
    weeklyData: {
      handler(newData) {
        if (this.chart) {
          this.chart.data.datasets[0].data = newData;
          this.chart.update();
        }
      },
      deep: true, // To watch changes in the array elements
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
});
</script>

<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
/* Add any additional styles for your component here */
</style>
