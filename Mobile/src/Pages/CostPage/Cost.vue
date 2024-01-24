<script>
import {defineComponent} from 'vue'
import ShowTime from "../../components/ShowTime/ShowTime.vue";
import TodayCost from "../../components/TodayCost/TodayCost.vue";
import Tomorrow_WeekCost from "../../components/Tomorrow_WeekCost/Tomorrow_WeekCost.vue";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.vue";



export default defineComponent({
  name: "Home",
  components: {NavigationMenu, Tomorrow_WeekCost, TodayCost, ShowTime},
})
</script>

<template>

  <v-row style="width: 98%;margin: 0 auto"  align="start"  >
    <ShowTime />
    <TodayCost/>
    <Tomorrow_WeekCost />
  </v-row>
  <NavigationMenu :MenuNumber=0 />
</template>

<style scoped>

</style>