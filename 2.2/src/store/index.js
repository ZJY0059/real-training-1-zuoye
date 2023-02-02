import Vue from 'vue'
import Vuex from 'vuex'
import employees from '../modules/employees'
import setting from '../modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true, //解决命名冲突
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    employees,
		setting
  }
})
