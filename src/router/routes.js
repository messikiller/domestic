module.exports = [
  { path: '/login', name: 'authLogin', component: () => import('~/Login.vue'), meta: { requireAuth: 'F' } },
  {
    path: '/',
    component: () => import('~/Admin.vue'),
    children: [
      { path: '/', name: 'index', component: () => import('~/Login.vue') }
    ]
  }
]
