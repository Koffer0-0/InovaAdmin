<template>
  <b-row>
    <h4>Configure Existing Labs</h4>
    <b-col class="ml-md-auto">
      <SearchField>
      </SearchField>
    </b-col>
  </b-row>
</template>

<script>
import SearchField from "@/components/UI/SearchField.vue";

export default {
  name: "ToolBar",
  components: {SearchField}
}
</script>

<style scoped>
</style>