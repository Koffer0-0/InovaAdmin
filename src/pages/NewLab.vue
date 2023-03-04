<template>
  <form action="">
  <div class="row">

      <div class="col-md-9">
        <h1>create new lab</h1>
        <DataInputFields>

        </DataInputFields>
        <CollapseButton>

        </CollapseButton>
      </div>
      <div class="col-md-3">
        <CommonButton buttonText="Configure">

        </CommonButton>
        <CommonButton buttonText="Publish">

        </CommonButton>
      </div>

  </div>  </form>
</template>

<script>
import DataInputFields from "@/components/UI/DataInputFields.vue";
import CollapseButton from "@/components/UI/CollapseButton.vue";
import CommonButton from "@/components/UI/CommonButton.vue";

export default {
  name: "NewLab",
  components: {CommonButton, CollapseButton, DataInputFields}
}
</script>

<style scoped>

</style>