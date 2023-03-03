<template>
    <div id="app">
        <b-container fluid>
            <div class="row">
                <div class="">
                    <SideBar></SideBar>
                </div>
                <div class="col-md-10">
                    <Breadcrumb> </Breadcrumb>
                    <MainLayout> </MainLayout>
                </div>
            </div>
        </b-container>
    </div>
</template>
<!--TODO сделать кондинонал рендеринг зависимо от двух колумнов в навигаций и роутинге -->
<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import MainLayout from "@/pages/MainLayout.vue";

export default {
    name: "App",
    components: {
        Breadcrumb,
        MainLayout,
        SideBar,
    },
    data() {
        return {
            showCreateButton: true,
        };
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /*font-family: Lato, Reg;*/
    /*border: 1px solid black;*/
}

.border-ridth_test {
    border-right: 1px solid #dee2e6;
}
</style>
