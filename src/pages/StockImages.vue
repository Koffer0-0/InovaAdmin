<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <ToolBar page-header="Existing Stock Images"></ToolBar>
        <DataTable :labels="labels" :data="data" :show-actions="true"/>
      </b-col>
      <b-col cols="3">
        <router-link to="/lab-builder/lab-configuration/new-image">
          <CreateButton buttonText="New Stock Image">

          </CreateButton>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";
import DataTable from "@/components/UI/DataTable.vue";
import ToolBar from "@/components/ToolBar.vue";

// Data and labels
const labels = [
  { text: "ID", field: 'id' },
  { text: "Name", field: 'name' },
  { text: "Description", field: 'description' },
]
const data = [
  { id: 10, name: 'Lab 1', description: 'Password Cracking' },
  { id: 11, name: 'Lab 13', description: 'SIEM and MISP machine' },
  { id: 15, name: 'Lab 15', description: 'AD auditing lab' },
  { id: 34, name: 'Lab 31', description: 'Threat Hunting and Investigation' },
];

export default {
  name: "StockImages",
  components: {ToolBar, DataTable, CreateButton},
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