<template>
  <div>
    <div class="users">
      <!-- z折线图 -->
      <div id="main" style="width: 600px; height: 400px"></div>

      <!-- vue内置 -->
      <ve-line :data="chartData" width="600px"  id='birthday'></ve-line>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      option: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["华东", "华南", "华北", "西部", "其他"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "华东",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "华南",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "华北",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "西部",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "其他",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },

      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    }
  },
  methods: {},
  created() {
    this.$http({
      method: "get",
      url: this.$http.addorUrl("reports/type/1")
    }).then((res) => {
      // console.log(res)
      // this.option = res.data
    })
  },
  mounted() {
    /**折线图 */
    var myChart = echarts.init(document.getElementById("main"))
    myChart.setOption(this.option)

    // 内置
    this.pieSetting = {
      label: {
        show: true,
        position: "center"
      }
    }

    setTimeout(() => {
      let chartDom = document.getElementById("birthday")
      let myChart = echarts.init(chartDom)
      let option
      option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.users {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
  display: flex;
}
</style>
