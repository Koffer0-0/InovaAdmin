<template>
  <b-col col>
    <b-button pill variant="outline-secondary">{{ buttonText }}</b-button>
  </b-col>
</template>

<script>
export default {
  name: "CreateButton",
  props: {
    buttonText: {
      type: String,
      default: () => "Create Button",
    }
  }
}
</script>

<style scoped>

</style>