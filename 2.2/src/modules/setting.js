/**引入状态码 */
import { STATUS } from '../untils/Status'
/**引入封装的首页内容接口 */
import {
  setGet,
  settitleGet,
  addrolePost,
  delroleDelete,
  editrolePut,
  apportionroleGet,
  getUserRole,
  getAssignPrem
} from '../untils/api/setting'

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
    }
  },
  getters: {},
  mutations: {
    setGets(state, obj) {
      // console.log(obj)
      state.tableData = obj.val
      state.pagination.total = obj.vals
    },
    settitleGets(state, obj) {
      console.log(obj)
			state.form.name = obj.name;
			state.form.companyAddress = obj.companyAddress;
			state.form.mailbox = obj.mailbox;
			state.form.remarks = obj.remarks;
    }
  },
  actions: {
    /**请求表格的 */
    setGet({ state, commit },val=1) {
			state.pagination.page=val
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
        console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('settitleGets',res.data.data)
        }
      })
    }
  }
}
