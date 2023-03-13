<template>
  <div class="mx-2">
    <ul class="list-unstyled">
      <li v-for="(file, index) in files" :key="index" @click="selectFile(file)" class="files"
      :class="{ 'selected-file': file === selectedFile }">
        <a href="#" @click="openFile(file.path)" class="files" :class="{ 'selected-file': file === selectedFile }">
          <b-icon icon="file-earmark-code"/>
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
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    selectFile(file) {
      this.selectedFile = file;
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

a.files {
  color: white;
  text-decoration-line: none;
}

ul {
  list-style: none;
  padding-top: 2rem;
}

li {
  padding-left: 2rem;
  width: 80%;
}

li.selected-file {
  padding-right: 20px;
  background-color: rgba(255, 255, 255, 0.1);
}

a.selected-file {
  padding-left: 20px;
}
</style>