import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/axios'
import request from '@/request'
import utils from '@/utils'
import iView from 'iview'

import '*/iview-theme.less'
import '*/main.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = request
Vue.prototype.$utils = utils

Vue.use(iView)

if (process.env.VUE_APP_ENABLE_MOCK === 'T') {
  require('@/mock')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
