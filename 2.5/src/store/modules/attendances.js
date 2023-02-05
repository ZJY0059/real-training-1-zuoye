/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的考勤内容接口 */
import { checkingtableGet } from '../../untils/api/attendances'
export default {
  namespaced: true, //开启命名空间
  state: {
    /**分页数据 */
    pages: {
      page: 1,
      pageSize: 10,
      total: 0
    },
    /**表格数组 */
    tableData: []
  },
  getters: {},
  mutations: {
    checkingtableGets(state, obj) {
			// console.log(obj);
      state.tableData = obj.val
      state.pages.total = obj.vals
    }
  },
  actions: {
		/**请求考勤表格内容 */
    checkingtableGets({ state, commit },val=1) {
			state.pages.page=val
      checkingtableGet(state.pages).then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('checkingtableGets', {
            val: res.data.data.data.rows,
            vals: res.data.data.data.total
          })
        }
      })
    }
  }
}
