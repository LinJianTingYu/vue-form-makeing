import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueEditor from 'vue2-editor'

import 'element-ui/lib/theme-chalk/index.css'
import fmConfig from './lang/zh-CN.js'
Vue.use(VueEditor)

Vue.use(ElementUI, { size: 'small' })

import FormMaking from './index'
Vue.use(FormMaking)

Vue.config.productionTip = false
Vue.prototype.fm = fmConfig.fm

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
