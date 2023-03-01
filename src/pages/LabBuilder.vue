<template>
  <div>
  </div>
</template>

<script>
import DataTable from "@/components/UI/DataTable.vue";
import ToolBar from "@/components/ToolBar.vue";

// Data and labels
const labels = [
  { text: "ID", field: 'id' },
  { text: "Name", field: 'name' },
  { text: "Courses", field: 'date_created' },
]
const data = [
  { id: 1, name: 'Foo', date_created: '01.01.2021' },
  { id: 2, name: 'Bar', date_created: '01.01.2021' }
];

export default {
  name: "LabBuilder",
  components: {
  },
}
</script>

<style scoped>

</style>