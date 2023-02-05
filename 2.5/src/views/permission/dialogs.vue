<template>
  <div>
    <!-- 新增编辑权限模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form1" :model="form1" label-width="80px" :rules="rules">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="form1.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="form1.description"></el-input>
        </el-form-item>
        <el-form-item label="开启">
          <el-switch v-model="form1.enVisible"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form1')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: ['title', 'editid', 'ids'],
  data() {
    return {
      /**添加编辑模态框表单 */
      form1: {
        name: '',
        code: '',
        description: '',
        enVisible: 0
      },
      /**新增角色表单验证 */
      rules: {
        name: [
          { required: true, message: '权限名称不能为空', trigger: 'blur' }
        ],
        code: [{ required: true, message: '权限标识不能为空', trigger: 'blur' }]
      },
      /**添加和编辑的模态框的绑定 */
      dialogVisible: false
    }
  },
  methods: {
    info(val) {
      this.dialogVisible = true
      this.form1 = {
        name: '',
        code: '',
        description: '',
        enVisible: 0
      }
    },
    /**编辑的 */
    infos(val) {
      this.dialogVisible = true
      this.form1.name = val.name
      this.form1.code = val.code
      this.form1.description = val.description
      this.form1.enVisible = val.enVisible
    },
    /**新增编辑角色确定对话框 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.editid == -1) {
            store.dispatch('permission/authorityAddPosts', {
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              type: 1
            })
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            this.dialogVisible = false
            store.dispatch('permission/authorityGet')
            this.form1 = {
              name: '',
              code: '',
              description: '',
              enVisible: 0
            }
          } else if (this.editid == -2) {
            store.dispatch('permission/authorityAddPostzi', {
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              pid: this.ids,
              type: 2
            })
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            store.dispatch('permission/authorityGet')
            this.dialogVisible = false
            this.form1 = {
              name: '',
              code: '',
              description: '',
              enVisible: 0
            }
          } else {
            store.dispatch('permission/authorityEditGets', {
              name: this.form1.name,
              code: this.form1.code,
              description: this.form1.description,
              id: this.editid
            })
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            store.dispatch('permission/authorityGet')

            this.dialogVisible = false
            this.form1 = {
              name: '',
              code: '',
              description: '',
              enVisible: 0
            }
          }
        } else {
          return false
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>
