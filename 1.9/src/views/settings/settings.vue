<template>
  <div class="departments-box">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="角色管理" name="first">
        <el-button type="primary" :style="color1()" :icon="Plus"
          >新增员工</el-button
        >
        <el-table
          :data="companyList.companyList"
          border
          style="width: 95%; margin: 20px 0 20px 20px"
        >
          <el-table-column type="index" label="序号" width="220" />
          <el-table-column prop="name" label="角色名" width="300" sortable />
          <el-table-column
            prop="description"
            label="描述"
            width="400"
            sortable
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="270"
            align="center"
          >
            <template #default>
              <el-button link type="primary" size="small" :style="color2()"
                >分配权限</el-button
              >
              <el-button link type="primary" size="small" :style="color2()"
                >修改</el-button
              >
              <el-button link type="primary" size="small" :style="color2()"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
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
      </el-tab-pane>
      <el-tab-pane label="公司信息" name="second">
        <el-form
          :model="form"
          label-width="120px"
          style="margin: 20px 0px 0px 65px"
        >
          <el-form-item label="企业名称">
            <el-input v-model="form.name" style="width: 350px" disabled/>
          </el-form-item>
          <el-form :model="form" label-width="120px">
            <el-form-item label="公司地址">
              <el-input v-model="form.companyAddress" style="width: 350px" disabled/>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-width="120px">
            <el-form-item label="公司电话">
              <el-input v-model="form.companyPhone" style="width: 350px" disabled/>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-width="120px">
            <el-form-item label="邮箱">
              <el-input v-model="form.mailbox" style="width: 350px" disabled/>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-width="120px">
            <el-form-item label="备注">
              <el-input v-model="form.remarks" style="width: 350px" disabled/>
            </el-form-item>
          </el-form>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
/**引入封装得状态码 */
import { STATUS } from '../../untils/api/Status'
/**引入封装的公司设置接口 */
import { companyGet, companytextGet } from '../../untils/api/api'
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
const activeName = ref('first')
/**公共数据 */
const data = reactive({
  total: 0, //总数量
  companyId: 0 //拿到当前表格id
})
/**请求公司设置表格第一页请求10条数据 */
const pagination = reactive({
  page: 1,
  size: 10
})
/**请求公司设置表格内容 */
let companyList = reactive({
  companyList: []
})
companyGet(pagination).then((res) => {
  // console.log(res)
  if (res.status == STATUS.SUCCESS) {
    companyList.companyList = res.data.data.rows
    data.total = res.data.data.total
    data.companyId = res.data.data.companyId
  }
})
/**拿到公司信息 */
const form = reactive({
  name: '',
  companyAddress: '',
  companyPhone: '',
  mailbox: '',
  remarks: ''
})
companytextGet(data.companyId).then((res) => {
  console.log(res)
  if (res.status == STATUS.SUCCESS) {
    form.name = res.data.data.name
    form.companyAddress = res.data.data.companyAddress
    form.companyPhone = res.data.data.companyPhone
    form.mailbox = res.data.data.mailbox
    form.remarks = res.data.data.remarks
  }
})
/**分页 */
const handleSizeChange = (val: number) => {
  pagination.size = val
  companyGet(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      companyList.companyList = res.data.data.rows
      data.total = res.data.data.total
      data.companyId = res.data.data.companyId
    }
  })
}
const handleCurrentChange = (val: number) => {
  pagination.page = val
  companyGet(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      companyList.companyList = res.data.data.rows
      data.total = res.data.data.total
      data.companyId = res.data.data.companyId
    }
  })
}
</script>

<style lang="scss" scoped>
// 全局
.departments-box {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px 0 0 10px;
  width: 1310px;
  // height: 850px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
  .custom-tree-container1 {
    width: 1000px;
    // height: 300px;
    margin-left: 120px;
    margin-top: 36px;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>

