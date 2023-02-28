<template>
  <navigation></navigation>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import SideBar from "@/components/Sidebar.vue";
import navigation from "@/components/navigation.vue";

export default {
  name: "App",
  components: {
    SideBar,
    navigation
  },

}


</script>

<style>

</style>