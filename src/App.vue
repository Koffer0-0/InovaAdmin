<template>
  <div id="app">
    <b-container fluid>
      <div class="row">
        <div class="" v-if="!is404">
          <SideBar></SideBar>
        </div>
        <div class="col-md-10">
          <Breadcrumb v-if="!is404"></Breadcrumb>
          <router-view/>
        </div>
      </div>
    </b-container>
  </div>
</template>
<!--TODO сделать кондинонал рендеринг зависимо от двух колумнов в навигаций и роутинге -->
<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
// import MainLayout from "@/pages/MainLayout.vue";

export default {
  name: "App",
  components: {
    Breadcrumb,
    // MainLayout,
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
  /*border: 1px solid black;*/
}
</style>
