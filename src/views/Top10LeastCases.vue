<template>
  <div v-loading="loading" id="wordCloud" :style="{width: '100%', height: '300px'}" :datasrc="wordData"></div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

export default {
  name: "Top10LeastCases",
  data() {
    return {
      loading: true,
      wordData: []
    }
  },
  created() {
    this.axios.post("api/top10LeastCases").then(res => {
      if (res.data.status === 200) {
        const json = JSON.stringify(res.data.data)
        for (let i = 0; i < 10; i++) {
          const person = {name: res.data.data[i].state, value: res.data.data[i].cases};
          this.wordData.push(person);
        }
        this.loading = false;
        this.initChart()
      } else {
        this.$message.error(res.data.message);
      }
    })
  },
  methods: {
    initChart() {
      let myChart = echarts.getInstanceByDom(document.getElementById("wordCloud"))
      if (myChart == null) { // 如果不存在，就进行初始化
        this.chart = echarts.init(document.getElementById("wordCloud"));
      }
      const option = {
        title: {
          text: "确诊人数最少的十个州",
          x: "center"
        },
        backgroundColor: "#fff",
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            sizeRange: [20, 100],
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            //rotationRange: [-45, 0, 45, 90],
            //rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            //maskImage: maskImage,
            textStyle: {
              normal: {
                color: function () {
                  return (
                      "rgb(" +
                      Math.round(Math.random() * 150) +
                      ", " +
                      Math.round(Math.random() * 153) +
                      ", " +
                      Math.round(Math.random() * 150) +
                      ")"
                  );
                }
              }
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            data: this.wordData
          }
        ]
      };
      this.chart.setOption(option);
    },
  }
}
</script>