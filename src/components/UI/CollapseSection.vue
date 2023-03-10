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

          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import DataTable from "@/components/UI/DataTable.vue";
import SearchField from "@/components/UI/SearchField.vue";

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
  components: {SearchField, DataTable},
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
    }
  },
  methods: {
    addItem(name) {
      const item = {name};
      this.items.push(item);
      this.isConfiguring = true;
      this.configuringItem = name;
    }
  }
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

</style>