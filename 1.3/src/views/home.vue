<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="aside">
          <img src="../assets/ihrm图标.png" alt="" />
          <img src="../assets/IHRM下放图标.png" alt="" class="aside-imgs" />
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup(props, ctx) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const data = reactive({})
    return { ...toRefs(data) }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  background: #4879fb;
}
.el-aside {
  width: 180px;
  background: #5485fd;
  height: 100vh;
  .aside {
    width: 180px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 545px;
    }
  }
}
</style>
