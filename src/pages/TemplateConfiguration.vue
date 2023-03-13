<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9">
        <b-row>
          <TabComponent @tab-activated="setActiveTab" :tabs="tabs" ></TabComponent>
          <b-col class="ml-md-auto">
          </b-col>
          <SearchField></SearchField>
        </b-row>

        <div class="table" v-if="activeTab === 'tab1'">
          <DataTable :data="data1" :labels="labels1" :show-actions="true"/>
        </div>
        <div v-else-if="activeTab === 'tab2'">
          <DataTable :data="data2" :labels="labels2" :show-actions="true"/>
        </div>
      </b-col>
      <b-col cols="3">
        <router-link to="/lab-builder/lab-configuration/new-template" v-if="activeTab === 'tab1'">
          <CreateButton buttonText="New Template" route-name="new scenario">

          </CreateButton>
        </router-link>
        <router-link to="/lab-builder/lab-configuration/new-template" v-if="activeTab === 'tab2'">
          <CreateButton buttonText="New Scenario" route-name="new template">

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
import SearchField from "@/components/UI/SearchField.vue";

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
  components: {SearchField, TabComponent, CreateButton, DataTable},
  data() {
    return {
      tabIndex: 0,
      labels1: labels1,
      data1: data1,
      labels2: labels2,
      data2: data2,
      tabs: [
        { id: 'tab1', title: 'App&Services'},
        { id: 'tab2', title: 'Scenarios'},
      ],
      activeTab: 'tab1',
    }
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
  }

}
</script>

<style scoped>
.table {
  margin-top: 30px;
}
</style>