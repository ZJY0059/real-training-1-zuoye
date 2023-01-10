import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{ path: "/", redirect: "/login" }, //重定向
	{
		path: "/Login",
		name: "login",
		component: () => import("../views/Login.vue"),
		/**登录页面 */
	},
	{
		path: "/Index",
		name: "index",
		component: () => import("../views/Index.vue"),
		/**总入口 */
		children: [
			{
				path: "/dashboard",
				name: "dashboard",
				component: () => import("../views/dashboard/dashboard.vue"),
				/**首页 */
			},
			{
				path: "/employees",
				name: "employees",
				component: () => import("../views/employees/employees.vue"),
				/**员工 */
			},
			{
				path: "/setting",
				name: "setting",
				component: () => import("../views/setting/setting.vue"),
				/**设置 */
			},
			{
				path: "/permission",
				name: "permission",
				component: () => import("../views/permission/permission.vue"),
				/**权限管理 */
			},
			{
				path: "/social_securitys",
				name: "social_securitys",
				component: () =>
					import("../views/social_securitys/social_securitys.vue"),
				/**社保 */
			},
			{
				path: "/approvals",
				name: "approvals",
				component: () => import("../views/approvals/approvals.vue"),
				/**审批 */
			},
			{
				path: "/attendances",
				name: "attendances",
				component: () => import("../views/attendances/attendances.vue"),
				/**考勤 */
			},
			{
				path: "/salarys",
				name: "salarys",
				component: () => import("../views/salarys/salarys.vue"),
				/**工资 */
			},
			{
				path: "/departments",
				name: "departments",
				component: () => import("../views/departments/departments.vue"),
				/**组织架构 */
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
