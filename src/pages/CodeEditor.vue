<template>
  <div>
    <div ref="monacoEditor" style="height: 500px;"></div>
  </div>
</template>

<script>

import * as monaco from 'monaco-editor';
export default {
  name: "CodeEditor",
  props: {
    file: {
      type: Object,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    updateContent: {
      type: Function,
      required: true
    }
  },
  mounted() {
    const editor = monaco.editor.create(this.$refs.monacoEditor, {
      value: this.content,
      language: "yaml",
      theme: "vs-dark"
    });

    editor.getModel().onDidChangeContent(() => {
      this.updateContent(editor.getValue());
    });
  }
};
</script>

<style scoped>

</style>