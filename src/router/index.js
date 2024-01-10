import {createRouter, createWebHistory} from 'vue-router';
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import EmailVerify from "@/views/EmailVerify.vue";
import Dashboard from "@/views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },

    {
      path: "/emailVerify/:user_name/:user_email",
      name: "emailVerify",
      component: EmailVerify,
      props: route => ({
        email: route.params.user_email,
        name: route.params.user_name
      }),
    },
  ],
});

router.beforeEach((to, from, next) => {

  const isAuthenticated = localStorage.getItem('token');

  if (to.path === '/login' || to.path === '/register') {
    next();
    return;
  }

  if (!isAuthenticated) {
    next('/login');
    return;
  }

  next();
});

export default router;
