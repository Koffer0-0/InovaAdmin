<template>
  <div class="row">
    <div class="col-md-9">
      <h1>this is labs page</h1>
    </div>
    <div class="col-md-3">
      <CreateButton buttonText="Create Lab">

      </CreateButton>
    </div>
  </div>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Labs",
  components: {CreateButton}
}
</script>

<style scoped>

</style>