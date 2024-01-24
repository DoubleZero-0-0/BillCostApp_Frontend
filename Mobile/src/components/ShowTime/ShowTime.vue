<template>

  <!-- Left side -->
  <v-col class="text-left" cols="6" md="6">
    <div>
      <div>HI, ATUL</div>
      <div class="SubFront">atulchandradash@gmail.com</div>
    </div>
  </v-col>

  <!-- Right side -->
  <v-col class="text-right" cols="6" md="6">
    <div>
      <div>{{ currentDay }}</div>
      <div class="SubFront">{{ currentTime }}</div>
    </div>
  </v-col>

</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShowTime',
  data() {
    return {
      currentTime: '',
      currentDay: '',
      currentDate: ''
    };
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
});
</script>

<style scoped>
.v-row
{
  margin-top: 2%;
}
.v-card
{
  font-weight: bold;

}
.Time
{
  font-size: 1.5rem;
}
</style>
