import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/state"
    },
    {
        path: '/dayCasesDeaths',
        name: 'DayCasesDeaths',
        component: () => import('../views/DayCasesDeaths.vue')
    },
    {
        path: '/dayAddCasesDeaths',
        name: 'DayAddCases',
        component: () => import('../views/DayAddCasesDeaths.vue')
    },
    {
        path: '/stateCasesDeaths',
        name: 'StateCasesDeaths',
        component: () => import('../components/StateCases.vue')
    },
    {
        path: '/top10LeastCases',
        name: 'Top10LeastCases',
        component: () => import('../views/Top10LeastCases.vue')
    },
    {
        path: '/top10LeastDeaths',
        name: 'Top10LeastDeaths',
        component: () => import('../views/Top10LeastDeaths.vue')
    },
    {
        path: '/state',
        name: 'State',
        component: () => import('../views/State.vue')
    },
    {
        path: '/state/:county',
        component: () => import('../views/County.vue')
    },
    {
        path: '/test',
        component: () => import('../components/Top10Cases.vue')
    },

]

const router = createRouter({
    //history模式：createWebHistory , hash模式：createWebHashHistory
    history: createWebHistory(),
    routes
})
export default router;
