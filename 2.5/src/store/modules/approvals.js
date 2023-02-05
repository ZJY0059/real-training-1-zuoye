/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的审批内容接口 */
import { approvetablePut } from '../../untils/api/approvals'
export default {
  namespaced: true, //开启命名空间
  state: {
    /**分页内容 */
    pages: {
      page: 1,
      pageSize: 10,
      total: 0,
      year: 2018
    },
    /**表格数组 */
    tableData: []
  },
  getters: {},
  mutations: {
    approvetablePuts(state, obj) {
      //  console.log(obj);
      state.tableData = obj.val
      state.pages.total = obj.vals
    }
  },
  actions: {
		/**请求审批表格接口 */
    approvetablePuts({ state, commit }, val) {
      state.pages.page = val
      approvetablePut(state.pages).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('approvetablePuts', {
            val: res.data.data.rows,
            vals: res.data.data.total
          })
        }
      })
    }
  }
}
