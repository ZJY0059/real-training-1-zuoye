<template>
  <div>
    <!-- 头部 -->
    <div class="approvals-top">
      <div class="approvals-top-title">
        <el-alert
          title="当前审批中 0 本月审批通过 1 本月审批驳回 0"
          type="info"
          style="
            width: 360px;
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
          <el-button type="primary" size="small">流程设置</el-button>
        </div>
      </div>
    </div>

    <!-- 表格内容 -->
    <div class="approvals-table">
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 97%; margin: 20px 0 20px 20px"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column
          prop="processName"
          label="审批类型"
          sortable
          width="120"
        >
        </el-table-column>
        <el-table-column prop="username" label="申请人" width="120">
        </el-table-column>
        <el-table-column
          prop="procCurrNodeUserName"
          label="当前审批人"
          sortable
          width="300"
        >
        </el-table-column>
        <el-table-column prop="address" label="审批发起时间" sortable>
          <template #default="scope">
            {{
              new Date(scope.row.procApplyTime).toLocaleString().slice(0, 10)
            }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="审批状态" sortable>
          <template #default="scope">
            {{ scope.row.processState == 2 ? "审批通过" : "" }}
            {{ scope.row.processState == 4 ? "撤销" : "" }}
            {{ scope.row.processState == 1 ? "审批中" : "" }}
            {{ scope.row.processState == 3 ? "审批不通过" : "" }}
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
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
          :page-size="pagination.pageSize"
          layout="prev, pager, next"
          :total="pagination.total"
          style="margin-bottom: 20px"
        >
        </el-pagination>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的审批内容接口 */
import { approvetablePut } from "@/untils/api/approvals";

export default {
  data() {
    return {
      /**分页数据 */
      pagination: {
        page: 1, //第一页数据
        pageSize: 10, //一页十条数据
        total: 0,
        year: 2018,
      },
      /**表格数据 */
      tableData: [],
    };
  },
  methods: {
    /**获取表格信息 */
    approvetable() {
      approvetablePut(this.pagination).then((res) => {
        // console.log(res);
        if (res.status == STATUS.SUCCESS) {
          this.tableData = res.data.data.rows;
          this.pagination.total = res.data.data.total;
        }
      });
    },
    /**分页事件 */
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.approvetable();
    },
    /**分页事件 */
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.approvetable();
    },
  },
  created() {},
  mounted() {
    /**一进页面调用 */
    this.approvetable();
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**头部 */
.approvals-top {
  width: 1300px;
  height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .approvals-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

/**表格 */
.approvals-table {
  width: 1300px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
}
</style>
