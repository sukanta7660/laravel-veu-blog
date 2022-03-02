import Home from './components/Pages/Home.vue'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
];
