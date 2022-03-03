import Home from "./components/Pages/Home.vue";
import Dashboard from "./components/Pages/Dashboard.vue";
import Posts from "./components/Pages/Posts.vue";
import SinglePost from "./components/Pages/SinglePost.vue";
import CreatePost from "./components/Pages/CreatePost.vue";
import EditPost from "./components/Pages/EditPost.vue";
import Categories from "./components/Pages/Categories.vue";
import EditCategory from "./components/Pages/EditCategory.vue";
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
    {
        path: "/posts",
        component: Posts,
        name: "Posts",
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
    {
        path: "/post-details/:postid/:postslug",
        component: SinglePost,
        name: "SinglePost"
    },
    {
        path: "/create-post",
        component: CreatePost,
        name: "CreatePost",
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
    {
        path: "/edit-post/:postid/:postslug",
        component: EditPost,
        name: "EditPost",
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
    {
        path: "/categories",
        component: Categories,
        name: "Categories",
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
    {
        path: "/edit-category/:categoryid/:categoryslug",
        component: EditCategory,
        name: "EditCategory",
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
