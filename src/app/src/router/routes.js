
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Landing.vue') },
      { path: '/Register', component: () => import('pages/Register.vue') },
      { path: '/Recover', component: () => import('pages/Recover.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/Terms', component: () => import('pages/Terms.vue') },
      { path: '/Faq', component: () => import('pages/Faq.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
