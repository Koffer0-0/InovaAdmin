<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <ToolBar page-header="List of lectures"></ToolBar>
        <DataTable :labels="labels" :data="data" />
      </b-col>
      <b-col cols="3">
        <router-link to="">
          <CreateButton buttonText="Create New Lecture">

          </CreateButton>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";
import ToolBar from "@/components/ToolBar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Lectures",
  components: {ToolBar, CreateButton}
}
</script>

<style scoped>

</style>