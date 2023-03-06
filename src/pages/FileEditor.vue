<template>
  <div>
    <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
    <b-modal id="modal-xl" size="xl" title="Template Editor" class="border-0"
             header-text-variant="light"
             header-bg-variant="dark"
             body-bg-variant="dark"
             body-text-variant="light"
             footer-bg-variant="dark"
      fokter>
      <div class="row">
        <div class="col-md-3">
          <FileExplorer :files="files" :openFile="openFile"/>
        </div>
        <div class="col-md-9">
          <CodeEditor
              v-if="activeFile"
              :file="activeFile"
              :content="activeFile.content"
              :updateContent="updateContent"
              :key="activeFile.path"
          />
        </div>
      </div>
    </b-modal>
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
          content: "---\n" +
              "- hosts: all\n" +
              "  become: yes\n" +
              "  vars:\n" +
              "    page_title: My Landing Page\n" +
              "    page_description: This is my landing page description.\n" +
              "  tasks:\n" +
              "    - name: Install Nginx\n" +
              "      apt:\n" +
              "        name: nginx\n" +
              "        state: latest\n" +
              "\n" +
              "    - name: Apply Page Template\n" +
              "      template:\n" +
              "        src: files/landing-page.html.j2\n" +
              "        dest: /var/www/html/index.nginx-debian.html\n"
        },
        {
          name: "file2.yaml",
          path: "path/to/file2.yaml",
          content: "---\n" +
              "- hosts: not sve\n" +
              "  become: yes\n" +
              "  vars:\n" +
              "    page_title: My Landing Page\n" +
              "    page_description: This is my landing page description.\n" +
              "  tasks:\n" +
              "    - name: Install Nginx\n" +
              "      apt:\n" +
              "        name: nginx\n" +
              "        state: latest\n" +
              "\n" +
              "    - name: Apply Page Template\n" +
              "      template:\n" +
              "        src: files/landing-page.html.j2\n" +
              "        dest: /var/www/html/index.nginx-debian.html\n"
        },
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
  },
  watch: {
    activeFile(newActiveFile) {
      if (newActiveFile) {
        // update the Monaco Editor component when the active file changes
        this.$nextTick(() => {
          const editor = this.$refs.codeEditor;
          editor.updateEditorContent(newActiveFile.content);
        });
      }
    }
  }
};
</script>

<style scoped>
  .editorPopUp {
    color: #222222;
    background-color: #222222;
  }
  .b-modal {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .b-modal .modal-dialog {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
</style>