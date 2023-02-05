<template>
  <div>
    <!-- 新增角色模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form1" :model="form1" label-width="80px" :rules="rules">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form1.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form1')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="dialogFormVisible2">
      <el-tree
        :data="$store.state.setting.roleList"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        ref="tree"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="editAssign">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/**引入属性控件 */
// import { toTree } from '../../untils/tree'
import store from '@/store'
/**引入封装的首页内容接口 */
import { getAssignPrem,getUserRole} from '../../untils/api/setting'
export default {
  props: ['title', 'editid', 'assignId'],
  // title:弹框动态展示
  // editid:控制是否是添加还是编辑
  data() {
    return {
      /**新增角色模态框 */
      dialogVisible: false,
      /**新增角色表单 */
      form1: {
        name: '',
        description: ''
      },
      /**新增角色表单验证 */
      rules: {
        name: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
      },
      dialogFormVisible2: false,

      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    info(val) {
      if (val) {
        this.form1.name = val.name
        this.form1.description = val.description
      }
      this.dialogVisible = true
    },
    infos(id) {
			getUserRole(id).then(res=>{
				// console.log(res);
        this.$refs.tree.setCheckedKeys(res.data.data.permIds)
			})
      this.dialogFormVisible2 = true
    },
    /**新增编辑角色确定对话框 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.editid == -1) {
            store.dispatch('setting/addrolePosts', this.form1)
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            this.dialogVisible = false
            this.form1 = {
              name: '',
              description: ''
            }
          } else {
            store.dispatch('setting/editrolePuts', {
              id: this.editid,
              description: this.form1.description,
              name: this.form1.name
            })
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            store.dispatch('setting/setGet')
            this.dialogVisible = false
            this.form1 = {
              name: '',
              description: ''
            }
          }
        } else {
          return false
        }
      })
    },
    /**分配权限确定按钮 */
    editAssign() {
      getAssignPrem({
        id: this.assignId,
        permIds: this.$refs.tree.getCheckedKeys()
      }).then((res) => {
        // console.log(res)
        this.$message({
          message: '分配权限成功',
          type: 'success'
        })
        this.dialogFormVisible2 = false
      })
    }
  },
  created() {},
  mounted() {
    store.dispatch('setting/apportionroleGets')
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>
