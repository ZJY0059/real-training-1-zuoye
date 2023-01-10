<template>
  <div>
    <div class="setting-title">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="角色管理" name="first">
          <el-button type="primary" size="small">新增角色</el-button>
          <!-- 表格 -->
          <el-table
            :data="tableData"
            border
            style="width: 97%; margin: 20px 0 20px 20px"
          >
            <el-table-column
              type="index"
              label="序号"
              width="120"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="description" label="描述" align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button size="mini" type="success">分配权限</el-button>
                <el-button size="mini" type="primary">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
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
              :page-size="pagination.pagesize"
              layout="prev, pager, next"
              :total="pagination.total"
            >
            </el-pagination>
            <p></p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            style="margin: 20px 0px 0px 65px"
          >
            <el-form-item label="公司名称">
              <el-input
                v-model="form.name"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                v-model="form.companyAddress"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input
                v-model="form.mailbox"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="form.remarks"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的首页内容接口 */
import { setGet, settitleGet } from "../../untils/api/setting";
export default {
  data() {
    return {
      /**tab栏切换 */
      activeName: "first",
      /**分页数据 */
      pagination: {
        page: 1, //第一页数据
        pagesize: 10, //一页十条数据
        total: 0, //总条数
      },
      /**表格数据 */
      tableData: [],
      /**表单的内容展示 */
      form: {
        name: "",
        companyAddress: "",
        mailbox: "",
        remarks: "",
      },
    };
  },
  methods: {
    /**获取表格内容 */
    settable() {
      setGet(this.pagination).then((res) => {
        // console.log(res);
        if (res.status == STATUS.SUCCESS) {
          this.pagination.total = res.data.data.total;
          this.tableData = res.data.data.rows;
        }
      });
    },
    /**分页事件 */
    handleSizeChange(val) {
      this.pagination.pagesize = val;
      this.settable();
    },
    /**分页事件 */
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.settable();
    },
  },
  created() {},
  mounted() {
    /**一进页面调用 */
    this.settable();
    /**获取公司信息 */
    settitleGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.form.name = res.data.data.name;
        this.form.companyAddress = res.data.data.companyAddress;
        this.form.mailbox = res.data.data.mailbox;
        this.form.remarks = res.data.data.remarks;
      }
    });
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**全局 */
.setting-title {
  width: 1300px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
}
</style>
