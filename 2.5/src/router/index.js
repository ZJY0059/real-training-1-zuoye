import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /**重定向 */
  { path: '/', redirect: '/Login' },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
    /**登录页面 */
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    /**全局页面 */
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
        /**首页 */
      },
      {
        path: '/departments',
        name: 'departments',
        component: () => import('../views/departments/departments.vue')
        /**组织架构 */
      },
      {
        path: '/employees',
        name: 'employees',
        component: () => import('../views/employees/employees.vue')
        /**员工 */
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/setting/setting.vue')
        /**设置 */
      },
      {
        path: '/permission',
        name: 'permission',
        component: () => import('../views/permission/permission.vue')
        /**权限管理 */
      },
      {
        path: '/social_securitys',
        name: 'social_securitys',
        component: () =>
          import('../views/social_securitys/social_securitys.vue')
        /**社保 */
      },
      {
        path: '/approvals',
        name: 'approvals',
        component: () => import('../views/approvals/approvals.vue')
        /**审批 */
      },
      {
        path: '/attendances',
        name: 'attendances',
        component: () => import('../views/attendances/attendances.vue')
        /**考勤 */
      },
      {
        path: '/salarys',
        name: 'salarys',
        component: () => import('../views/salarys/salarys.vue')
        /**工资 */
      },
      {
        path: '/Staffsee',
        name: 'Staffsee',
        component: () => import('../views/employees/Staffsee.vue')
        /**员工查看信息 */
      },
      {
        path: '/Secdetail',
        name: 'Secdetail',
        component: () => import('../views/social_securitys/Secdetail.vue')
        /**社保查看详情 */
      },
      {
        path: '/Sechistory',
        name: 'Sechistory',
        component: () => import('../views/social_securitys/Sechistory.vue')
        /**社保历史归档 */
      },
      {
        path: '/SecMonreport',
        name: 'SecMonreport',
        component: () => import('../views/social_securitys/SecMonreport.vue')
        /**社保月报表*/
      },
      {
        path: '/Appsee',
        name: 'Appsee',
        component: () => import('../views/approvals/Appsee.vue')
        /**审批查看*/
      },
      {
        path: '/SecuritySetting',
        name: 'SecuritySetting',
        component: () => import('../views/approvals/SecuritySetting.vue')
        /**审批流程设置*/
      },
      {
        path: '/Atrtreport',
        name: 'Atrtreport',
        component: () => import('../views/attendances/Atrtreport.vue')
        /**考勤的导入*/
      },
      {
        path: '/Atrtreports',
        name: 'Atrtreports',
        component: () => import('../views/attendances/Atrtreports.vue')
        /**考勤的报表*/
      },
      {
        path: '/Atthistory',
        name: 'Atthistory',
        component: () => import('../views/attendances/Atthistory.vue')
        /**考勤的历史归档*/
      },
      {
        path: '/Settings',
        name: 'Settings',
        component: () => import('../views/salarys/Settings.vue')
        /**工资设置*/
      },
      {
        path: '/Wagreport',
        name: 'Wagreport',
        component: () => import('../views/salarys/Wagreport.vue')
        /**工资报表*/
      },
      {
        path: '/Seesalary',
        name: 'Seesalary',
        component: () => import('../views/salarys/Seesalary.vue')
        /**工资查看*/
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
