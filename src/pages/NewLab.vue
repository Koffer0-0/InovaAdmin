<template>
<!--  <form @submit.prevent="submit">-->
  <div class="row">
      <div class="col-md-9">

        <h5>Lab</h5>
        <DataInputFields
            v-model="formData" form-type="lab" name="Lab Name" description="Lab Description">
        </DataInputFields>
        <CollapseButton>

        </CollapseButton>
      </div>
      <div class="col-md-3">
        <CommonButton buttonText="Configure" @click="handleAction('submit')" action="submit">

        </CommonButton>
        <CommonButton buttonText="Publish" @click="handleAction('publish')" action="publish">

        </CommonButton>
      </div>
  </div>
<!--  </form>-->
</template>

<script>
import DataInputFields from "@/components/UI/DataInputFields.vue";
import CollapseButton from "@/components/UI/CollapseButton.vue";
import CommonButton from "@/components/UI/CommonButton.vue";
import axios from "axios";
export default {
  name: "NewLab",
  components: {CommonButton, CollapseButton, DataInputFields},
  methods: {
    submit() {
      axios.post('/your-url', {name: this.name})
          // .then(res => {
          //   // do something with res
          // })
          // .catch(err => { });
    },
    handleAction(action) {
      switch (action) {
        case 'submit':
          // handle submit action here
          console.log('Submit data:', this.formData);
          break;
        case 'publish':
          // handle publish action here
          console.log('Publish data:', this.formData);
          break;
          // add more cases for other actions here
      }
    },
  },
  data() {
    return {
      formData: {
        // initialize form data properties here
      },
    };
  },
}
</script>

<style scoped>
h5 {
  font-weight: bold;
}

</style>