import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**引入element-plus */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/*** 解决Violation] Added non-passive event listener to a scroll-blocking 'touchstart问题 */
import 'default-passive-events'

/**引入pinia */
import { createPinia } from 'pinia'
createApp(App).use(store).use(router).use(createPinia()).use(ElementPlus).mount('#app')
