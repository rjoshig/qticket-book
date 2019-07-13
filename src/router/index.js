import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
//import store from './../store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
});

// VueRouter.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     if (!store.state.isAuthenticated) {
//       next({
//         path: '/signin'
//       });
//       store.dispatch('userLoginDialogAction', true);
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
