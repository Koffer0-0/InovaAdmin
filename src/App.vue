<template>
  <div id="app">
    <b-container fluid>
      <div class="row">
        <div class="col-md-2">
          <SideBar></SideBar>
        </div>
        <div class="col-md-10">
          <Breadcrumb>
          </Breadcrumb>
          <div class="row">
            <div class="col-md-9">
              <router-view>

              </router-view>
            </div>
            <div class="col-md-3">
              here must be the button
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<!--TODO сделать кондинонал рендеринг зависимо от двух колумнов в навигаций и роутинге -->
<script>
import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: 'App',
  components: {
    Breadcrumb,
    SideBar,
  },
  data() {
    return {
      showCreateButton: true,
    };
  },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* border: 1px solid black; */
}
</style>
