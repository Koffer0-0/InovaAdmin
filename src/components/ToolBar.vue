<template>
  <b-row>
    <h4>{{ pageHeader }}</h4>
    <b-col class="ml-md-auto">
      <SearchField v-if="showSearch"></SearchField>
    </b-col>
  </b-row>
</template>

<script>
import SearchField from "@/components/UI/SearchField.vue";

export default {
  name: "ToolBar",
  components: {SearchField},
  props: {
    pageHeader: {
      type: String,
      default: () => "Define header of page plz",
    },
    showSearch: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped>
</style>