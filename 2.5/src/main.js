import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局导出excel
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
