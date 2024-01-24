<script>
export default {
  props: {
    MenuNumber: Number,
  },
  data() {
    return {
      value: this.MenuNumber,
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
}
</script>
<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation v-model="value" color="red" grow>
      <v-btn @click="navigateTo('Cost')">
        <v-icon>mdi-currency-usd</v-icon>
        Cost
      </v-btn>
      <v-btn @click="navigateTo('Status')">
        <v-icon>mdi-chevron-triple-up</v-icon>
        Status
      </v-btn>
      <v-btn @click="navigateTo('Categories')">
        <v-icon>mdi-shape</v-icon>
        Categories
      </v-btn>
      <v-btn @click="navigateTo('MyAccount')">
        <v-icon>mdi-account-heart</v-icon>
        My
      </v-btn>

    </v-bottom-navigation>

  </v-layout>
</template>




<style scoped>

</style>