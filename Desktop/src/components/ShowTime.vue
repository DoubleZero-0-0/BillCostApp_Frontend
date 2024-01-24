<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ShowTime",
  data()
  {
    return{
      currentTime: '',
      currentDay: '',
      currentDate: ''
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000); // Update every second
  },
  methods: {
    updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format

      this.currentTime = `${this.formatTime(formattedHours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)} ${ampm}`;
      this.currentDay = this.getDayOfWeek(now.getDay());
      this.currentDate = now.toDateString();
    },
    formatTime(value) {
      return value < 10 ? `0${value}` : value;
    },
    getDayOfWeek(dayIndex) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[dayIndex];
    },
  },

})
</script>

<template>
  <div class="time-show">
    <el-row :gutter="20">
      <!-- First column for md size -->
      <el-col :md="{ span: 6 }" :xs="{ span: 12 }">
        <div class="day">{{ currentDay }}</div>
        <div class="date">{{ currentDate }}</div>
        <div class="time">{{ currentTime }}</div>
      </el-col>

      <!-- Second column for md size with offset -->
      <el-col :md="{ span: 5, offset: 13 }" :xs="{ span: 12 }" style="text-align: right;">
        <div class="day">ATUL</div>
        <div class="date">Today Cost</div>
        <div class="time">500</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.time-show{
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 10px;
  margin-top: 5px;
}
.time {
  font-size: 24px;
  font-weight: bold;
}

.day {
  font-size: 18px;
  margin-top: 10px;
}

.date {
  font-size: 16px;
  margin-top: 5px;
}
</style>