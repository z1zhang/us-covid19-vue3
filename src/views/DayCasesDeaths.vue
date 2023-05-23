<template>
  <el-empty description="暂无数据" v-if="nullData"/>
  <h3 style="color: #8f9298;position: fixed;top: 1%; ;right: 46.5%;">美国每日疫情</h3>
  <Bar v-loading="loading"
       :chart-options="chartOptions"
       :chart-data="chartData"
       :chart-id="chartId"
       :dataset-id-key="datasetIdKey"
       :plugins="plugins"
       :css-classes="cssClasses"
       :styles="styles"
       :width="width"
       :height="height"
  />
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'DayCasesDeaths',
  components: {Bar},
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 900
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      nullData: false,
      loading: true,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    getDayCasesDeaths() {
      this.axios.post("/api/dayCasesDeaths").then(res => {
        if ((res.data.status === 200)) {
          const json = JSON.stringify(res.data.data)
          //将date的值存入chartData.labels数组
          this.chartData.labels = JSON.parse(json).map(item => item.date)
          // 将cases的值存入chartData.datasets数组
          this.chartData.datasets[0] = {
            label: '确诊',
            backgroundColor: 'rgb(255,221,99)',
            borderColor: 'rgb(255,221,99)',
            borderWidth: 0,
            hoverBackgroundColor: 'rgb(255,221,99)',
            hoverBorderColor: 'rgb(255,221,99)',
            data: JSON.parse(json).map(item => item.cases)
          }
          //将deaths的值存入chartData.datasets数组
          this.chartData.datasets[1] = {
            label: '死亡',
            backgroundColor: 'rgb(255,0,0)',
            borderColor: 'rgb(255,0,0)',
            borderWidth: 0,
            hoverBackgroundColor: 'rgb(255,0,0)',
            hoverBorderColor: 'rgb(255,0,0)',
            data: JSON.parse(json).map(item => item.deaths)
          }
          this.loading = false
        } else {
          this.nullData = true
          this.$message.error(res.data.message)
        }
      })
    }
  },
  created() {
    this.getDayCasesDeaths()
  }
}
</script>
