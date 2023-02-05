/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的权限管理内容接口 */
import { authorityGet, authorityDelDelete,authorityAddPost,authorityEditGet } from '../../untils/api/permission'

export default {
  namespaced: true, //解决命名冲突
  state: {
    /**表格数据 */
    tableData: []
  },
  getters: {},
  mutations: {
    authorityGets(state, obj) {
      state.tableData = obj
      const treeList = []
      const map = {}
      obj.forEach((item) => {
        if (!item.children) {
          item.children = []
        }
        map[item.id] = item
      })
      obj.forEach((item) => {
        const parent = map[item.pid]
        if (parent) {
          parent.children.push(item)
        } else {
          treeList.push(item)
        }
        state.tableData = treeList
      })
    }
  },
  actions: {
    /**请求权限管理表格的 */
    authorityGet({ state, commit }) {
      authorityGet().then((res) => {
        // console.log(res)
        if (res.status == STATUS.SUCCESS) {
          commit('authorityGets', res.data.data)
        }
      })
    },
    /**删除的请求 */
    authorityDelDeletes({ state, commit }, val) {
      authorityDelDelete(val).then((res) => {})
    },
		/**添加的请求 */
		authorityAddPosts({state,commit},val){
			console.log(val);
			authorityAddPost(val).then(res=>{
				console.log(res);
			})
		},
		/**子的添加的请求 */
		authorityAddPostzi({state,commit},val){
			// console.log(val);
			authorityAddPost(val).then(res=>{
				// console.log(res);
			})
		},
		/**编辑按钮 */
		authorityEditGets({state,commit},val){
			authorityEditGet(val).then(res=>{
				// console.log(res);
			})
		}
  }
}
