<template>
  <div>
    <router-link to="/dubplicate">
      <b-icon icon="files" variant="dark"></b-icon>
    </router-link>
    <router-link to="/delete">
      <b-icon icon="trash" variant="danger"></b-icon>
    </router-link>
    <router-link to="/edit">
      <b-icon icon="pencil" variant="dark"></b-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ActionColumn"
}
</script>

<style scoped>

</style>