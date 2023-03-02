<template>
  <b-container fluid>
    <b-row>
        <ToolBar></ToolBar>
        <DataTable :labels="labels" :data="data" />
    </b-row>
  </b-container>
</template>

<script>
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
  name: "LabConfiguration",
  components: {ToolBar, DataTable},
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