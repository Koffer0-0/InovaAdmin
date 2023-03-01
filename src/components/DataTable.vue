<template>
  <table>
    <thead>
    <tr>
      <td v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ label.text }}
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, itemIndex) in data" :key="itemIndex">
      <td v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ item[label.field] }}
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

</style>