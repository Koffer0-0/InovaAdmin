<template>
  <div class="row">
    <div class="col-md-9">
      <h1>this is stock images page</h1>
    </div>
    <div class="col-md-3">
      <CreateButton buttonText="Create Course">

      </CreateButton>
    </div>
  </div>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";

export default {
  name: "StockImages",
  components: {CreateButton}
}
</script>

<style scoped>

</style>