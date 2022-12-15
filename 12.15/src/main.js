import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "../untils/httpRequest"
Vue.config.productionTip = false

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

/**富文本挂载到vue实例上 */
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

/**全局挂载v-charts */
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
