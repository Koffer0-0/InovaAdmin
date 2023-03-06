<template>
  <div>
    <div ref="monacoEditor" style="height: 450px;"></div>
  </div>
</template>

<script>

import * as monaco from 'monaco-editor';
import('monaco-themes/themes/Pastels on Dark.json')
    .then(data => {
      monaco.editor.defineTheme('espresso', data);
    })
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
      theme: "espresso"
    });

    editor.getModel().onDidChangeContent(() => {
      this.updateContent(editor.getValue());
    });
  },
};
</script>

<style scoped>

</style>