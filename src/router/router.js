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
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router);

const router = new Router({
    routes: [
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
                        name: "Lab-Builder",
                        link: "/lab-builder/stock-images",
                    },
                    {
                        name: "Stock-Images",
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
                        name: "Lab-Builder",
                        link: "/lab-builder/lab-configuration",
                    },
                    {
                        name: "Lab-Configuration",
                    },
                ],
            },
        },
        {
            path: "/lab-builder/lab-configuration/new-lab",
            name: "New Lab",
            component: NewLab,
            props: true,
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
                        name: "Course-Builder",
                        link: "/course-builder/courses",
                    },
                    {
                        name: "Courses",
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
                        name: "Course-Builder",
                        link: "/course-builder/lectures",
                    },
                    {
                        name: "Lectures",
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
                        name: "Course-Builder",
                        link: "/course-builder/labs",
                    },
                    {
                        name: "Labs",
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
                        name: "User-Management",
                        link: "/user-management/users",
                    },
                    {
                        name: "Users",
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
                        name: "User-Management",
                        link: "/user-management/groups",
                    },
                    {
                        name: "Groups",
                    },
                ],
            },
        },
        {
            path: "/editor",
            component: FileEditor,
            props: true,
        },
        { path: '/404', component: NotFound, name: 'NotFound' },
        { path: '*', redirect: '/404' },
    ],
    //removing /#/ in url
    mode: "history",
});

export default router;
