<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <FileExplorer :files="files" :openFile="openFile" />
      </div>
      <div class="col-md-8">
        <CodeEditor
            v-if="activeFile"
            :file="activeFile"
            :content="activeFile.content"
            :updateContent="updateContent"
        />
      </div>
    </div>
  </div>
</template>


<script>
import FileExplorer from "@/pages/FileExplorer.vue";
import CodeEditor from "@/pages/CodeEditor.vue";

export default {
  name: "FileEditor",
  components: {
    FileExplorer,
    CodeEditor
  },
  data() {
    return {
      files: [
        {
          name: "file1.yaml",
          path: "path/to/file1.yaml",
          content: "file1 content"
        },
        {
          name: "file2.yaml",
          path: "path/to/file2.yaml",
          content: "file2 content"
        },
        {
          name: "file3.yaml",
          path: "path/to/file3.yaml",
          content: "file3 content"
        }
      ],
      activeFile: null
    };
  },
  methods: {
    openFile(path) {
      this.activeFile = this.files.find(file => file.path === path);
    },
    updateContent(newContent) {
      this.activeFile.content = newContent;
    }
  }
};
</script>

<style scoped>

</style>