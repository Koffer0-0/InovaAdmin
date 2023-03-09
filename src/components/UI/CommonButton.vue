<template>
  <div class="commonButton">
    <b-col col>
      <b-button pill class="commonButton">
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
  .commonButton button {
    background-color: #FFFBFE;
    color: #1B1C1D;
    margin-bottom: 0.4rem;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>