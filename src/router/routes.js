const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('pages/LoginPage.vue')
  },

  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('pages/RegisterPage.vue')
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
