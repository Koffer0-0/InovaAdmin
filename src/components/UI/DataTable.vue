<template>
  <table class="table">
    <thead>
    <tr>
      <td class = "labels" v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ label.text }}
      </td>
      <td class="labels actions">
        Action
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, itemIndex) in data" :key="itemIndex">
      <td v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ item[label.field] }}
      </td>
      <td class="actions">
        <router-link to="/dubplicate">
          <b-icon icon="files" variant="dark"></b-icon>
        </router-link>
        <router-link to="/delete">
          <b-icon icon="trash" variant="danger"></b-icon>
        </router-link>
        <router-link to="/edit">
          <b-icon icon="pencil" variant="dark"></b-icon>
        </router-link>

      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

// Data and labels
export default {
  name: "DataTable",
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
  .actions {
    text-align: right;
  }
  td.actions svg {
    margin: 0.2rem;
  }
  .labels{
    color: #979797;
  }
</style>