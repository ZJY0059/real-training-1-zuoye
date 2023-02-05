<template>
  <div>
    <!-- 头部 -->
    <div class="salarys-top">
      <div class="salarys-top-title">
        <el-alert
          title="本月0：入职 0 离职 0 调薪 0 未定薪 0"
          type="info"
          style="
            width: 300px;
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
          <el-button
            type="danger"
            size="small"
            @click="$router.push('/settings')"
            >设置</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="$router.push('/Wagreport')"
            >报表</el-button
          >
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <div class="salarys-text">
      <div class="salarys-text-department">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="聘用形式：  " style="width: 300px">
            <el-checkbox-group v-model="form.type1">
              <el-checkbox label="正式" name="正式" />
              <el-checkbox label="非正式" name="非正式" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="员工状态：  " style="width: 300px">
            <el-checkbox-group v-model="form.type2">
              <el-checkbox label="在职" name="在职" />
              <el-checkbox label="离职" name="离职" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="部门：">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                v-for="(item, index) in department"
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
    <div class="salarys-table">
      <!-- 表格 -->
      <el-table
        :data="$store.state.salarys.tableData"
        style="width: 97%; margin: 20px 0 20px 20px"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="120">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="120">
        </el-table-column>
        <el-table-column prop="inServiceStatus" label="聘用形式" width="120">
          <template #default="scope">
            {{ scope.row.inServiceStatus == 1 ? '正式' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" width="120" />
        <el-table-column prop="timeOfEntry" label="入职时间" width="180">
          <template #default="scope">
            {{ scope.row.timeOfEntry.slice(0, 10) }}
          </template>
        </el-table-column>
        <el-table-column prop="currentPostWage" label="工资基金" width="120">
          <template #default="scope">
            {{ scope.row.currentPostWage * 2 }}
          </template>
        </el-table-column>
        <el-table-column prop="currentPostWage" label="津贴方案" width="120">
          通用方案
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              v-if="scope.row.currentPostWage == null"
              @click="SalaryStatus = !SalaryStatus"
              >定薪</el-button
            >
            <el-button
              size="small"
              type="primary"
              v-if="scope.row.currentPostWage > 0"
              @click="changeSalary(scope.row.id)"
              >调薪</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="
                $router.push({
                  name: 'Seesalary',
                  params: { id: scope.row.id }
                })
              "
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex; justify-content: space-between">
        <p></p>
        <!-- 分页 -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="$store.state.salarys.pages.page"
          :page-size="$store.state.salarys.pages.pageSize"
          layout="prev, pager, next"
          :total="$store.state.salarys.pages.total"
          style="margin-bottom: 20px"
          background
        >
        </el-pagination>
        <p></p>
      </div>
    </div>

    <!-- 定薪弹出框 -->
    <SalaryFixing v-if="SalaryStatus"></SalaryFixing>
    <!-- 调薪弹出框 -->
    <div class="changeSalary">
      <el-dialog title="调薪" :visible.sync="dialogVisible" width="40%">
        <div class="dialog">
          <!-- 头部 -->
          <div class="top">
            <div class="left">
              <!-- <img src="@/assets/Apple.png" alt="" /> -->
            </div>
            <div class="right">
              <div>
                <span>部门：</span>
                <span></span>
              </div>
              <div>
                <span>入职时间：</span>
                <span>NaN-aN-aN</span>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <div class="foot">
            <el-form ref="form" :model="Salary" label-width="100px">
              <el-form-item label="调整基本工资">
                <div class="form">
                  <el-input
                    v-model="Salary.currentBasicSalary"
                    disabled
                  ></el-input>
                  <span>-></span>
                  <el-input placeholder="请输入调整后的基本工资"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="调整岗位工资">
                <div class="form">
                  <el-input
                    v-model="Salary.currentPostWage"
                    disabled
                  ></el-input>
                  <span>-></span>
                  <el-input placeholder="请输入调整后的岗位工资"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="工资合计">
                <div class="form">
                  <el-input
                    v-model="Salary.currentBasicSalary"
                    disabled
                  ></el-input>
                  <span>-></span>
                  <el-input disabled placeholder="0"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="调整幅度">
                <div class="form">
                  <el-input v-model="Salary.currentPostWage" disabled
                    >-</el-input
                  >
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogVisible = false"
            >关 闭</el-button
          >
          <el-button size="mini" type="primary" @click="dialogVisible = false"
            >保 存</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的工资内容接口 */
import { wagedepartmentGet, wagedateGet } from '@/untils/api/salarys'
import SalaryFixing from '../salarys/SalaryFixing.vue'
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
      /**社保日期 */
      date: '',
      //弹框
      dialogVisible: false,
      Salary: {},
      SalaryStatus: false,
      changeStatus: false
    }
  },
  methods: {
    /**分页 */
    handleCurrentChange(val) {
      this.$store.dispatch('salarys/wagetableGets', val)
    },
    // 调薪
    changeSalary(id) {
      console.log(id)
      this.dialogVisible = true
      getchangeSalary(id).then((res) => {
        console.log(res)
        this.Salary = res.data.data
      })
    }
  },
  created() {},
  mounted() {
    this.$store.dispatch('salarys/wagetableGets')
    /**请求部门信息 */
    wagedepartmentGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.department = res.data.data.depts
      }
    })
    /**请求报表日期信息 */
    wagedateGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.date = res.data.data.dataMonth
      }
    })
  },
  components: { SalaryFixing },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部 */
.salarys-top {
  width: 1460px;
  height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  .salarys-top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/**中间内容 */
.salarys-text {
  width: 1460px;
  // height: 600px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  .salarys-text-department {
    margin-top: 30px;
    margin-left: 10px;
    width: 1300px;
  }
}
/**表格 */
.salarys-table {
  width: 1460px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin-top: 20px;
}
</style>
