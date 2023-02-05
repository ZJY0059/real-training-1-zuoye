/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的公司设置内容接口 */
import {
  setGet,
  settitleGet,
  delroleDelete,
  addrolePost,
  editrolePut,
	apportionroleGet,
	getUserRole
} from '../../untils/api/setting'
/**引入属性控件 */
import { toTree } from '../../untils/tree'
export default {
  namespaced: true, //解决命名冲突
  state: {
    /**分页数据 */
    pagination: {
      page: 1, //第一页数据
      size: 10, //一页十条数据
      total: 0
    },
    /**表格数据 */
    tableData: [],
    /**表单的内容展示 */
    form: {
      name: '',
      companyAddress: '',
      mailbox: '',
      remarks: ''
    },
		roleList: [],
		permIds:[]
  },
  getters: {},
  mutations: {
    setGets(state, obj) {
      // console.log(obj)
      state.tableData = obj.val
      state.pagination.total = obj.vals
    },
    settitleGets(state, obj) {
      // console.log(obj)
      state.form.name = obj.name
      state.form.companyAddress = obj.companyAddress
      state.form.mailbox = obj.mailbox
      state.form.remarks = obj.remarks
    }
  },
  actions: {
    /**请求公司设置表格的 */
    setGet({ state, commit }, val = 1) {
      state.pagination.page = val
      setGet(state.pagination).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('setGets', {
            val: res.data.data.rows,
            vals: res.data.data.total
          })
        }
      })
    },
    settitleGet({ state, commit }) {
      settitleGet().then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('settitleGets', res.data.data)
        }
      })
    },
    /**删除请求 */
    delroleDeletes({ state, commit }, id) {
      delroleDelete(id).then((res) => {})
    },
    /**添加请求 */
    addrolePosts({ state, commit }, val) {
      addrolePost(val).then((res) => {})
    },
    /**编辑确定按钮 */
    editrolePuts({ state, commit }, val) {
      editrolePut(val).then((res) => {})
    },
		/**树形控件 */
		apportionroleGets({state,commit}){
			apportionroleGet().then(res=>{
				  if (res.status == STATUS.SUCCESS) {
        state.roleList = toTree(res.data.data)
      }
			})
		},
		/**回填树形控件 */
		// getUserRoles({state,commit},val){
		// 	getUserRole(val).then(res=>{
		// 		console.log(res);
    //     this.$refs.tree.setCheckedKeys(this.$store.state.setting.permIds)
		// 	})
		// }
  }
}
