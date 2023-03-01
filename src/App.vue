<template>
    <div id="app">
        <b-container fluid>
            <div class="row">
                <div class="">
                    <SideBar></SideBar>
                </div>
                <div class="col-md-10">
                    <Breadcrumb> </Breadcrumb>
                    <div class="row">
                        <div class="col-md-9">
                            <router-view name="left"></router-view>
                        </div>
                        <div class="col-md-3">
                            <CreateButton v-if="showCreateButton" />
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CreateButton from "@/components/UI/CreateButton.vue";

export default {
    name: "App",
    components: {
        CreateButton,
        Breadcrumb,
        SideBar,
    },
    data() {
        return {
            showCreateButton: false,
        };
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* border: 1px solid black; */
}
</style>
