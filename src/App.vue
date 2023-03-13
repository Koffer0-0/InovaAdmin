<template>
    <div id="app">
        <b-container fluid>
            <b-row>
                <b-col cols="2" v-if="!is404">
                    <SideBar />
                </b-col>
                <b-col cols="10">
                    <Breadcrumb v-if="!is404"></Breadcrumb>
                    <router-view />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<!--TODO сделать кондинонал рендеринг зависимо от двух колумнов в навигаций и роутинге -->
<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
    name: "App",
    components: {
        Breadcrumb,
        SideBar,
    },
    data() {
        return {
            showCreateButton: true,
        };
    },
    computed: {
        is404() {
            return this.$route.name === "NotFound";
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.container-fluid {
    height: 100vh;
}

.col-2:first-child {
    border-right: 1px solid #515251;
}
</style>
