<script>
import {defineComponent} from 'vue'
import ShowTime from "@/components/ShowTime.vue";
import Card from "@/components/Card.vue";
import WeekChart from "@/components/WeekChart.vue";


export default defineComponent({
  name: "Dashboard",
  components: {WeekChart, Card, ShowTime},
  data() {
    return {
      activeIndex: '1',

    };
  }
})
</script>

<template>
  <div class="ViewBody">
    <el-row justify="center" align="middle" id="el-row">
        <el-col :md="{ span: '15' }" :sm="{ span: '12' }" id="el-col">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
          >
            <el-menu-item index="0">
              <img
                  style="width: 100px"
                  src="../../public/logo.png"
                  alt="Element logo"
              />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">Dashboard</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Options</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">Logout</el-menu-item>
            </el-sub-menu>
          </el-menu>

          <ShowTime/>

          <el-row class="dashboard" :gutter="20">
            <Card title="Today Cost" cost="$50" color="blue" />
            <Card title="Tomorrow Cost" cost="$60" color="green" />
            <Card title="This Week Cost" cost="$200" color="orange" />
            <Card title="This Month Cost" cost="$1000" color="purple" />
          </el-row>

          <el-row :gutter="20" >
            <el-col :xs="24" :sm="12" :md="10">
              <WeekChart />
            </el-col>
          </el-row>
        </el-col>
    </el-row>
  </div>
</template>

<style scoped>
#el-row
{
  height: 100vh;

}

#el-col
{
  height: 80vh;
  box-shadow: 10px 10px 10px 10px lightblue;
  padding: 10px;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.76);
  overflow: scroll;
}
.flex-grow {
  flex-grow: 1;
}

</style>