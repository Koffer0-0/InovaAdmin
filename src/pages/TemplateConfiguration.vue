<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <ToolBar page-header="List of labs"></ToolBar>
        <TabComponent>

        </TabComponent>
      </b-col>
      <b-col cols="3">
        <router-link to="/lab-builder/lab-configuration/new-template">
          <CreateButton buttonText="New Template" route-name="new template">

          </CreateButton>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TabComponent from "@/components/UI/TabComponent.vue";
import CreateButton from "@/components/UI/CreateButton.vue";
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: "TemplateConfiguration",
  components: {ToolBar, CreateButton, TabComponent}
}
</script>

<style scoped>

</style>