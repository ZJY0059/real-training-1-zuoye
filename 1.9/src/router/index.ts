import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  // 路由的重定向
  {
    /**登录页面 */
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    /**总入口 */
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    children: [
      {
        /**首页 */
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/dashboard.vue')
      },
      {
        /**组织架构 */
        path: '/departments',
        name: 'departments',
        component: () => import('../views/departments/index.vue')
      },
      {
        /**员工 */
        path: '/employees',
        name: 'employees',
        component: () => import('../views/employees/employees.vue')
      },
      {
        /**公司设置 */
        path: '/settings',
        name: 'settings',
        component: () => import('../views/settings/settings.vue')
      },
      {
        /**权限设置 */
        path: '/permissions',
        name: 'permissions',
        component: () => import('../views/permissions/index.vue')
      },
      {
        /**社保 */
        path: '/social-securitys',
        name: 'social-securitys',
        component: () => import('../views/social-securitys/index.vue')
      },
      {
        /**考勤 */
        path: '/attendances',
        name: 'attendances',
        component: () => import('../views/attendances/index.vue')
      },
      {
        /**工资 */
        path: '/salarys',
        name: 'salarys',
        component: () => import('../views/salarys/index.vue')
      },
      {
        /**审批 */
        path: '/approvals',
        name: 'approvals',
        component: () => import('../views/approvals/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
