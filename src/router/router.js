// import MainLayout from "@/pages/MainLayout.vue";
// import LabBuilder from "@/pages/404NotFound.vue";
import Router from "vue-router";
import Vue from "vue";
import TemplateConfiguration from "@/pages/TemplateConfiguration.vue";
import StockImages from "@/pages/StockImages.vue";
import LabConfiguration from "@/pages/LabConfiguration.vue";
import Courses from "@/pages/Courses.vue";
import Lectures from "@/pages/Lectures.vue";
import Labs from "@/pages/Labs.vue";
import Users from "@/pages/Users.vue";
import Groups from "@/pages/Groups.vue";
import NewLab from "@/pages/NewLab.vue";
import FileEditor from "@/pages/FileEditor.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        // {
        //     path: "/",
        //     component: MainLayout,
        // },
        { path: "", redirect: "/lab-builder/template-configuration" },
        {
            path: "/lab-builder",
            redirect: "/lab-builder/template-configuration",
        },
        {
            path: "/lab-builder/template-configuration",
            component: TemplateConfiguration,
            props: true,
        },
        {
            path: "/lab-builder/stock-images",
            component: StockImages,
            props: true,
        },
        {
            path: "/lab-builder/lab-configuration",
            component: LabConfiguration,
            props: true,
        },
        { path: "/course-builder", redirect: "/course-builder/courses" },
        {
            path: "/course-builder/courses",
            component: Courses,
            props: true,
        },
        {
            path: "/course-builder/lectures",
            component: Lectures,
            props: true,
        },
        {
            path: "/course-builder/labs",
            component: Labs,
            props: true,
        },
        { path: "/user-management", redirect: "/user-management/users" },
        {
            path: "/user-management/users",
            component: Users,
            props: true,
        },
        {
            path: "/user-management/groups",
            component: Groups,
            props: true,
        },
        {
            path: "/builder/config/newlab",
            component: NewLab,
            props: true,
        },
        {
            path: '/editor',
            component: FileEditor,
            props: true,
        },
    ],
    //removing /#/ in url
    mode: "history",
});

export default router;
