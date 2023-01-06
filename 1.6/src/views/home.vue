<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        :width="isCollapse == false ? '180px' : '65px'"
        :class="isCollapse == false ? 'el-aside1' : 'el-aside2'"
      >
        <div class="aside">
          <img src="../assets/ihrm图标.png" alt="" />
          <el-row>
            <el-col :span="12">
              <el-menu
                :collapse="isCollapse"
                default-active="/dashboard"
                class="el-menu-vertical-demo"
                router
              >
                <el-menu-item index="/dashboard">
                  <el-icon><Help /></el-icon>
                  <template #title>首页</template>
                </el-menu-item>
                <el-menu-item index="/departments">
                  <el-icon><MessageBox /></el-icon>
                  <template #title>组织架构</template>
                </el-menu-item>
                <el-menu-item index="/employees">
                  <el-icon><Avatar /></el-icon>
                  <template #title>员工</template>
                </el-menu-item>
                <el-menu-item index="/settings">
                  <el-icon><Setting /></el-icon>
                  <template #title>公司设置</template>
                </el-menu-item>
                <el-menu-item index="/permissions">
                  <el-icon><Setting /></el-icon>
                  <template #title>权限设置</template>
                </el-menu-item>
                <el-menu-item index="/social-securitys">
                  <el-icon><Grid /></el-icon>
                  <template #title>社保</template>
                </el-menu-item>
                <el-menu-item index="/attendances">
                  <el-icon><Discount /></el-icon>
                  <template #title>考勤</template>
                </el-menu-item>
                <el-menu-item index="/salarys">
                  <el-icon><Memo /></el-icon>
                  <template #title>工资</template>
                </el-menu-item>
                <el-menu-item index="/approvals">
                  <el-icon><Printer /></el-icon>
                  <template #title>审批</template>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>

          <img src="../assets/IHRM下放图标.png" alt="" class="aside-imgs" />
        </div>
      </el-aside>

      <el-container>
        <el-header>
          <div class="home">
            <div class="home-left">
              <el-icon
                size="20"
                color="#fff"
                style="margin-top: 0px"
                @click="isCollapse = !isCollapse"
              >
                <component :is="isCollapse ? Expand : Fold" />
              </el-icon>
              <h2 style="color: #fff">江苏传智播客教育科技股份有限公司</h2>
              <p class="tyb">体验版</p>
            </div>
            <div class="home-rigth">
              <el-tooltip
                class="box-item"
                effect="dark"
                content="站内搜索"
                placement="bottom"
              >
                <el-icon size="20px" color="#fff"><Search /></el-icon>
              </el-tooltip>

              <el-tooltip
                class="box-item"
                effect="dark"
                content="使用文档"
                placement="bottom"
              >
                <el-icon color="#fff" size="20px"><QuestionFilled /></el-icon>
              </el-tooltip>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="全屏"
                placement="bottom"
              >
                <el-icon color="#fff" size="20px"><FullScreen /></el-icon>
              </el-tooltip>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="多语言"
                placement="bottom"
              >
                <el-icon color="#fff" size="20px"><HelpFilled /></el-icon>
              </el-tooltip>

              <el-tooltip
                class="box-item"
                effect="dark"
                content="换肤"
                placement="bottom"
              >
                <div class="demo-color-block" style="width: 40px; height: 40px">
                  <el-color-picker v-model="color1" />
                </div>
              </el-tooltip>

              <el-dropdown>
                <div class="box">
                  <img src="../assets/头像.png" alt="" />
                  <p style="color: #000">{{ data }}</p>
                  <el-icon color="#fff"><ArrowDownBold /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="a">首页</el-dropdown-item>
                    <el-dropdown-item command="b">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
/**引入element-plus图标库 */
import {
  Fold,
  Help,
  Printer,
  Avatar,
  Setting,
  Discount,
  MessageBox,
  Grid,
  Memo,
  Search,
  QuestionFilled,
  FullScreen,
  ArrowDownBold,
  Expand,
  HelpFilled
} from '@element-plus/icons-vue'
/**引入封装的接口首页内容 */
import { profilenPost } from '../untils/api/api'
/**引入封装得状态码 */
import { STATUS } from '../untils/api/Status'
/**左侧的显示隐藏 */
const isCollapse = ref(false)
/**element-plus取色器 */
const color1 = ref('#409EFF')

/**获取首页内容 */
let data = ref()
profilenPost().then((res) => {
  // console.log(res)
  if (res.status == STATUS.SUCCESS) {
    data = res.data.data.username
  }
})
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  background: #4879fb;
  --el-header-padding: 0 15px 0 15px;
}
.el-main {
  --el-main-padding: 0rem;
  background: #eaecef;
}
.el-aside1 {
  background: #5485fd;
  height: 1000px;
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

.el-aside2 {
  background: #5485fd;
  height: 1000px;
  width: 65px;
  .aside {
    width: 75px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 25px;
    }
  }
}
.el-menu--collapse {
  width: 0px;
}
.el-row {
  width: 0px;
}
.el-menu-item:hover {
  width: 180px;
  background: #fff;
}
.is-active {
  width: 180px;
  background: #fff;
  color: #409eff !important;
}

.el-menu-item {
  color: #fff;
}
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
  }
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
  width: 360px;
  // background: red;
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
}

.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
}
</style>
