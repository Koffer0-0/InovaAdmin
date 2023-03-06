<template>
  <div>
    <div>
      <b-nav pills>
        <b-nav-item @click="activateTab('data1')">Apps & Services</b-nav-item>
        <b-nav-item @click="activateTab('data2')">Scenarios</b-nav-item>
      </b-nav>
    </div>
  </div>

</template>

<script>
export default {

  name: "TabComponent",
  methods: {
    activateTab(tabName) {
      this.$emit('tab-activated', tabName);
    }
  }
}

</script>

<style scoped>
</style>