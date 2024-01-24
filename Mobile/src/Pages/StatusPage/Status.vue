<script>
import {defineComponent} from 'vue'
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu.vue";

export default defineComponent({
  name: "Status",
  components: {NavigationMenu}
})
</script>

<template>
  <h1>This is the Status Page</h1>
  <NavigationMenu :MenuNumber=1 />
</template>

<style scoped>

</style>