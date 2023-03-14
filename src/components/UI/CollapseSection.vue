<template>
  <div class="accordion" role="tablist">
    <b-button block v-b-toggle.accordion-1 class="collapse-btn" align-h="between">
      {{ selectText }}
      <b-icon :icon="visible ? 'caret-down' : 'caret-up'" class="icon"></b-icon>
    </b-button>
    <b-card no-body class="mb-1">
      <b-collapse id="accordion-1" v-model="visible" accordion="my-accordion" role="tabpanel">
        <SearchField></SearchField>

        <b-card-body>
          <DataTable :labels="labels" :data="data" :showAdd="true" @add-item="addItem">

          </DataTable>
        </b-card-body>
      </b-collapse>
    </b-card>
    <div v-for="(item, index) in items" :key="index">
      <b-button block v-b-toggle="'accordion-' + (index + 2)" class="collapse-btn">
        {{ item.name }}
        <b-icon :icon="visible ? 'caret-down' : 'caret-up'" class="icon"></b-icon>
      </b-button>
      <b-card no-body class="mb-1">
        <b-collapse :id="'accordion-' + (index + 2)" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <TabComponent :tabs="tabs" @tab-activated="setActiveTab">
            </TabComponent>
            <section v-if="activeTab === 'tab1'">
              <div class="">
                <input type="text" placeholder="Name" class="data-input ">
                <input type="text" placeholder="Description" class="data-input ">
                <select class="data-input ">
                  <option></option>
                </select>
              </div>
            </section>
            <section class="table" v-else-if="activeTab === 'tab2'">
              <DataTable :data="data" :labels="labels" :show-actions="true"/>
            </section>
            <section v-else-if="activeTab === 'tab3'">
              <DataTable :data="data" :labels="labels" :show-actions="true"/>
            </section>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-button block v-b-toggle="'accordion-' + (index + 2)" class="collapse-btn">
        {{ item.name }}
        <b-icon :icon="visible ? 'caret-down' : 'caret-up'" class="icon"></b-icon>
      </b-button>
      <b-card no-body class="mb-1">
        <b-collapse :id="'accordion-' + (index + 2)" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import DataTable from "@/components/UI/DataTable.vue";
import SearchField from "@/components/UI/SearchField.vue";
import TabComponent from "@/components/UI/TabComponent.vue";

const labels = [
  {text: "Name", field: 'name'},
  {text: "Description", field: 'description'},
]
const data = [
  {name: 'Windows 1', description: 'Password Cracking'},
  {name: 'Windows 13', description: 'SIEM and MISP machine'},
  {name: 'Windows 15', description: 'AD auditing lab'},
  {name: 'Windows 31', description: 'Threat Hunting and Investigation'},
];
export default {
  name: "CollapseButton",
  components: {TabComponent, SearchField, DataTable},
  props: {
    selectText: {
      type: String,
      default: () => "Select",
    },
  },
  data() {
    return {
      labels: labels,
      data: data,
      isConfiguring: false,
      configuringItem: null,
      items: [],
      visible: false,
      tabs: [
        {id: 'tab1', title: 'Data'},
        {id: 'tab2', title: 'App&Services'},
        {id: 'tab3', title: 'Scenarios'},
      ],
      activeTab: 'tab1',
      selected: [], // Must be an array reference!
      options: [
        { text: 'Enable Remote Management', value: 'enableManagement' },
        { text: 'Create Management User', value: 'createManagement' }
      ]
    }
  },
  methods: {
    addItem(name) {
      const item = {name};
      this.items.push(item);
      this.isConfiguring = true;
      this.configuringItem = name;
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
  },
}
</script>

<style scoped>
.collapse-btn {
  background-color: #F3F3F3;
  color: black;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;
  border: none;
}

.collapse-btn:hover {
  background-color: #979797;
  color: #F3F3F3;
}

.data-input {
  padding-left: 2rem;
  width: 20rem;
  display: block;
  margin-top: 0.5rem;
  border-top: 0px solid;
  border-left: 0px solid;
  border-bottom: 1px solid #CAC4D0;
  border-right: 0px solid;
  font-family: Lato, sans-serif;
  font-size: 16px;
  background-color: white;
}

</style>