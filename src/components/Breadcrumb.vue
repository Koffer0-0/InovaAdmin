<template>
  <div class="breadcrumbs">
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
      <b-breadcrumb-item active>Baz</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
import {BBreadcrumb, BBreadcrumbItem, BIcon} from "bootstrap-vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Breadcrumb",
  components: {BIcon, BBreadcrumbItem, BBreadcrumb}
}
</script>

<style scoped>

</style>