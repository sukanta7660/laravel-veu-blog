require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

Vue.component('main-view', require('./components/Layouts.vue').default);

const router = new VueRouter({
    routes,
    mode:'hash',

})

const app = new Vue({
    el: '#app',
    router
});
