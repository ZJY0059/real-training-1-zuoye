/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的社保内容接口 */
import { securitytablePost } from '../../untils/api/social_securitys'
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
    securitytablePosts(state, obj) {
      // console.log(obj);
      state.tableData = obj.val
      state.pages.total = obj.vals
    }
  },
  actions: {
    /**请求社保表格数据 */
    securitytablePosts({ state, commit }, val = 1) {
      // console.log(val)
      state.pages.page = val
      securitytablePost(state.pages).then((res) => {
        if (res.status == STATUS.SUCCESS) {
          commit('securitytablePosts', {
            val: res.data.data.rows,
            vals: res.data.data.total
          })
        }
      })
    }
  }
}
