<template>
  <el-select v-model="value" class="m-2" placeholder="数据选项" size="large" @change="jumpPage">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <router-view/>
</template>
<script>
export default {
  name: "DeathRate",
  data() {
    return {
      value: '',
      options: [
        {
          value: 'state',
          label: '各州确诊/死亡/死亡率地图统计'
        },
        {
          value: 'dayCasesDeaths',
          label: '美国每天确诊/死亡'
        },
        {
          value: 'dayAddCasesDeaths',
          label: '美国每天新增确诊/死亡'
        },
        {
          value: 'top10LeastCases',
          label: '美国确诊人数最少的十个州'
        },
        {
          value: 'top10LeastDeaths',
          label: '美国死亡人数最少的十个州'
        }
      ]
    }
  },
  methods: {
    jumpPage() {
      if (this.value === 'state') {
        this.$router.push('/');
      } else if (this.value === 'dayCasesDeaths') {
        this.$router.push('/dayCasesDeaths');
      } else if (this.value === 'dayAddCasesDeaths') {
        this.$router.push('/dayAddCasesDeaths');
      } else if (this.value === 'top10LeastCases') {
        this.$router.push('/top10LeastCases');
      } else if (this.value === 'top10LeastDeaths') {
        this.$router.push('/top10LeastDeaths');
      }
      this.$forceUpdate();
    }
  }
}
</script>
<style>
body .el-table th.gutter {
  display: table-cell !important;
}
</style>
