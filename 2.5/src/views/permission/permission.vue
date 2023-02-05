<template>
  <div>
    <!-- 头部 -->
    <div class="permission-top">
      <p></p>
      <p>
        <el-button
          type="primary"
          size="small"
          style="margin-right: 20px"
          @click="Addauthority"
          >添加权限</el-button
        >
      </p>
    </div>
    <!-- 内容部分 -->
    <div class="permission-table">
      <el-table
        :data="$store.state.permission.tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="名称" width="350" align="center">
        </el-table-column>
        <el-table-column prop="code" label="标识" width="340" align="center">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="300"
          align="center"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="authorityAdd(scope.row.id)"
              >添加</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="authorityEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="authorityDel(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <dialogs
      ref="jurisdiction"
      :title="title"
      :editid="editid"
      :ids="ids"
    ></dialogs>
  </div>
</template>

<script>
import dialogs from '../permission/dialogs.vue'
import store from '@/store'
export default {
  data() {
    return {
      /**添加和编辑的模态框的绑定 */
      dialogVisible: false,
      /**模态框标题的动态显示 */
      title: '新增权限点',
      /**判断是添加还是编辑 */
      editid: 0,
      /**子的id */
      ids: 0
    }
  },
  methods: {
    /**添加权限 */
    Addauthority() {
      this.$refs.jurisdiction.info()
      this.editid = -1
      this.title = '新增权限点'
    },
    /**删除按钮 */
    authorityDel(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          store.dispatch('permission/authorityDelDeletes', id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          store.dispatch('permission/authorityGet')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    /**编辑按钮 */
    authorityEdit(row) {
      this.$refs.jurisdiction.infos(row)
      this.editid = row.id
      this.title = '编辑权限点'
    },
    /**子的添加权限 */
    authorityAdd(id) {
      this.$refs.jurisdiction.info()
      this.ids = id
      this.editid = -2
      this.dialogVisible = true
      this.title = '新增权限点'
    }
  },
  created() {},
  mounted() {
    store.dispatch('permission/authorityGet')
  },
  components: {
    dialogs
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部 */
.permission-top {
  width: 1460px;
  height: 60px;
  background: #fff;
  border: 1px solid #ebeef5;
  // margin: 20px;
  // margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/**表格内容 */
.permission-table {
  width: 1460px;
  background: #fff;
  border: 1px solid #ebeef5;
  // margin: 20px;
  margin-top: 10px;
}
</style>
