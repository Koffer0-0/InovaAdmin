import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import ExistingLabConfig from "@/components/UI/LabBuilder/LabConfig/ExistingLabConfig.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/existinglab',
        component: ExistingLabConfig
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;