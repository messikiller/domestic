import Vue from 'vue'
import Router from 'vue-router'
import utils from '@/utils'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: require('./routes')
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth || 'T'
  if (process.env.VUE_APP_ENABLE_AUTH === 'T' && requireAuth === 'T' && !utils.auth.getToken()) {
    next({ name: 'authLogin' })
  }
  next()
})

export default router
