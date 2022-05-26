<template>
  <h4 style="color: #8f9298;position: fixed;top: 1%; ;right: 44%;">{{ this.state }}州的每日疫情</h4>
  <Bar
      v-loading="loading"
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
  name: "County",
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
      default: 1400
    },
    height: {
      type: Number,
      default: 630
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
    },
  },
  data() {
    return {
      title: {
        left: 'center',
        text: '折线图',
      },
      loading: true,
      state: this.$route.params.county,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    getCounty() {
      this.axios.post("/api/countyCasesDeaths", this.state).then(res => {
        if (res.data.status === 200) {
          console.log(res.data)
          this.loading = false
          const json = JSON.stringify(res.data.data)
          this.chartData.labels = JSON.parse(json).map(item => item.county)
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
        }
      })
    },
  },
  mounted() {
    this.getCounty();
  }
}
</script>