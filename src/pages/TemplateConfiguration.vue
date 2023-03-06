<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <TabComponent @tab-activated="setActiveTab"></TabComponent>
        <div v-if="activeTab === 'data1'">
          <DataTable :data="data1" :labels="labels1"/>
        </div>
        <div v-else-if="activeTab === 'data2'">
          <DataTable :data="data2" :labels="labels2"/>
        </div>
      </b-col>
      <b-col cols="3">
        <router-link to="/lab-builder/lab-configuration/new-template">
          <CreateButton buttonText="New Template" route-name="new template">

          </CreateButton>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";
import DataTable from "@/components/UI/DataTable.vue";
import TabComponent from "@/components/UI/TabComponent.vue";

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
  { id: 10, name: '3r4f34f 1', description: 'Password Cracking' },
  { id: 11, name: '34f34r 13', description: 'SIEM and MISP machine' },
  { id: 15, name: 'wfwef 15', description: 'AD auditing lab' },
  { id: 34, name: 'wefwef 31', description: 'Threat Hunting and Investigation' },
];
const data2 = [
  { id: 10, name: 'Lab 1', description: 'Password Cracking' },
  { id: 11, name: 'Lab 13', description: 'SIEM and MISP machine' },
  { id: 15, name: 'Lab 15', description: 'AD auditing lab' },
  { id: 34, name: 'Lab 31', description: 'Threat Hunting and Investigation' },
];

export default {
  name: "TemplateConfiguration",
  components: {TabComponent, CreateButton, DataTable},
  data() {
    return {
      tabIndex: 0,
      labels1: labels1,
      data1: data1,
      labels2: labels2,
      data2: data2,
      activeTab: 'data1',
    }
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  }

}
</script>

<style scoped>

</style>