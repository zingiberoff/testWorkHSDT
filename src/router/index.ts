import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import GraySection from '../views/GraySection.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/test1',
        name: 'test1',
        component: GraySection
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('../views/RedSection.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
