<template>
  <form @submit.prevent="handleSubmit">
  <div class="row">
      <div class="col-md-9">
        <h5>Lab</h5>
        <DataInputFields
            v-model="formData"
            form-type="lab" placeholder-name="Lab Name" placeholder-description="Lab Description" :form-data="formData">
        </DataInputFields>
        <NetworkComponent>

        </NetworkComponent>
        <CollapseSection select-text="Select Images">

        </CollapseSection>
      </div>
      <div class="col-md-3">
        <CommonButton
            buttonText="Configure"
            @click="handleAction('submit')"
            action="submit"
            type="submit"
        />
        <CommonButton
            buttonText="Publish"
            @click="handleAction('publish')"
            action="publish"
            type="submit"
        />
      </div>
  </div>
  </form>
</template>

<script>
import DataInputFields from "@/components/UI/DataInputFields.vue";
import CollapseSection from "@/components/UI/CollapseSection.vue";
import CommonButton from "@/components/UI/CommonButton.vue";
import NetworkComponent from "@/components/UI/NetworkComponent.vue";
// import axios from "axios";

export default {
  name: "NewLab",
  components: {NetworkComponent, CommonButton, CollapseSection, DataInputFields},
  data() {
    return {
      formData: { name: '', description: '' },
    };
  },
  methods: {
    handleAction(action) {
      console.log(`Action: ${action}`);
      this.submitForm();
    },
    handleSubmit() {
      this.submitForm();
    },
    submitForm() {
      // // submit the form data using Axios
      // axios.post('/api/submit-form', this.formData)
      //     .then(response => {
      //       console.log(response.data);
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });

      console.log(this.formData)
    },
  },
}
</script>

<style scoped>
h5 {
  font-weight: bold;
}

</style>