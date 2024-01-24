<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Tomorrow_WeekCost"
})
</script>

<template>
  <v-col  cols="6" md="6">
    <v-row align="center" justify="center" style="background: rgba(33,130,236,0.59);border-radius: 10px;width: 99%;margin: 0 auto;font-family: 'IBM Plex Mono', monospace;, sans-serif;color: white" >
      <v-col style="text-align: center">
        <h4 >TOMORROW COST</h4>
      </v-col>
      <v-col  style="text-align: center">
        <h1>100<span>৳</span></h1>
      </v-col>
    </v-row>
  </v-col>

  <v-col  cols="6" md="6">
    <v-row align="center" justify="center" style="background: rgba(33,130,236,0.59);border-radius: 10px;width: 99%;margin: 0 auto;font-family: 'IBM Plex Mono', monospace;, sans-serif;color: white" >
      <v-col style="text-align: center">
        <h4 >WEEKLY COST</h4>
      </v-col>
      <v-col  style="text-align: center">
        <h1>100<span>৳</span></h1>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>

</style>