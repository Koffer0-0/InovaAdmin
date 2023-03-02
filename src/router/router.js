import Router from 'vue-router'
import Vue from "vue";
import LabConfiguration from "@/pages/LabConfiguration.vue";
import NewLab from "@/pages/NewLab.vue";
import Labs from "@/pages/Labs.vue";
import Courses from "@/pages/Courses.vue";
import Lectures from "@/pages/Lectures.vue";
import NewStockImage from "@/pages/NewStockImage.vue";
import MainLayout from "@/pages/MainLayout.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component:  MainLayout,
            redirect: '/builder/config'
        },
        { path: '/builder', redirect: '/builder/config' },
        { path: '/coursebuilder', redirect: '/coursebuilder/courses' },
        { path: '/usermanagement', redirect: '/usermanagement/users' },
        {
            path: '/builder/config',
            component: LabConfiguration,
            props: true,
        },
        {
            path: '/builder/config/newlab',
            component: NewLab,
            props: true,
        },
        {
            path: '/builder/images',
            component: NewStockImage,
            props: true,
        },
        {
            path: '/builder/templates',
            component: NewStockImage,
            props: true,
        },
        {
            path: '/courses',
            component: Courses,
            props: true,
        },
        {
            path: '/lectures',
            component: Lectures,
            props: true,
        },
        {
            path: '/labs',
            component: Labs,
            props: true,
        },
    ],
    //removing /#/ in url
    mode: "history",
})


export default router;