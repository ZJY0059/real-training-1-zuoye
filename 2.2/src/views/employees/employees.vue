<template>
  <div>
    <div class="employees-top">
      <div class="employees-top-title">
        <el-alert
          :title="'当前共有' + 12333 + '条记录'"
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
            type="xls"
            worksheet="My Worksheet"
            name="用户信息"
          >
            <el-button
              type="danger"
              size="small"
              style="position: absolute; left: 1250px; top: 115px"
              >普通excel导出</el-button
            >
          </download-excel>
          <download-excel
            class="export-excel-wrapper"
            type="xls"
            worksheet="My Worksheet"
            name="用户信息"
          >
            <el-button
              type="warning"
              size="small"
              style="position: absolute; left: 1370px; top: 115px"
              >复杂excel导出</el-button
            >
          </download-excel>
          <el-button type="warning" size="small">excel导出</el-button>
          <el-button type="primary" size="small" disabled>新增员工</el-button>
        </div>
      </div>
    </div>

    <div class="employees-table">
      <!-- 表格内容 -->
      <el-table
        :data="$store.state.employees.tableData"
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
              {{ scope.row.departmentName == '' ? '未知' : '正式' }}
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
            <el-button type="text" size="small">查看</el-button>
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
          @current-change="handleCurrentChange"
          :current-page="$store.state.employees.pagination.page"
          :page-size="$store.state.employees.pagination.size"
          layout="prev, pager, next"
          :total="$store.state.employees.pagination.total"
          style="margin: 20px 20px 30px 0; float: right"
        >
        </el-pagination>
				<p></p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {}
  },
  methods: {
    handleCurrentChange(val) {
			// console.log(val);
      this.$store.dispatch('employees/staffGet', val)
    },
  },
  created() {
    this.$store.dispatch('employees/getRole')
    this.$store.dispatch('employees/staffGet')
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部内容 */
.employees-top {
  width: 91.25rem;
  background: #fff;
  height: 6.25rem;
  .employees-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

/**表格 */
.employees-table {
  width: 1454px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px 0 0 0;
}
.export-excel-wrapper {
  margin: 0 0 0 0;
}
</style>
