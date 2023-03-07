<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <ToolBar page-header="User list"></ToolBar>
        <DataTable :labels="labels" :data="data" />
      </b-col>
      <b-col cols="3">
        <router-link to="">
          <CreateButton buttonText="New Template" route-name="">

          </CreateButton>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import ToolBar from "@/components/ToolBar.vue";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Users",
      components: {ToolBar},
    };
</script>

<style scoped></style>
