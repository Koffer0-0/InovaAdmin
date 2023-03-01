<template>
  <div class="lab_builder">
    <b-container fluid>
      <b-row>
        <b-col>
          <h4>Configure Existing Labs</h4>
        </b-col>
        <b-col cols="12" md="auto">
          <b-nav-form right>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          </b-nav-form>
        </b-col>
        <b-col col lg="3">
          <b-button pill variant="outline-secondary">Button</b-button>
        </b-col>
      </b-row>
    </b-container>
    <DataTable :labels="labels" :data="data" />
  </div>
</template>

<script>
import DataTable from "@/components/UI/DataTable.vue";

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
  components: {DataTable},
  data() {
    return {
      labels: labels,
      data: data,
    };
  }
}
</script>

<style scoped>

</style>