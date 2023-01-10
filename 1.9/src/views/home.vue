<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧菜单栏 -->
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
        <!-- 头部 -->
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
                <el-icon size="20px" color="#fff" @click="Search1"
                  ><Search
                /></el-icon>
              </el-tooltip>
              <el-input
                v-model="search.input"
                placeholder="站点搜索"
                style="margin: ; width: 200px"
                v-if="search.flag == true"
              />
              <el-tooltip
                class="box-item"
                effect="dark"
                content="使用文档"
                placement="bottom"
              >
                <el-icon
                  color="#fff"
                  size="20px"
                  @click="
                    router.push('http://itheimaadmin.itcast.cn/book/help')
                  "
                  ><QuestionFilled
                /></el-icon>
              </el-tooltip>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="全屏"
                placement="bottom"
              >
                <el-icon color="#fff" size="20px" @click="screen"
                  ><FullScreen
                /></el-icon>
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
                  <el-color-picker v-model="color1" @change="picker1" />
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
                    <el-dropdown-item
                      command="a"
                      @click="router.push('/dashboard')"
                      >首页</el-dropdown-item
                    >
                    <el-dropdown-item command="b" @click="retreatlogin"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <!-- 内容展示 -->
          <router-view></router-view>
				  <div>
						<p style="margin: 15px 0 0 700px; "><img src="../assets/GitHub.png" alt=""></p>
						<p style="margin: 0 0 0 580px; ">copyright<img src="../assets/c.png" alt=""> 2018 iHRM 系统 版权所有</p>
					</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
/**引入全屏 */
import screenfull from 'screenfull'
/**引入pinia */
import { piniaIndex } from '../pinia/index,'
/**引入封装的cookie */
import { removeToken } from '../untils/api/auth'
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
/**引入提示框 */
import { ElMessage } from 'element-plus'
/**引入封装的接口首页内容 */
import { profilenPost } from '../untils/api/api'
/**引入封装得状态码 */
import { STATUS } from '../untils/api/Status'
const router = useRouter()
/**注册pinia模块 */
// let piniastore = reactive({
//   piniastore: ''
// })
/**左侧的显示隐藏 */
const isCollapse = ref(false)
/**element-plus取色器 */
const color1 = ref('#409EFF')
/**换肤事件 */
const picker1 = () => {
  ElMessage({
    message: '换肤成功',
    type: 'success'
  })
  piniaIndex.color = color1.value
}
/**获取首页内容 */
let data = ref<number[]>()
profilenPost().then((res) => {
  // console.log(res)
  if (res.status == STATUS.SUCCESS) {
    data = res.data.data.username
  }
})

/**搜索框的数据 */
const search = reactive({
  flag: false, //控制搜索按钮输入框的显示隐藏
  input: ''
})
/**搜索按钮 */
const Search1 = () => {
  search.flag = !search.flag
}

/**全屏数据 */
const isFullscreen = ref<boolean>(false)
/**全屏按钮 */
const screen = () => {
  if (screenfull) {
    screenfull.toggle()
  }
}
/**退出按钮 */
const retreatlogin = () => {
  router.push('/login')
  removeToken()
}
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

function token(token: any) {
  throw new Error('Function not implemented.')
}
