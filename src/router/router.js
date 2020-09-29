import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Welcome from "../views/welcome/Welcome";
import Home from "../views/Home/Home";

const routes = [
    {path: '/', component: Welcome, name: 'Welcome'},
    {path: '/home', component: Home, name: 'Home'},
];

export default new VueRouter({
    mode: 'history',
    routes
});