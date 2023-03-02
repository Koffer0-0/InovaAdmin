<template>
  <div class="row">
    <div class="col-md-9">
      <h1>create new lab</h1>
      <DataInputFields></DataInputFields>
      <CollapseButton>

      </CollapseButton>
    </div>
    <div class="col-md-3">

    </div>
  </div>
</template>

<script>
import DataInputFields from "@/components/UI/DataInputFields.vue";
import CollapseButton from "@/components/UI/CollapseButton.vue";

export default {
  name: "NewLab",
  components: {CollapseButton, DataInputFields}
}
</script>

<style scoped>

</style>