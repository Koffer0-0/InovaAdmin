<template>
  <b-col>
    <b-button pill class="create_button" @click="handleClick">
      <b-icon icon="plus"></b-icon>
      {{ buttonText }}
    </b-button>
  </b-col>
</template>

<script>
export default {
  name: "CreateButton",
  props: {
    buttonText: {
      type: String,
      default: () => "Create Button",
    },
  },
}
</script>

<style scoped>
.create_button {
  margin-bottom: 0.5rem;
  color: #6750A4;
  background: #fff;
  font-family: Roboto, serif;
}
</style>