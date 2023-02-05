/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的工资接口 */
import { wagetableGet } from '../../untils/api/salarys'
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
		wagetableGets(state,obj){
			state.tableData=obj.val
			state.pages.total=obj.vals
		}
	},
  actions: {
		/**请求工资表格 */
    wagetableGets({ state, commit },val=1) {
			state.pages.page=val
      wagetableGet(state.pages).then((res) => {
        // console.log(res)
				if (res.status == STATUS.SUCCESS) {
          commit('wagetableGets', {
            val: res.data.data.rows,
            vals: res.data.data.total
          })
        }
      })
    }
  }
}
