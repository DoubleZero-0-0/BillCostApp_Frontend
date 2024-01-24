import {createRouter, createWebHistory} from 'vue-router';
import Status from "../Pages/StatusPage/Status.vue";
import Categories from "../Pages/CategoriesPage/Categories.vue";
import Me from "../Pages/MePage/Me.vue";
import Cost from "../Pages/CostPage/Cost.vue";
import Login from "../Pages/Auth/Login.vue";
import Register from "../Pages/Auth/Register.vue";
import EmailVerified from "../Pages/Auth/EmailVerified.vue";


const index = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Cost",
            component: Cost,
        },
        {
            path: "/status",
            name: "Status",
            component: Status,
        },
        {
            path: "/categories",
            name: "Categories",
            component: Categories,
        },
        {
            path: "/MyAccount",
            name: "MyAccount",
            component: Me,
        },
        {
            path: "/Login",
            name: "Login",
            component: Login,
        },
        {
            path: "/Register",
            name: "Register",
            component: Register,
        },
        {
            path: "/emailVerify/:user_name/:user_email",
            name: "EmailVerified",
            component: EmailVerified,
            props: route => ({
                email: route.params.user_email,
                name: route.params.user_name
            }),
        },

    ],
});

index.beforeEach((to, from, next) => {

    const isAuthenticated = localStorage.getItem('token');

    if (to.path === '/Login' || to.path === '/Register') {
        next();
        return;
    }

    if (!isAuthenticated) {
        next('/Login');
        return;
    }

    next();
});
export default index;