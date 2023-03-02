<template>
  <div class="commonButton">
    <b-col col>
      <b-button pill class="">
        {{ buttonText }}
      </b-button>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    buttonText: {
      type: String,
      default: () => "Create Button",
    },
  }
}
</script>

<style scoped>

</style>