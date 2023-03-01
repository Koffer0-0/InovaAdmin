<template>
  <b-col col>
    <b-button pill variant="outline-secondary">Button</b-button>
  </b-col>
</template>

<script>
export default {
  name: "CreateButton",
  computed: {
    createButtonConfig() {
      const currentRoute = this.$route.path;
      if (currentRoute === '/builder/config') {
        return {
          text: 'New Lab',
          action: () => {
            // Do something for new lab
          }
        }
      } else if (currentRoute === '/builder/template') {
        return {
          text: 'New Lecture',
          action: () => {
            // Do something for new lecture
          }
        }
      } else {
        return {
          text: 'Create',
          action: () => {
            // Default action
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>