<template>
  <div>
    <!-- 头部内容 -->
    <div class="dashboard-top">
      <img
        :src="staffPhoto"
        alt=""
        style="
          width: 100px;
          height: 100px;
          margin-left: 20px;
          border-radius: 50%;
        "
      />
      <div>
        <p style="font-size: 25px">早安,{{ username }}，祝你开心每一天!</p>
        <p style="font-size: 20px; color: #948c8d; margin-top: 10px">
          {{ username }} | 传智播客-总裁办
        </p>
      </div>
    </div>
    <div style="display: flex">
      <div>
        <!-- 工作日历 -->
        <div class="dashboard-calendar">
          <p class="dashboard-calendar-title">工作日历</p>
          <el-calendar v-model="value"> </el-calendar>
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
            <el-button plain style="width: 150px; height: 45px"
              >加班离职</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >请假调休</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >审批列表</el-button
            >
            <el-button
              plain
              style="width: 150px; height: 45px; margin: 15px 0px 0px 10px"
              >我的信息</el-button
            >
          </div>
        </div>
        <!-- 便捷导航 -->
        <div class="dashboard-performance">
          <p class="dashboard-performance-title">绩效指数</p>
          <div
            id="main"
            style="width: 500px; height: 300px; margin: 80px 0 0 120px"
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
import { STATUS } from '../../untils/Status'
/**引入封装的登录接口 */
import { profilePost, profileGet } from '../../untils/api/index'

/**引入echarts */
import * as echarts from 'echarts'
export default {
  data() {
    return {
      /**昵称 */
      username: '',
      /**日历绑定 */
      value: new Date(),
      /**头像 */
      staffPhoto: ''
    }
  },
  methods: {
    profilePost() {
      profilePost().then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          this.userId = res.data.data.userId
          this.profileGet()
        }
      })
    },
    profileGet() {
      profileGet(this.userId).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          this.username = res.data.data.username
          this.staffPhoto = res.data.data.staffPhoto
        }
      })
    }
  },
  created() {
    this.profilePost()
  },
  mounted() {
    /**获取echarts */
    var myChart = echarts.init(document.getElementById('main'))
    var option
    option = {
      title: {
        text: '个人工作绩效表'
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '考勤', max: 6500 },
          { name: '工资', max: 16000 },
          { name: '代码质量', max: 30000 },
          { name: '工作积极性', max: 38000 },
          { name: '加班时长', max: 52000 },
          { name: 'bug数量', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    }

    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部内容 */
.dashboard-top {
  width: 91.25rem;
  background: #fff;
  height: 10rem;
  display: flex;
  align-items: center;
}
// <!-- 工作日历 -->
.dashboard-calendar {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 1.25rem 0 0 10px;
  width: 46.875rem;
  // height: 26.875rem;
  .dashboard-calendar-title {
    // width: 215px;
    height: 2.8125rem;
    font-size: 1.5625rem;
    border-bottom: 2px solid #ebeef5;
    margin: 1.25rem 0 0 1.875rem;
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
  width: 685px;
  height: 230px;
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
  width: 680px;
  height: 500px;
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
  width: 685px;
  height: 250px;
  .dashboard-link-title {
    width: 100px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 30px 0 0 30px;
  }
  .dashboard-link-text {
    width: 420px;
    height: 80px;
    display: flex;
    margin: 20px 0 0 145px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
