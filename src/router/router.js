import Main from "@/pages/Main.vue";
import LabBuilder from "@/pages/LabBuilder.vue";
import Router from 'vue-router'
import Vue from "vue";
import LabConfiguration from "@/pages/LabConfiguration.vue";
import TemplateConfiguration from "@/pages/TemplateConfiguration.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/builder/',
            component: LabBuilder,
            props: true,
        },
        {
            path: '/builder/config',
            component: LabConfiguration,
            props: true,
        },
        {
            path: '/builder/template',
            component: TemplateConfiguration,
            props: true,
        },
    ]
})


export default router;