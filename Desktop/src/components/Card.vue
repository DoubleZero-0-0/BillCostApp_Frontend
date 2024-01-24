<!-- DashboardCard.vue -->

<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6">
    <div class="card" :class="cardColor">
      <div class="card-icon">{{ icon }}</div>
      <div class="card-title">{{ title }}</div>
      <div class="card-content">
        <p><strong>Cost:</strong> {{ cost }}</p>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'blue',
      validator: value => ['blue', 'green', 'orange', 'purple'].includes(value),
    },
  },
  computed: {
    cardColor() {
      return `card-${this.color}`;
    },
    icon() {
      // Choose an icon based on the title (you can customize this logic)
      switch (this.title.toLowerCase()) {
        case 'today cost':
          return '📅';
        case 'tomorrow cost':
          return '🌞';
        case 'this week cost':
          return '📆';
        case 'this month cost':
          return '📆';
        default:
          return '❓';
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.card:hover {
  transform: scale(1.05);
}

.card-icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-content {
  margin-top: 10px;
}

/* Card Colors */
.card-blue {
  background-color: #3498db;
  color: #fff;
}

.card-green {
  background-color: #2ecc71;
  color: #fff;
}

.card-orange {
  background-color: #e67e22;
  color: #fff;
}

.card-purple {
  background-color: #9b59b6;
  color: #fff;
}
</style>
