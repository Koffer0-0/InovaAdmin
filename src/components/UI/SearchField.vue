
<!-- The search field component allows users to search for elements in a specific data set. -->
<template>
    <b-nav-form right>
      <!-- The input field where users can enter their search query. -->
      <b-form-input size="sm" placeholder="Search">
      </b-form-input>
    </b-nav-form>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    data: Array, // The data set to search through.
    searchKey: String // The key to use for searching in the data set.
  },
  data() {
    return {
      searchQuery: "" // The user's search query.
    };
  },
  methods: {
    /*
    The search function filters the data set based on the user's search query and emits an event
    with the filtered data.
    */
    search() {
      let filteredData = this.data.filter(
          item => item[this.searchKey].toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.$emit("search", filteredData);
    }
  }
}

</script>

<style scoped>

</style>