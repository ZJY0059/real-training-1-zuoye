<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <el-table :data="reslist" style="width: 100%">
          <el-table-column type="index" label="#" width="100">
          </el-table-column>
          <el-table-column prop="registe_time" label="注册日期" width="200">
          </el-table-column>

          <el-table-column prop="username" label="用户姓名" width="200">
          </el-table-column>
          <el-table-column prop="city" label="注册地址"> </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.num"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="list.length"
        >
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [], //用户列表数据
      page: {
        size: 5, //每页5条数据
        num: 1, //默认第1页
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(val);
      this.page.size = val;
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.page.num = val;
    
    },
  },
  created() {
    axios({
      url: " https://elm.cangdu.org/v1/users/list?offset=0&limit=20",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.list = res.data;
    });
  },
  mounted() {},
  components: {},
  computed: {
    reslist() {
      return this.list.slice(
        this.page.size * (this.page.num - 1),
        this.page.size * this.page.num
      );
    },
  },
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
