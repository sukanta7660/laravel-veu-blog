require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {filter} from './filter'

import { Form } from 'vform'

window.Form = Form;

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
