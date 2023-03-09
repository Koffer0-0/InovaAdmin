<template>
  <b-col>
    <b-button pill class="create_button" @click="handleClick">
      <b-icon icon="plus"></b-icon>
      {{ buttonText }}
    </b-button>
  </b-col>
</template>

<script>
export default {
  name: "CreateButton",
  props: {
    buttonText: {
      type: String,
      default: () => "Create Button",
    },
    routeName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      if (this.routeName === 'newlab') {
        // Perform create lab action
      } else if (this.routeName === 'createCourse') {
        // Perform create course action
      } else if (this.routeName === 'createLab') {
        // Perform delete lab action
      }
      // Add more if statements for additional button actions
    }
  }
}
</script>

<style scoped>
  .create_button {
    margin-bottom: 0.5rem;
    color: #6750A4;
    background: #fff;
    font-family: Roboto,serif;
  }
</style>