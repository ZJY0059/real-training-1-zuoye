import Vue from 'vue'
import Vuex from 'vuex'
/**引入员工vuex模块 */
import employees from './modules/employees'
/**引入公司设置vuex模块 */
import setting from './modules/setting'
/**引入权限管理vuex模块 */
import permission from './modules/permission'
/**引入社保vuex模块 */
import social_securitys from './modules/social_securitys'
/**引入审批vuex模块 */
import approvals from './modules/approvals'
/**引入考勤vuex模块 */
import attendances from './modules/attendances'
/**引入工资vuex模块 */
import salarys from './modules/salarys'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true, //解决命名冲突
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    employees, //员工模块
    setting, //公司设置模块
    permission, //权限管理模块
    social_securitys, //社保模块
    approvals, //审批模块
    attendances, //考勤模块
    salarys //工资模块
  }
})
