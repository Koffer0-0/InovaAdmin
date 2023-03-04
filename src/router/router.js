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
// import NewStockImage from "@/pages/NewStockImage.vue";

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
            name: "TemplateConfiguration",
            component: TemplateConfiguration,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                    },
                ],
            },
        },
        {
            path: "/lab-builder/stock-images",
            name: "StockImages",
            component: StockImages,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "lab-builder",
                        link: "/lab-builder/stock-images",
                    },
                    {
                        name: "stock-images",
                    },
                ],
            },
        },
        {
            path: "/lab-builder/lab-configuration",
            name: "LabConfiguration",
            component: LabConfiguration,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "lab-builder",
                        link: "/lab-builder/lab-configuration",
                    },
                    {
                        name: "lab-configuration",
                    },
                ],
            },
        },
        { path: "/course-builder", redirect: "/course-builder/courses" },
        {
            path: "/course-builder/courses",
            name: "Courses",
            component: Courses,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "course-builder",
                        link: "/course-builder/courses",
                    },
                    {
                        name: "courses",
                    },
                ],
            },
        },
        {
            path: "/course-builder/lectures",
            name: "Lectures",
            component: Lectures,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "course-builder",
                        link: "/course-builder/lectures",
                    },
                    {
                        name: "lectures",
                    },
                ],
            },
        },
        {
            path: "/course-builder/labs",
            name: "Labs",
            component: Labs,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "course-builder",
                        link: "/course-builder/labs",
                    },
                    {
                        name: "labs",
                    },
                ],
            },
        },
        { path: "/user-management", redirect: "/user-management/users" },
        {
            path: "/user-management/users",
            name: "Users",
            component: Users,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "user-management",
                        link: "/user-management/users",
                    },
                    {
                        name: "users",
                    },
                ],
            },
        },
        {
            path: "/user-management/groups",
            name: "Groups",
            component: Groups,
            props: true,
            meta: {
                breadcrumb: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "user-management",
                        link: "/user-management/groups",
                    },
                    {
                        name: "groups",
                    },
                ],
            },
        },
        {
            path: "/builder/config/newlab",
            component: NewLab,
            props: true,
        },
    ],
    //removing /#/ in url
    mode: "history",
});

export default router;
