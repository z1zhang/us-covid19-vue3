<template>
  <div>
    <el-empty description="暂无数据" v-if="nullData"/>
    <h3 style="color: #8f9298;position: fixed;top: 1%; ;right: 45%;">美国每日新增疫情</h3>
    <Line
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
  </div>
</template>

<script>
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

export default {
  name: 'DayAddCasesDeaths',
  components: {Line},
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
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
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        //自适应大小
        responsive: true
      }
    }
  },
  methods: {
    getAddDayCasesDeaths() {
      this.axios.post("api/dayAddCasesDeaths").then(res => {
        if (res.data.status === 200) {
          const json = JSON.stringify(res.data.data)
          //将date的值存入chartData.labels数组
          this.chartData.labels = JSON.parse(json).map(item => item.date)
          // 将addCases的值存入chartData.datasets数组
          this.chartData.datasets[0] = {
            label: '新增确诊',
            data: JSON.parse(json).map(item => item.casesVariation),
            backgroundColor: 'rgb(255,221,99)',
            borderColor: 'rgb(255,221,99)',
            borderWidth: 1,
          }
          this.chartData.datasets[1] = {
            label: '新增死亡',
            data: JSON.parse(json).map(item => item.deathsVariation),
            backgroundColor: 'rgb(255,0,0)',
            borderColor: 'rgb(255,0,0)',
            borderWidth: 1
          }
        }
      })
      // this.axios.post("api/dayAddDeaths").then(res => {
      //   if ((res.data.status === 200)) {
      //     const json = JSON.stringify(res.data.data)
      //     //将date的值存入chartData.labels数组
      //     this.chartData.labels = JSON.parse(json).map(item => item.date)
      //     // 将addCases的值存入chartData.datasets数组
      //     this.chartData.datasets[1] = {
      //       label: '新增死亡',
      //       data: JSON.parse(json).map(item => item.variation),
      //       backgroundColor: 'rgb(255,0,0)',
      //       borderColor: 'rgb(255,0,0)',
      //       borderWidth: 1
      //     }
      //   }
      // })
    }
  },
  created() {
    this.getAddDayCasesDeaths()
  }
}
</script>