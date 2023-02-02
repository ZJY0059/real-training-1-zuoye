/**引入状态码 */
import { STATUS } from '../untils/Status'
/**引入封装的员工接口 */
import { staffGet, getRole } from '../untils/api/employees'
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
    tableData: []
  },
  getters: {},
  mutations: {
    staffGets(state, obj) {
      // console.log(obj)
      state.tableData = obj.val
      state.pagination.total = obj.vals
    }
  },
  actions: {
    /**请求表格的 */
    staffGet({ state, commit },val=1) {
			// console.log(val,1);
			state.pagination.page=val
      staffGet(state.pagination).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('staffGets', {
            val: res.data.data.rows,
            vals: res.data.data.total
          })
        }
      })
    },
    getRole() {
      getRole().then((res) => {
        // console.log(res)
      })
    }
  }
}
