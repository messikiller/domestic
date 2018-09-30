import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('~/Login.vue')
    },
    {
      path: '/',
      component: () => import('~/layouts/Admin.vue'),
      children: [
        { path: '/index', name: 'index', component: () => { import('~/Login.vue') } }
      ]
    }
  ]
})
