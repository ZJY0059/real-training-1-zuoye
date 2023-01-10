<template>
  <div>
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside
        :width="isCollapse == false ? '180px' : '65px'"
        :class="isCollapse == false ? 'el-aside1' : 'el-aside2'"
      >
        <div class="aside">
          <img src="../assets/ihrm图标.png" alt="" />
          <el-menu
            default-active="/dashboard"
            class="el-menu-vertical-demo"
            background-color="#5686fe"
            text-color="#fff"
            active-text-color="#fff"
            :collapse="isCollapse"
            router
          >
            <el-menu-item index="/dashboard">
              <i class="el-icon-bangzhu" style="color: #fff"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/employees">
              <i class="el-icon-user" style="color: #fff"></i>
              <span slot="title">员工</span>
            </el-menu-item>
            <el-menu-item index="/setting">
              <i class="el-icon-s-cooperation" style="color: #fff"></i>
              <span slot="title">设置</span>
            </el-menu-item>
            <el-menu-item index="/permission">
              <i class="el-icon-setting" style="color: #fff"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="/social_securitys">
              <i class="el-icon-s-operation" style="color: #fff"></i>
              <span slot="title">社保</span>
            </el-menu-item>
            <el-menu-item index="/approvals">
              <i class="el-icon-s-operation" style="color: #fff"></i>
              <span slot="title">审批</span>
            </el-menu-item>
            <el-menu-item index="/attendances">
              <i class="el-icon-edit-outline" style="color: #fff"></i>
              <span slot="title">考勤</span>
            </el-menu-item>
            <el-menu-item index="/salarys">
              <i class="el-icon-document-copy" style="color: #fff"></i>
              <span slot="title">工资</span>
            </el-menu-item>
            <el-menu-item index="/departments">
              <i class="el-icon-document-copy" style="color: #fff"></i>
              <span slot="title">组织架构</span>
            </el-menu-item>
          </el-menu>
          <img src="../assets/IHRM下放图标.png" alt="" class="aside-imgs" />
        </div>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="home">
            <!-- 头部左侧 -->
            <div class="home-left">
              <i
                class="el-icon-s-unfold"
                style="color: #fff; font-size: 20px"
                @click="isCollapse = !isCollapse"
                v-if="isCollapse == false"
              ></i>
              <i
                class="el-icon-s-fold"
                style="color: #fff; font-size: 20px"
                @click="isCollapse = !isCollapse"
                v-else
              ></i>
              <h2 style="color: #fff">江苏传智播客教育科技股份有限公司</h2>
              <p class="tyb">体验版</p>
            </div>
            <!-- 头部右侧 -->
            <div class="home-rigth">
              <el-dropdown>
                <img src="../assets/语言转换.png" alt="" class="yuyan" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>中文</el-dropdown-item>
                  <el-dropdown-item disabled>en</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
                <img
                  :src="img"
                  alt=""
                  style="width: 30px; height: 30px; border-radius: 50%"
                />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="$router.push('/dashboard')"
                    >首页</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click.native="
                      $router.push('https://gitee.com/shuiruohanyu/hrsaas-sd18')
                    "
                    >项目地址</el-dropdown-item
                  >
                  <el-dropdown-item divided @click.native="logLogin"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
              <span>{{ username }}</span>

              <el-dropdown>
                <i class="el-icon-caret-bottom" style="color: #fff"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="$router.push('/dashboard')"
                    >首页</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click.native="
                      $router.push('https://gitee.com/shuiruohanyu/hrsaas-sd18')
                    "
                    >项目地址</el-dropdown-item
                  >
                  <el-dropdown-item divided @click.native="logLogin"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <!-- 内容展示 -->
        <el-main>
          <el-tabs type="border-card" editable class="mbx">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>

          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../untils/http/Status";
/**引入封装的首页内容接口 */
import { IndexGet } from "../untils/api/Index";
/**引入封装的cookie */
import { removeToken } from "../untils/http/auth";
export default {
  data() {
    return {
      /**左侧的展开收起 */
      isCollapse: false,
      // 头像动态展示
      img: "",
      /**头部姓名动态展示 */
      username: "",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    /**退出按钮 */
    logLogin() {
      this.$router.push("/login");
      removeToken();
    },
  },
  created() {},
  mounted() {
    /**获取首页内容 */
    IndexGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.img = res.data.data.staffPhoto;
        this.username = res.data.data.username;
      }
    });
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**头部 */
.el-header {
  width: 100%;
  height: 50px;
  background: #4879fb;
  --el-header-padding: 0 15px 0 15px;
}

/**头部内容展示 */
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .home-left {
    margin-top: 8px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tyb {
      width: 60px;
      height: 30px;
      background: #84a9fe;
      color: #fff;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
  }

  .home-rigth {
    width: 160px;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-right: 10px;
    .yuyan {
      width: 25px;
      height: 25px;
      margin-right: 20px;
    }
  }
}

/**左侧导航样式 */
.el-aside1 {
  background: #5889ff;
  height: 1476px;
  .aside {
    width: 180px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 41px;
    }
  }
}
/**左侧导航样式 */
.el-aside2 {
  background: #5485fd;
  height: 1476px;
  width: 65px;
  .aside {
    width: 75px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 40px;
    }
  }
}
/**内容展示 */
.el-main {
  background-color: #fefefe;
  .mbx {
    width: 1337px;
    border: 1px solid #d8dce5;
    height: 30px;
  }
}
.el-card__body,
.el-main {
  padding: 0;
}
</style>
