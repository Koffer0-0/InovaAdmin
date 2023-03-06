<template>
  <div class="mx-2">
    <ul>
      <li v-for="(file, index) in files" :key="index">
        <a href="#" @click="openFile(file.path)" class="files">
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
  a.files {
    color: white;
    text-decoration-line: none;
  }
</style>