<template>
  <div class="breadcrumpnav">
    <div>
      breadcrumps
      <router-link to="/existinglab">
        existing labs
      </router-link>
      <router-link to="/">
        main page
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped>
  .breadcrumpnav {
    background: aquamarine;
  }
</style>