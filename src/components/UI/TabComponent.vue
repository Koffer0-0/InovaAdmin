<template>
  <div>
    <div class="tabs">
      <b-nav pills>
        <b-nav-item   :class="{ active: activeTab === 'data1' }" @click="activateTab('data1')">Apps & Services</b-nav-item>
        <b-nav-item :class="{ active: activeTab === 'data2' }" @click="activateTab('data2')">Scenarios</b-nav-item>
      </b-nav>
    </div>
  </div>

</template>

<script>
export default {

  name: "TabComponent",
  data() {
    return {
      activeTab: 'data1'
    }
  },
  methods: {
    activateTab(tabName) {
      this.$emit('tab-activated', tabName);
      this.activeTab = tabName
    }
  }
}

</script>

<style scoped>
/*.tabs{*/
/*  margin-bottom: 40px;*/
/*}*/
.nav-pills .nav-link {
  border-radius: 0;
}

.nav-link {
  padding: 1rem;
  width: 250px;
  text-align: center;
  background-color: #F3F3F3;
  color: #1B1C1D;
}

.active {
  background-color: #F3F3F3;
}
</style>