<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4>Configure Existing Labs</h4>
      </b-col>
      <SearchField>

      </SearchField>
      <CreateButton>

      </CreateButton>
    </b-row>
  </b-container>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";
import SearchField from "@/components/UI/SearchField.vue";

export default {
  name: "ToolBar",
  components: {SearchField, CreateButton}
}
</script>

<style scoped>

</style>