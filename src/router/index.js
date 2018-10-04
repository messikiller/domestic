import Vue from 'vue'
import Router from 'vue-router'
import utils from '@/utils'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = (to.meta && to.meta.requireAuth) || 'T'
  if (process.env.VUE_APP_ENABLE_AUTH === 'T' && requireAuth === 'T' && !utils.auth.getToken()) {
    next({ name: 'authLogin' })
  }
  next()
})

export default router
