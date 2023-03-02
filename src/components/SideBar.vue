<template>
    <div class="sidebar">
        <div class="flex-shrink-0 bg-white">
            <div class="sidebar-header d-flex link-dark border-bottom">
                <span class="fs-5 fw-semibold">Admin Panel</span>
                <b-icon icon="list" width="25" height="22"></b-icon>
            </div>
            <ul class="list-main list-unstyled">
                <li class="list-header">
                    Lab Builder
                    <ul class="list-under list-unstyled">
                        <li class="item">
                            <router-link :to="{ name: 'builder' }"
                                >Template Configuration</router-link
                            >
                        </li>
                        <li class="item">
                            <router-link to="/images">
                                Stock Images
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link to="builder/config"> Lab Configuration </router-link>
                        </li>
                    </ul>
                </li>
                <li class="list-header">
                    Course Builder
                    <ul class="list-under list-unstyled">
                        <li class="item">
                            <router-link to="courses"> Courses </router-link>
                        </li>
                        <li class="item">
                            <router-link to="lectures"> Lectures </router-link>
                        </li>
                        <li class="item">
                            <router-link to="labs"> Labs </router-link>
                        </li>
                    </ul>
                </li>
                <li class="list-header">
                    User Management
                    <ul class="list-under list-unstyled">
                        <li class="item">
                            <router-link to=""> Users </router-link>
                        </li>
                        <li class="item">
                            <router-link to=""> Groups </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.sidebar {
    margin-top: 33px;
    font-size: 13px;
    width: 210px;
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

/* .item:active a {
    padding: 2px 9.5px;
} */

.item::before {
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
}

.item:active::before {
    border: 1px solid #79747e;
    background-color: #fffbfe;
}
</style>
