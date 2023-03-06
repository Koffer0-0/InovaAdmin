<template>
  <div class="row">
    <div class="col-md-9">
      <ToolBar page-header="this is lectures page"></ToolBar>
    </div>
    <div class="col-md-3">
      <CreateButton buttonText="Create New Lecture">

      </CreateButton>
    </div>
  </div>
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