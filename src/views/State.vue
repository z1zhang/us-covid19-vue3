<template>
  <el-table :data="usaData" style="width: 35% ; z-index: 100;position: absolute;top: 1%;right: 34%;">
    <el-table-column prop="name" label="地区" width="133"/>
    <el-table-column prop="cases" label="总确诊" width="133"/>
    <el-table-column prop="deaths" label="总死亡" width="133"/>
    <el-table-column prop="deathRate" label="总病死率" width="133"/>
  </el-table>
  <el-radio-group style="position: absolute;z-index: 100; top: 90%;right: 42.5%;" v-model="display" size="small">
    <el-radio-button label="0">确诊统计地图</el-radio-button>
    <el-radio-button label="1">死亡统计地图</el-radio-button>
    <el-radio-button label="2">病死率地图</el-radio-button>
  </el-radio-group>
  <StateCases v-if="display ==='0'"/>
  <Top10Cases v-if="display==='0'" style="position: absolute;top: 58%;right: 77%;"/>
  <StateDeaths v-if="display==='1'"/>
  <Top10Deaths v-if="display==='1'" style="position: absolute;top: 58%;right: 77%;"/>
  <StateRate v-if="display==='2'"/>
  <Top10Rate v-if="display==='2'" style="position: absolute;top: 58%;right: 77%;"/>
</template>

<script>
import StateRate from "../components/StateRate.vue";
import StateDeaths from "../components/StateDeaths.vue";
import StateCases from "../components/StateCases.vue";
import Top10Cases from "../components/Top10Cases.vue";
import Top10Deaths from "../components/Top10Deaths.vue";
import Top10Rate from "../components/Top10Rate.vue";

export default {
  name: "State",
  components: {Top10Rate, Top10Deaths, Top10Cases, StateCases, StateDeaths, StateRate},
  data() {
    return {
      usaData: [],
      display: '2'
    }
  },
  created() {
    this.axios.post("/api/deathRate").then(res => {
      if (res.data.status === 200) {
        const totalData = {
          name: "全美",
          cases: parseFloat(res.data.data[47]["cases"]).toString(),
          deaths: parseFloat(res.data.data[47]["deaths"]).toString(),
          deathRate: parseFloat(res.data.data[47]["rate"]).toString().concat("%")
        };
        this.usaData.push(totalData);
      }
    });
  }
}
</script>
