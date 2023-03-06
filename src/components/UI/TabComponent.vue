<template>
  <div>
    <b-card no-body>
      <b-tabs content-class="mt-3">
        <b-tab title="Apps & Services" :title-link-class="linkClass(0)">
          <DataTable :data="data1" :labels="labels1"/>
        </b-tab>
        <b-tab title="Scenarios" :title-link-class="linkClass(1)">
          <DataTable :data="data2" :labels="labels2"/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import DataTable from "@/components/UI/DataTable.vue";

const labels1 = [
  { text: "ID", field: 'id' },
  { text: "Name", field: 'name' },
  { text: "Description", field: 'description' },
  { text: "Images", field: 'images' },
]
const labels2 = [
  { text: "ID", field: 'id' },
  { text: "Name", field: 'name' },
  { text: "Description", field: 'description' },
]
const data1 = [
  { id: 10, name: 'Lab 1', description: 'Password Cracking' },
  { id: 11, name: 'Lab 13', description: 'SIEM and MISP machine' },
  { id: 15, name: 'Lab 15', description: 'AD auditing lab' },
  { id: 34, name: 'Lab 31', description: 'Threat Hunting and Investigation' },
];
const data2 = [
  { id: 10, name: 'Lab 1', description: 'Password Cracking' },
  { id: 11, name: 'Lab 13', description: 'SIEM and MISP machine' },
  { id: 15, name: 'Lab 15', description: 'AD auditing lab' },
  { id: 34, name: 'Lab 31', description: 'Threat Hunting and Investigation' },
];
export default {

  name: "TabComponent",
  components: {DataTable},
  data() {
    return {
      tabIndex: 0,
      labels1: labels1,
      data1: data1,
      labels2: labels2,
      data2: data2,
    }
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-light', 'text-danger']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
  },
}
</script>

<style scoped>
</style>