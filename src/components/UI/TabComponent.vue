<template>
  <div>
    <div class="tabs">
      <b-nav pills>
        <b-nav-item  v-for="tab in tabs" :key="tab.id" :class="{ active: activeTab === tab.id }" @click="activateTab(tab.id)">
          {{ tab.title }}
        </b-nav-item>
      </b-nav>
    </div>
  </div>

</template>

<script>
export default {

  name: "TabComponent",
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: this.tabs[0].id,
    }
  },
  methods: {
    activateTab(tabId) {
      this.$emit('tab-activated', tabId);
      this.activeTab = tabId
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