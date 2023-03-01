import Main from "@/pages/Main.vue";
import LabBuilder from "@/pages/LabBuilder.vue";
import Router from 'vue-router'
import Vue from "vue";
import LabConfiguration from "@/pages/LabConfiguration.vue";
import TemplateConfiguration from "@/pages/TemplateConfiguration.vue";
import NewLab from "@/pages/NewLab.vue";
import CreateButton from "@/components/UI/CreateButton.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            components: {
                left: Main,
                right: ""
            },
        },
        {
            path: '/builder/',
            components: {
                left: LabBuilder,
                right: ""
            },
            props: true,
        },
        {
            path: '/builder/config',
            components: {
                left: LabConfiguration,
                right: CreateButton
            },
            props: true,
        },
        {
            path: '/builder/config/newlab',
            components: {
                left: NewLab,
                right: ''
            },
            props: true,
        },
        {
            path: '/builder/template',
            components: {
                left: TemplateConfiguration,
                right: CreateButton
            },
            props: true,
        },
    ]
})


export default router;