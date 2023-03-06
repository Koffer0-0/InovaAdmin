<template>
  <div class="data_input">
    <b-form-input v-model="text" placeholder="Name" class="name_input"></b-form-input>
    <b-form-textarea v-model="text" placeholder="Description" class="description"></b-form-textarea>

  </div>
</template>

<script>
export default {
  name: "DataInputFields"
}
</script>

<style scoped>
  .name_input {
    background-color: #E5E5E5;
  }
  .description {
    background-color: #E5E5E5;
    resize: none;
  }
</style>