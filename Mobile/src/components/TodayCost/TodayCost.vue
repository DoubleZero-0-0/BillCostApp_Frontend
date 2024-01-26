<script>
import {defineComponent} from 'vue'
import axios from "../../axios.js";

export default defineComponent({
  name: "TodayCost",
  data() {
    return {
      TodayCost: ''
    };
  },
  mounted() {
    this.getTodayCost();
  },
  methods:{
    getTodayCost()
    {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : localStorage.getItem('token')
      };

      axios.get('/todayCost' ,{ headers })
          .then((res) => {
              this.TodayCost = res.data.data
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
})
</script>

<template>
    <v-col  cols="12" md="12">
        <v-row align="center" justify="center" style="background: rgba(255, 0, 0, 0.59);border-radius: 10px;width: 99%;margin: 0 auto;font-family: 'IBM Plex Mono', monospace;, sans-serif;color: white" >
            <v-col>
              <h1 >TODAY COST</h1>
            </v-col>
            <v-col style="text-align: right">
              <h1>{{ TodayCost }}<span>৳</span></h1>
            </v-col>
        </v-row>
    </v-col>
</template>


<style scoped>

</style>