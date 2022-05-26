<template>
  <div v-loading="loading">
    <el-empty description="暂无数据" v-if="nullData"/>
    <div id="USA" :style="{ width: width, height: '685px' }"></div>
  </div>
</template>

<script>
import USA from "../assets/geo/USA.json";
import * as echarts from "echarts";
import router from "../router/router.js";

echarts.registerMap("USA", USA, {
  Alaska: {
    left: -128,
    top: 25,
    width: 15
  },
  Hawaii: {
    left: -110,
    top: 25,
    width: 5
  },
  'Puerto Rico': {
    left: -76,
    top: 26,
    width: 2
  }
});

export default {
  name: "StateRate",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      loading: true,
      nullData: false,
      stateData: []
    }
  },
  created() {
    this.queryData();
  },
  methods: {
    queryData: function () {
      this.loading = true;
      this.stateData = [];
      this.axios.post("api/deathRate").then(res => {
        if (res.data.status === 200) {
          this.loading = false
          for (let i = 0; i < 56; i++) {
            const perf = {
              name: res.data.data[i].state,
              value: res.data.data[i].rate,
              deaths: parseFloat(res.data.data[i].deaths),
              perf: parseFloat(res.data.data[i].cases)
            };
            this.stateData.push(perf);
          }
          this.setMapData();
        } else {
          this.nullData = true
        }
      })
    },
    // 地图
    setMapData() {
      // 初始化echarts实例
      this.usaChart = echarts.init(document.getElementById("USA"));
      // 进行相关配置
      this.chartOption = {
        tooltip: {
          // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          formatter(params) {
            // params.data 就是series配置项中的data数据遍历
            let localValue, deaths, perf;
            if (params.data) {
              localValue = params.data.perf;
              deaths = params.data.deaths;
              perf = params.data.value;
            } else {
              // 为了防止没有定义数据的时候报错写的
              localValue = 0;
              deaths = 0;
              perf = 0;
            }
            return `
          <div style='font-size:16px;'> ${params.name}</div>
          <p >
              确诊：${localValue}<br/>
              死亡：${deaths}<br/>
              病死率：${perf.concat("%")}<br/>
          </p>
        `;
          },
          borderColor: "#fff",
        },
        visualMap: {
          type: "continuous",
          show: true,
          bottom: 30,
          right: 150,
          text: ["高病死率(>=10%)", "低病死率(>=0%)"],
          max: 10,
          min: 0,
          precision: 2,
          inRange: { //定义 在选中范围中 的视觉元素
            color: [
              "#fdfdfd",
              "#fdf0cd",
              "#fbd09f",
              "#fd8b70",
              "#e44a44",
              "#bc1316",
              "#7e1100",
            ],
            symbolSize: [0, 100]
          },
          itemHeight: 200,
          itemWidth: 15
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          // 地理坐标系组件用于地图的绘制
          map: "USA", // 表示中国地图
          roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 0.8, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true, // 显示地图各省名称
          },
          itemStyle: {
            //地图区域的多边形图形样式。
            //未选中的状态
            borderColor: "#7a7777",
            areaColor: "#D8E9FD", //背景颜色
            label: {
              show: true, //显示名称
            },
          },
          //选中的状态
          emphasis: {
            itemStyle: {
              shadowBlur: 20,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255,99,132,0)",
              areaColor: "#0384de",
            },
          },
        },
        series: [
          {
            // name: "各州累计病死率", // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.stateData
          },
        ],
      };
      this.usaChart.setOption(this.chartOption);
      this.usaChart.on('click', function (stateData) {
        router.push({path: '/state/' + stateData.data.name});
      })
    },
  }
}
</script>