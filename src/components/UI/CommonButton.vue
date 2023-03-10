<template>
  <div class="commonButton">
    <b-col col>
      <b-button pill class="commonButton" type="submit" @click="handleClick">
        {{ buttonText }}
      </b-button>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    buttonText: {
      type: String,
      default: () => "Create Button",
    },
  },
  methods: {
    handleClick(event) {
      // prevent the default form submission behavior
      event.preventDefault();

      // emit an event to the parent component indicating that the button was clicked
      this.$emit('click', this.action);
    }
  }
};
</script>

<style scoped>
  .commonButton button {
    background-color: #FFFBFE;
    color: #1B1C1D;
    margin-bottom: 0.4rem;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>