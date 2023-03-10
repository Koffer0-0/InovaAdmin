<template>
  <table class="table">
    <thead>
    <tr>
      <td v-if="showAdd">

      </td>
      <td class = "labels" v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ label.text }}
      </td>
      <td class="labels actions" v-if="showActions">
        Action
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, itemIndex) in data" :key="itemIndex">
      <td v-if="showAdd">
          <b-icon icon="plus" class="add-btn" @click="$emit('add-item', item.name)">
          </b-icon>
      </td>
      <td v-for="(label, labelIndex) in labels" :key="labelIndex">
        {{ item[label.field] }}
      </td>
      <td class="actions" v-if="showActions">
        <ActionColumn :item="item"></ActionColumn>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>

// Data and labels
import ActionColumn from "@/components/UI/ActionColumn.vue";

export default {
  name: "DataTable",
  components: {ActionColumn},
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    showActions: {
      type: Boolean,
      default: false
    },
    showAdd: {
      type: Boolean,
      default: false
    },
  },

}
</script>

<style scoped>
  .add-btn {
    color: #6750A4;
    font-size: 1.4rem;
  }
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