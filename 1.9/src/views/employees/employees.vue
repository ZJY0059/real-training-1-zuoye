<template>
  <div>
    <div class="employees-box">
      <div></div>
      <div>
        <el-button type="primary" :style="color1()">导入</el-button>
        <el-button type="primary" :style="color1()" :icon="Plus"
          >新增员工</el-button
        >
      </div>
    </div>

    <div class="employees-table">
      <el-table
        :data="staffList.staffList"
        border
        style="width: 95%; margin: 20px 0 20px 20px"
      >
        <el-table-column type="index" label="序号" width="120" />
        <el-table-column prop="username" label="姓名" width="150" sortable />
        <el-table-column prop="mobile" label="手机号" width="180" sortable />
        <el-table-column prop="workNumber" label="工号" width="130" sortable />
        <el-table-column
          prop="enableState"
          label="聘用形势"
          width="130"
          sortable
        />
        <el-table-column
          prop="departmentName"
          label="部门"
          width="130"
          sortable
        />
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          width="180"
          sortable
        >
          <template #default="scope">
            {{ scope.row.timeOfEntry.slice(0, 10) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="inServiceStatus"
          label="是否在职"
          width="130"
          sortable
        >
          <template #default="scope">
            <span v-if="scope.row.inServiceStatus == null">离职</span>
            <span v-if="scope.row.inServiceStatus == 1">在职</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="inServiceStatus"
          label="状态"
          width="130"
          sortable
        >
          <template #default="scope">
            <span v-if="scope.row.inServiceStatus == null">离职</span>
            <span v-if="scope.row.inServiceStatus == 1">可用</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="270" align="center">
          <template #default>
            <el-button link type="primary" size="small" :style="color2()"
              >查看</el-button
            >
            <el-button link type="primary" size="small" :style="color2()"
              >转正</el-button
            >
            <el-button link type="primary" size="small" :style="color2()"
              >调岗</el-button
            >
            <el-button link type="primary" size="small" :style="color2()"
              >离职</el-button
            >
            <el-button link type="primary" size="small" :style="color2()"
              >角色</el-button
            >
            <el-button link type="primary" size="small" :style="color2()"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div style="display: flex; justify-content: space-between">
        <p></p>
        <el-pagination
          :current-page="pagination.page"
          :page-size="pagination.size"
          :small="false"
          :disabled="false"
          layout="total, prev, pager, next"
          :total="data.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="margin: 20px 20px 30px 0; float: right"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
/**引入封装的员工接口 */
import { staffGet } from '../../untils/api/api'
/**引入封装得状态码 */
import { STATUS } from '../../untils/api/Status'
/**e引入lement图标 */
import { Plus } from '@element-plus/icons-vue'
/**引入pinia */
import { piniaIndex } from '../../pinia/index,'
let color = piniaIndex.color
const color1 = () => {
  let str = {
    margin: '15px 30px 20px 0',
    background: color
  }
  return str
}
const color2 = () => {
  let str = {
    color: color
  }
  return str
}
/**公共数据 */
const data = reactive({
  total: 0
})
/**请求员工表格第一页请求10条数据 */
const pagination = reactive({
  page: 1,
  size: 10
})
/**请求员工表格内容 */
let staffList = reactive({
  staffList: []
})
staffGet(pagination).then((res) => {
  // console.log(res)
  if (res.status == STATUS.SUCCESS) {
    staffList.staffList = res.data.data.rows
    data.total = res.data.data.total
  }
})

/**分页 */
const handleSizeChange = (val: number) => {
  pagination.size = val
  staffGet(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      staffList.staffList = res.data.data.rows
      data.total = res.data.data.total
    }
  })
}
const handleCurrentChange = (val: number) => {
  pagination.page = val
  staffGet(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      staffList.staffList = res.data.data.rows
      data.total = res.data.data.total
    }
  })
}
</script>

<style lang="scss" scoped>
// 头部
.employees-box {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 15px 0 0 15px;
  width: 1310px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.employees-table {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 15px 0 0 15px;
  width: 1310px;
}
</style>
