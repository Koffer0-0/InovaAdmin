import Main from "@/pages/Main.vue";
import LabBuilder from "@/pages/LabBuilder.vue";
import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: Main,
            // children: [
            //     {
            //         path: 'builder',
            //         component: LabBuilder
            //     },
            //     {
            //         // UserPosts will be rendered inside User's <router-view>
            //         // when /user/:id/posts is matched
            //         path: 'courses',
            //         component: Courses
            //     }
            // ],
        },
        {
            path: '/builder/',
            component: LabBuilder,
            props: true,
            // children: [
            //     {
            //         path: 'configuration',
            //         component: LabConfiguration
            //     },
            //     {
            //         path: 'posts',
            //         component: UserPosts
            //     }
            // ]
        }
    ]
})


export default router;