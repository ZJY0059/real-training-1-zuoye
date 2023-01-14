<template>
  <div>
    <!-- 头部 -->
    <div class="employees-top">
      <div class="employees-top-title">
        <el-alert
          :title="'当前共有' + pagination.total + '条记录'"
          type="info"
          style="
            width: 200px;
            height: 40px;
            background: #e6f7ff;
            border: 1px solid #91d5ff;
            margin-top: 30px;
            color: #000;
            margin-left: 20px;
          "
          show-icon
          :closable="false"
        >
        </el-alert>
        <div style="margin: 30px 20px 0 0">
          <download-excel
            class="export-excel-wrapper"
            :data="tableData"
            type="xls"
            worksheet="My Worksheet"
            name="用户信息"
          >
            <el-button
              type="danger"
              size="small"
              style="position: absolute; left: 1070px; top: 147px"
              >普通excel导出</el-button
            >
          </download-excel>
          <el-button type="warning" size="small">负责excel导出</el-button>
          <el-button
            type="warning"
            size="small"
            @click="$router.push('/import')"
            >excel导出</el-button
          >
          <el-button type="primary" size="small" disabled>新增员工</el-button>
        </div>
      </div>
    </div>
    <div class="employees-table">
      <!-- 表格内容 -->
      <el-table
        :data="tableData"
        border
        style="width: 97%; margin: 20px 0 20px 20px"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable width="100">
        </el-table-column>
        <el-table-column prop="staffPhoto" label="头像" width="120">
          <template slot-scope="scope">
            <div>
              <img
                :src="scope.row.staffPhoto"
                alt=""
                style="width: 80px; height: 80px; border-radius: 50%"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable width="130">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="140">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="聘用形式"
          sortable
          width="120"
        >
          <template slot-scope="scope">
            <div>
              {{ scope.row.departmentName == "" ? "未知" : "正式" }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          sortable
          width="130"
        >
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="账户状态"
          sortable
          width="110"
        >
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enableState"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250" sortable>
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="examine(scope.row.id)"
              >查看</el-button
            >
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex; justify-content: space-between">
        <p></p>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.page"
          :page-size="pagination.size"
          layout="prev, pager, next"
          :total="pagination.total"
          style="margin: 20px 20px 30px 0; float: right"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的首页内容接口 */
import { staffGet } from "../../untils/api/employees";
/**引入excel */
import downloadexcel from "vue-json-excel";
export default {
  data() {
    return {
      /**分页数据 */
      pagination: {
        page: 1, //第一页数据
        size: 10, //一页十条数据
        total: 0,
      },
      /**表格数据 */
      tableData: [],
    };
  },
  methods: {
    /**获取员工表格内容 */
    stafftable() {
      staffGet(this.pagination).then((res) => {
        // console.log(res);
        if (res.status == STATUS.SUCCESS) {
          this.pagination.total = res.data.data.total;
          this.tableData = res.data.data.rows;
        }
      });
    },
    /**分页事件 */
    handleSizeChange(val) {
      this.pagination.size = val;
      this.stafftable();
    },
    /**分页事件 */
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.stafftable();
    },
    /**查看事件 */
    examine(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
  },
  created() {},
  mounted() {
    /**一进页面调用表格内容 */
    this.stafftable();
  },
  components: {
    downloadexcel,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**头部 */
.employees-top {
  width: 1300px;
  height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .employees-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/**表格 */
.employees-table {
  width: 1300px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
}
.export-excel-wrapper {
  margin: 0 0 0 0;
}
</style>
