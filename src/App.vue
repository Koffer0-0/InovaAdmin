<template>
  <div id="app">
    <Breadcrumb>

    </Breadcrumb>
    <SideBar>

    </SideBar>
    <router-view>
    </router-view>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: 'App',
  components: {
    Breadcrumb,
    SideBar,
  }
}
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
