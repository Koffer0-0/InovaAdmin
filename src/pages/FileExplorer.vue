<template>
  <div>
    <ul>
      <li v-for="(file, index) in files" :key="index">
        <a href="#" @click="openFile(file.path)">
          {{ file.name }}
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "FileExplorer",
  props: {
    files: {
      type: Array,
      required: true
    },
    openFile: {
      type: Function,
      required: true
    },
  },
}
</script>

<style scoped>

</style>