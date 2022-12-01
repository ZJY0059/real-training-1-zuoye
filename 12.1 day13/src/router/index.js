import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
//  {url:'/',redirect: '/school',},
  {
    path: '/school',
    name: 'school',
    component: () => import( '../views/School.vue')
  },
  {
    path: '/schoolList',
    name: 'schoolList',
    component: () => import( '../views/SchoolList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
