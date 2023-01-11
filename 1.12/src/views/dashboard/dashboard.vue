<template>
  <div>
		<!-- 头部 -->
    <div class="dashboard-top">
      <img
        :src="img"
        alt=""
        style="
          width: 110px;
          height: 110px;
          margin: 0 10px 0 20px;
          border-radius: 50%;
        "
      />
      <div>
        <p style="font-size: 25px">早安,{{ username }}，祝你开心每一天!</p>
        <p style="font-size: 20px; color: #948c8d; margin-top: 10px">
          {{ username }} | {{ companyName }}-{{ departmentName }}
        </p>
      </div>
    </div>
    <div style="display: flex">
      <div>
        <!-- 工作日历 -->
        <div class="dashboard-calendar">
          <p class="dashboard-calendar-title">工作日历</p>
          <el-calendar v-model="value" style="width: 100%; height: 100%">
          </el-calendar>
        </div>
        <!-- 公告 -->
        <div class="dashboard-Notice">
          <p class="dashboard-Notice-title">公告</p>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第1期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第2期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第3期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- 流程申请 -->
        <div class="dashboard-apply">
          <p class="dashboard-apply-title">流程申请</p>
          <div class="dashboard-apply-text">
            <el-button plain style="width: 120px; height: 45px"
              >加班离职</el-button
            >
            <el-button plain style="width: 120px; height: 45px"
              >请假调休</el-button
            >
            <el-button plain style="width: 120px; height: 45px"
              >审批列表</el-button
            >
            <el-button
              plain
              style="width: 120px; height: 45px; margin: 15px 0 0 10px"
              >我的信息</el-button
            >
          </div>
        </div>
        <!-- 绩效指数 -->
        <div class="dashboard-performance">
          <p class="dashboard-performance-title">绩效指数</p>
          <div
            id="main"
            style="width: 500px; height: 300px; margin: 20px 0 0 20px"
          ></div>
        </div>
        <!-- 链接 -->
        <div class="dashboard-link">
          <p class="dashboard-link-title">帮助链接</p>
          <div class="dashboard-link-text">
            <div>
              <img
                src="../../assets/入门指南.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px; margin-left: 10px">入门指南</p>
            </div>
            <div>
              <img
                src="../../assets/帮助手册.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px">在线帮助手册</p>
            </div>
            <div>
              <img
                src="../../assets/联系电话.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px">联系电话支持</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的首页内容接口 */
import { IndexGet } from "../../untils/api/Index";
/**引入echarts */
import * as echarts from "echarts";
export default {
  data() {
    return {
      // 头像动态展示
      img: "",
      /**姓名动态展示 */
      username: "",
      /**部门动态 */
      companyName: "",
      departmentName: "",
      /**日历绑定 */
      value: new Date(),
    };
  },
  methods: {},
  created() {},
  mounted() {
    /**获取姓名内容 */
    IndexGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.img = res.data.data.staffPhoto;
        this.username = res.data.data.username;
        this.companyName = res.data.data.companyName;
        this.departmentName = res.data.data.departmentName;
      }
    });
    /**获取echarts */
    var myChart = echarts.init(document.getElementById("main"));
    var option;
    option = {
      title: {
        text: "个人工作绩效表",
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "考勤", max: 6500 },
          { name: "工资", max: 16000 },
          { name: "代码质量", max: 30000 },
          { name: "工作积极性", max: 38000 },
          { name: "加班时长", max: 52000 },
          { name: "bug数量", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending",
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**头部 */
.dashboard-top {
  width: 1315px;
  height: 150px;
  border: 2px solid #ebeef5;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
	margin-top: 20px;
}

// <!-- 工作日历 -->
.dashboard-calendar {
  border: 2px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 750px;
  height: 700px;
  .dashboard-calendar-title {
    // width: 215px;
    height: 45px;
    font-size: 25px;
    border-bottom: 2px solid #ebeef5;
    margin: 20px 0 0 30px;
  }
}
/**公告 */
.dashboard-Notice {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 750px;
  height: 450px;
  .dashboard-Notice-title {
    height: 45px;
    font-size: 16px;
    border-bottom: 2px solid #ebeef5;
    margin: 20px 0 0 30px;
  }
  .dashboard-Notice-text {
    width: 600px;
    height: 130px;
    border-bottom: 2px solid #ebeef5;
    margin: -15px 0 0 70px;
    display: flex;
    align-items: center;
  }
}
/**流程申请 */
.dashboard-apply {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 559px;
  height: 200px;
  .dashboard-apply-title {
    width: 100px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 20px 0 0 30px;
  }
  .dashboard-apply-text {
    margin: 15px 0px 0px 31px;
  }
}
/**绩效指数 */
.dashboard-performance {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 550px;
  height: 400px;
  .dashboard-performance-title {
    height: 45px;
    font-size: 25px;
    border-bottom: 2px solid #ebeef5;
    margin: 20px 0 0 30px;
  }
}
/**链接 */
.dashboard-link {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 550px;
  height: 200px;
  .dashboard-link-title {
    width: 100px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 20px 0 0 30px;
  }
  .dashboard-link-text {
    width: 420px;
    height: 80px;
    display: flex;
    margin: 20px 0 0 55px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
