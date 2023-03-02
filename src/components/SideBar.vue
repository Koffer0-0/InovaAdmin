<template>
    <div class="sidebar">
        <div class="flex-shrink-0 bg-white">
            <div class="sidebar-header d-flex link-dark border-bottom">
                <span class="fs-5 fw-semibold"><router-link to="/"> Admin Panel</router-link></span>
                <b-icon icon="list" width="25" height="22"></b-icon>
            </div>
            <ul class="list-main list-unstyled">
                <li class="list-header">
                    Lab Builder
                    <ul class="list-under list-unstyled">
                        <li class="item">
                            <router-link :to="{ name: 'builder' }">Template Configuration</router-link>
                        </li>
                        <li class="item">
                            <router-link to="/images"> Stock Images </router-link>
                        </li>
                        <li class="item">
                            <router-link to="/config"> Lab Configuration </router-link>
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
    width: 200px;
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

.item a {
    color: #515251;
    text-decoration: none;
}

.item:active {
    padding: 2px 9.5px;
    border: 1px solid #79747e;
    background-color: #fffbfe;
    border-radius: 8px;
}
</style>
