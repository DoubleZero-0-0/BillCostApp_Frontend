<script>
import {defineComponent} from 'vue'
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.vue";

export default defineComponent({
  name: "Catrgories",
  components: {NavigationMenu}
})
</script>

<template>
  <h1>This Is the Categories Page</h1>
  <NavigationMenu :MenuNumber=2 />
</template>

<style scoped>

</style>