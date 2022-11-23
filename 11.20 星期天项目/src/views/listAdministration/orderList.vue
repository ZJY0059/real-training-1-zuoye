<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <el-table :data="reslist" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户名">
                  <span>{{ props.row.restaurant_name }}</span>
                </el-form-item>
                <el-form-item label="店铺名称">
                  <span>{{ props.row.time_pass }}</span>
                </el-form-item>
                <el-form-item label="收货地址">
                  <span>{{ props.row.order_time }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.unique_id }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.total_quantity }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="订单 ID" prop="address_id"> </el-table-column>
          <el-table-column label="总价格" prop="total_amount">
          </el-table-column>
          <el-table-column label="订单状态" prop="status_bar.title">
          </el-table-column>
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
      console.log(val);
      this.page.size = val;
    },
    handleCurrentChange(val) {
      console.log(val);
      this.page.num = val;
    },
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined",
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
