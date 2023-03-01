<template>
    <div id="app">
        <b-container fluid>
            <div class="row">
                <div class="">
                    <SideBar></SideBar>
                </div>
                <div class="col-md-10">
                    <Breadcrumb></Breadcrumb>
                    <router-view></router-view>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
    name: "App",
    components: {
        Breadcrumb,
        SideBar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
