import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Welcome from "../views/welcome/Welcome";
import Home from "../views/Home/Home";
import authenticate from "./middleware/authenticate";
import store from "../store/store";
import middlewarePipeline from "./middleware/middlewarePipeline";

const routes = [
    {path: '/', component: Welcome, name: 'Welcome'},
    {path: '/home', component: Home, name: 'Home', meta: {middleware: [authenticate]}},
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });

});

export default router;