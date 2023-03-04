<template>
  <div class="row">
    <div class="col-md-9">
      <h1>this is labs page</h1>
      <TabComponent>

      </TabComponent>
    </div>
    <div class="col-md-3">
      <CreateButton buttonText="Create New Lab">

      </CreateButton>
    </div>
  </div>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";
import TabComponent from "@/components/UI/TabComponent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Labs",
  components: {TabComponent, CreateButton}
}
</script>

<style scoped>

</style>