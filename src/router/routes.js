export default [
  { path: '/login', name: 'authLogin', component: () => import('~/auth/Login.vue'), meta: { requireAuth: 'F' } },
  {
    path: '/',
    component: () => import('~/layouts/Admin.vue'),
    children: [
      { path: '/', name: 'index', component: () => import('~/index/Home.vue') },
      { path: '/customer/add', name: 'customerAdd', component: () => import('~/customer/Add.vue') },
      { path: '/customer/list', name: 'customerList', component: () => import('~/customer/List.vue') },
      { path: '/user/me', name: 'userMe', component: () => import('~/user/Me.vue') }
    ]
  }
]
