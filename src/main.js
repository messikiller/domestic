import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/axios'
import iView from 'iview'

import '*/iview-theme.less'
import '*/main.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(iView)

if (process.env.ENBABLE_MOCK) {
  require('@/mock')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
