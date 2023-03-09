<template>
    <div class="sidebar">
        <div class="flex-shrink-0 bg-white">
            <div class="sidebar-header d-flex link-dark border-bottom">
                <span class="fs-5 fw-semibold">Admin Panel</span>
                <b-icon icon="list" width="25" height="22"></b-icon>
            </div>
            <ul class="list-main list-unstyled">
                <li
                    class="list-header"
                    v-for="(category, index) in categories"
                    :key="index"
                >
                    {{ category.name }}
                    <ul
                        class="list-under list-unstyled"
                        v-if="category.subcategories"
                    >
                        <li
                            class="item"
                            v-for="(
                                subcategory, subindex
                            ) in category.subcategories"
                            :key="subindex"
                        >
                            <router-link
                                exact-active-class="active"
                                :to="subcategory.routerLink"
                            >
                                {{ subcategory.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: "Lab Builder",
                    subcategories: [
                        {
                            name: "Template Configuration",
                            routerLink: "/lab-builder/template-configuration",
                        },
                        {
                            name: "Stock Images",
                            routerLink: "/lab-builder/stock-images",
                        },
                        {
                            name: "Lab Configuration",
                            routerLink: "/lab-builder/lab-configuration",
                        },
                    ],
                },
                {
                    name: "Course Builder",
                    subcategories: [
                        {
                            name: "Courses",
                            routerLink: "/course-builder/courses",
                        },
                        {
                            name: "Lectures",
                            routerLink: "/course-builder/lectures",
                        },
                        {
                            name: "Labs",
                            routerLink: "/course-builder/labs",
                        },
                    ],
                },
                {
                    name: "User Management",
                    subcategories: [
                        {
                            name: "Users",
                            routerLink: "/user-management/users",
                        },
                        {
                            name: "Groups",
                            routerLink: "/user-management/groups",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.sidebar {
    margin-top: 33px;
    margin-right: 0;
    font-size: 16px;
    width: 250px;
}

.sidebar-header {
    justify-content: space-around;
    padding-bottom: 8px;
}

.list-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #f9bc2e;
    margin-top: 12px;
    cursor: default;
}

.list-main {
    padding-left: 25px;
}

.list-under {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
}

.item {
    position: relative;
    display: inline-block;
    margin-top: 7px;
}

.item a {
    position: relative;
    z-index: 1;
    color: #515251;
    text-decoration: none;
    box-sizing: border-box;
    padding: 2px 9.5px;
}

.item a:hover {
    color: #000;
}

.item a.active {
    padding: 2px 9.5px;
}

.item a::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid transparent;
    pointer-events: none;
    border-radius: 8px;
    background-color: transparent;
    z-index: -1;
}

.item a.active::before {
    border: 1px solid #79747e;
    background-color: #fffbfe;
}
</style>
