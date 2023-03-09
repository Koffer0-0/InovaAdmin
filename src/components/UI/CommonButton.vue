<template>
  <div class="commonButton">
    <b-col col>
      <b-button pill class="commonButton" @click="handleClick">
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
    action: {
      type: String,
      required: true,
    },
    computed: {
      buttonText() {
        switch (this.action) {
          case 'submit':
            return 'Submit';
          case 'publish':
            return 'Publish';
            // add more cases for other actions here
          default:
            return '';
        }
      },
    },
    methods: {
      handleClick() {
        switch (this.action) {
          case 'submit':
            this.$emit('submit');
            break;
          case 'publish':
            this.$emit('publish');
            break;
            // add more cases for other actions here
        }
      },
    },
  }
}
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