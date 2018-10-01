module.exports = [
  { path: '/login', name: 'authLogin', component: () => import('~/Login.vue'), meta: { requireAuth: 'F' } },
  {
    path: '/',
    component: () => import('~/layouts/Admin.vue'),
    children: [
      { path: '/index', name: 'index', component: () => { import('~/Login.vue') } }
    ]
  }
]
