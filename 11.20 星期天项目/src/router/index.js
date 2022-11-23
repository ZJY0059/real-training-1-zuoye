import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home', },

  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    // 主页面
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        // 首页页面
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: () => import('../views/listAdministration/userList.vue'),

        // 数据管理父页面
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/listAdministration/shopList.vue'),
        // 商品列表   
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/listAdministration/orderList.vue'),
        // 订单列表   
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../views/listAdministration/foodList.vue'),
        // 食品列表   
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('../views/listAdministration/adminList.vue'),
        // 管理员列表   
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import('../views/addlist/addShop.vue'),
        // 添加管理父页面
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: () => import('../views/addlist/addGoods.vue'),
        // 添加管理父页面
      },
      {
        path: '/Chart',
        name: 'Chart',
        component: () => import('../views/Chart/visitor.vue'),
        // 图表页面
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('../views/edit/vueEdit.vue'),
        // 编辑页面
      },
      {
        path: '/setup',
        name: 'setup',
        component: () => import('../views/setup/adminSet.vue'),
        // 设置页面
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/explain/explain.vue'),
        // 说明
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
