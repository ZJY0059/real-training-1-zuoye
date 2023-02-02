<template>
  <div>
    <div class="setting-title">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="角色管理" name="first">
          <el-button type="primary" size="small">新增角色</el-button>
          <!-- 表格 -->
          <el-table
            :data="$store.state.setting.tableData"
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
              @current-change="handleCurrentChange"
              :current-page="$store.state.setting.pagination.page"
              :page-size="$store.state.setting.pagination.size"
              layout="prev, pager, next"
              :total="$store.state.setting.pagination.total"
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
                v-model="$store.state.setting.form.name"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                v-model="$store.state.setting.form.companyAddress"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input
                v-model="$store.state.setting.form.mailbox"
                :disabled="true"
                style="width: 350px"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="$store.state.setting.form.remarks"
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
import store from '@/store'
export default {
  data() {
    return {
      /**tab栏切换 */
      activeName: 'first'
    }
  },
  methods: {
		handleCurrentChange(val) {
			// console.log(val);
      this.$store.dispatch('setting/setGet', val)
    },
	},
  created() {},
  mounted() {
    store.dispatch('setting/setGet')
		store.dispatch('setting/settitleGet')
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**全局 */
.setting-title {
  width: 1480px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
}
</style>
