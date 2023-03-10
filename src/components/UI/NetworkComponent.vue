<template>
  <b-form inline>
      <b-button block class="collapse-btn" @click="toggleForm">
        Add Network
        <b-icon icon="plus" class="icon"></b-icon>
      </b-button>
    <div class="container center">
      <div v-if="showInputs" class="row network-inputs">
        <div>
          <b-icon icon="plus" class="add-btn" @click="createNetwork"></b-icon>
        </div>
        <div>
        <b-form-input id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      placeholder="Network Name:"
                      v-model="name"
                      required
        ></b-form-input>
        <b-form-input id="inline-form-input-username"
                      placeholder="Network Address..."
                      v-model="address"
                      required></b-form-input>
        </div>
      </div>
      <div v-for="(network, index) in networks" :key="index" class="row network-inputs">
        <div>
          <b-icon icon="trash" class="add-btn" @click="deleteNetwork(index)"></b-icon>
        </div>
        <b-form-input id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      placeholder="Network Name:"
                      v-model="network.name"
                      required
        ></b-form-input>
        <b-form-input id="inline-form-input-username"
                      placeholder="Network Address..."
                      v-model="network.address"
                      required></b-form-input>
      </div>
    </div>

  </b-form>
</template>

<script>
export default {
  name: "NetworkComponent",
  data() {
    return {
      name: '',
      address: '',
      showInputs: false,
      networks: [],
    }
  },
  methods: {
    toggleForm() {
      this.showInputs = !this.showInputs;
    },
    createNetwork() {
      const newNetwork = {
        name: this.name,
        address: this.address,
      };
      this.networks.push(newNetwork);
      this.name = "";
      this.address = "";
    },
    deleteNetwork(index) {
      this.networks.splice(index, 1);
    },
  }
}
</script>

<style scoped>
.collapse-btn {
  background-color: #F3F3F3;
  color: black;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;
  border: none;
}

.network-inputs {

}
</style>