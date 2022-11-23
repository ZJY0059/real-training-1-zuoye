<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/index"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
          router
        >
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 首页 -->
          <el-submenu index="/userlist">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userlist">用户列表</el-menu-item>
              <el-menu-item index="/shopList">商品列表</el-menu-item>
              <el-menu-item index="/foodList">食品列表</el-menu-item>
              <el-menu-item index="/orderList">订单列表</el-menu-item>
              <el-menu-item index="/adminList">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 数据管理 -->
          <el-submenu index="/addShop">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/addShop">添加商铺</el-menu-item>
              <el-menu-item index="/addGoods">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 添加数据 -->
          <el-submenu index="/Chart">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Chart">用户分布</el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- 图表 -->
          <el-submenu index="/edit">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/edit">文本编辑</el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- 编辑 -->
          <el-submenu index="/setup">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/setup">管理员设置</el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- 设置 -->
          <el-submenu index="/explain">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/explain">说明</el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- 说明 -->
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-aside {
  height: 100vh;
}
</style>
