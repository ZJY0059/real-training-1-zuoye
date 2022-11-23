<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/Chart">图表</el-breadcrumb-item>
          <el-breadcrumb-item>用户分布</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <div id="main" style="width: 1200px; height: 400px"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: {
        title: {
          text: "用户分布",
       
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "北京" },
              { value: 735, name: "上海" },
              { value: 580, name: "深圳" },
              { value: 484, name: "杭州" },
              { value: 300, name: "其他" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  methods: {},
  created() {},
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.list);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  background: #eff2f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .box {
    margin-top: 20px;
  }
  .boxs {
    margin-top: 10px;
    font-size: 30px;
  }
}
</style>
