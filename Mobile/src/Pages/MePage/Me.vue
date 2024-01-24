<script>
import {defineComponent} from 'vue'
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.vue";

export default defineComponent({
  name: "Me",
  components: {NavigationMenu}
})
</script>

<template>
  <h1>This is the Me Page</h1>
  <NavigationMenu :MenuNumber=3 />
</template>

<style scoped>

</style>