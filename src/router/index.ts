import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { useUserStore } from 'src/stores/useUserStore';

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, __, next) => {
    const userStore = useUserStore();

    if (to.path !== '/login' && !userStore.isAuthenticated) {
      next('/login');
    } else if (to.path === '/login' && userStore.isAuthenticated) {
      next('/');
    } else {
      next();
    }
  });
  return Router;
});
