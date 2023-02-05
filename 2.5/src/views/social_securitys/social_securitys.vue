<template>
  <div>
    <!-- 头部 -->
    <div class="social_securitys-top">
      <div class="social_securitys-top-title">
        <el-alert
          title="本月：社保在缴 公积金在缴 增员 减员 入职 离职"
          type="info"
          style="
            width: 360px;
            height: 40px;
            background: #e6f7ff;
            border: 1px solid #91d5ff;
            margin-top: 10px;
            color: #000;
            margin-left: 20px;
          "
          show-icon
          :closable="false"
        >
        </el-alert>
        <div style="margin: 20px 20px 0 0">
          <el-button
            type="danger"
            size="small"
            @click="$router.push('/Sechistory')"
            >历史归档</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="$router.push('/SecMonreport')"
            >202003报表</el-button
          >
        </div>
      </div>
    </div>

    <!-- 中间内容 -->
    <div class="social_securitys-text">
      <div class="social_securitys-text-department">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                v-for="(item, index) in department"
                :key="index"
                :label="item.name"
                :name="item.id"
								v-model="item.checked"
                @change="fliter(item, index)"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="社保城市：">
            <el-checkbox-group v-model="form.type1">
              <el-checkbox
                v-for="(item, index) in city"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="公积金城市：">
            <el-checkbox-group v-model="form.type2">
              <el-checkbox
                v-for="(item, index) in city1"
                :key="index"
                :label="item.name"
                :name="item.id"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 表格内容 -->
    <div class="social_securitys-table">
      <el-table
        :data="$store.state.social_securitys.tableData"
        style="width: 97%; margin: 20px 0 20px 20px"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable width="80">
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="120">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="120">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          sortable
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          sortable
          width="130"
        >
        </el-table-column>
        <el-table-column prop="leaveTime" label="离职时间" sortable width="110">
        </el-table-column>
        <el-table-column
          prop="participatingInTheCity"
          label="社保城市"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="providentFundCity"
          label="公积金城市"
          width="110"
        >
        </el-table-column>
        <el-table-column prop="socialSecurityBase" label="社保基数" width="110">
        </el-table-column>
        <el-table-column
          prop="providentFundBase"
          label="公积金基数"
          width="110"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="
                $router.push({
                  name: 'Secdetail',
                  params: { id: scope.row.id }
                })
              "
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex; justify-content: space-between">
        <p></p>
        <!-- 分页 -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="$store.state.social_securitys.pages.page"
          :page-size="$store.state.social_securitys.pages.pageSize"
          layout="prev, pager, next"
          :total="$store.state.social_securitys.pages.total"
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
import { STATUS } from '../../untils/Status'
/**引入封装的社保内容接口 */
import {
  securitydepartmentGet,
  securitycityGet
} from '../../untils/api/social_securitys'
import store from '@/store'
export default {
  data() {
    return {
      /**部分选择 */
      form: {
        type: [],
        type1: [],
        type2: []
      },
      /**部门 */
      department: [],
      /**社保城市 */
      city: [],
      /**公积金城市 */
      city1: [],
      /**社保日期 */
      date: '',
			_tableData: [],
      checked: false
    }
  },
  methods: {
    /**分页事件 */
    handleCurrentChange(val) {
      this.$store.dispatch('social_securitys/securitytablePosts', val)
    },
    // 过滤筛选
    fliter(val, index) {
      this.department[index].checked = !this.department[index].checked
      if (val.checked == true) {
        this.$store.state.social_securitys.tableData = this.$store.state.social_securitys.tableData.filter(
          (ele) => ele.departmentName == val.name
        )
      } else {
        this.$store.state.social_securitys.tableData = this._tableData
      }
    }
  },
  created() {},
  mounted() {
    this.$store.dispatch('social_securitys/securitytablePosts')
    /**请求部门信息 */
    securitydepartmentGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.department = res.data.data.depts
      }
    })
    /**请求城市信息 */
    securitycityGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.city = res.data.data
        this.city1 = res.data.data
      }
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部 */
.social_securitys-top {
  width: 1460px;
  height: 80px;
  background: #fff;
  border: 1px solid #ebeef5;
  .social_securitys-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/**中间内容 */
.social_securitys-text {
  width: 1460px;
  // height: 600px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  .social_securitys-text-department {
    margin-top: 30px;
    margin-left: 10px;
    width: 1300px;
  }
}
/**表格 */
.social_securitys-table {
  width: 1460px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
}
</style>
