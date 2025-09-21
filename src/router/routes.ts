import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'Dashboard',
          subtitle: 'Controle e monitoramento da produção.',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    meta: { title: 'Login' },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
