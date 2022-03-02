import Home from "./components/Pages/Home.vue";
import Dashboard from "./components/Pages/Dashboard.vue";
import Login from "./components/Auth/Login.vue";
import Register from "./components/Auth/Register.vue";

export const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
    },
    {
        path: "/register",
        component: Register,
        name: "Register",
        beforeEnter: (to, from, next) => {
            axios
                .get("/api/authenticated")
                .then(() => {
                    return next({ name: "Home" });
                })
                .catch(() => {
                    next();
                });
        },
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        beforeEnter: (to, from, next) => {
            axios
                .get("/api/authenticated")
                .then(() => {
                    return next({ name: "Home" });
                })
                .catch(() => {
                    next();
                });
        },
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        beforeEnter: (to, from, next) => {
            axios
                .get("/api/authenticated")
                .then(() => {
                    next();
                })
                .catch(() => {
                    return next({ name: "Login" });
                });
        },
    },
];
