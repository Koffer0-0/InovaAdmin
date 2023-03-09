<template>
  <div class="data_input">
    <b-form-input
        v-model="
      /* eslint-disable-next-line vue/no-mutating-props */
        formData.name"
        :placeholder="placeholderName"
        class="name_input"
>
    </b-form-input>
    <b-form-textarea
        v-model="
        /* eslint-disable-next-line vue/no-mutating-props */
        formData.description"
        :placeholder="placeholderDescription"
        class="description"
   >
    </b-form-textarea>
  </div>
</template>

<script>
export default {
  name: "DataInputFields",
  props: {
    formData: {
      type: Object,
      required: true,
    },
    placeholderName: {
      type: String,
      default: () => "Name",
      required: true
    },
    placeholderDescription: {
      type: String,
      default: () => "Description",
      required: true
    },
  },
}
</script>

<style scoped>
  .name_input {
    background-color: #E5E5E5;
  }
  .description {
    background-color: #E5E5E5;
    resize: none;
  }
  .data_input input, textarea {
    margin-bottom: 20px;
  }
</style>