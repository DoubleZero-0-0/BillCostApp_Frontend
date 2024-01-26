<script>
import {defineComponent} from 'vue'
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.vue";
import router from "../../router/index.js";

export default defineComponent({
  name: "Me",
  components: {NavigationMenu},
  data() {
    return{

    }
  },
  methods:{
    Logout()
    {
      localStorage.removeItem('token');
      router.push('/')
    }

  }
})
</script>

<template>
  <h1>This is the Me Page</h1>

  <v-btn @click="Logout" color="red" variant="outlined">Logout</v-btn>
  <NavigationMenu :MenuNumber=3 />
</template>

<style scoped>

</style>