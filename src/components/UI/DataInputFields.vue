<template>
  <div class="data_input">
    <label>Name</label>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <label>Description</label>
    <b-form-input v-model="text" placeholder="Enter description"></b-form-input>

  </div>
</template>

<script>
export default {
  name: "DataInputFields"
}
</script>

<style scoped>

</style>