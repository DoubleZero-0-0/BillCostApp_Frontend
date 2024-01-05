import LoginViewVue from '@/views/LoginView/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
  ]
})

// router.beforeEach((to, from, next) => {

//   const isAuthenticated = localStorage.getItem('token');


//   if (to.path === '/login' || to.path === '/register') {
//     next();
//     return;
//   }


//   if (!isAuthenticated) {
//     next('/login');
//     return;
//   }


//   next();
// });

export default router
