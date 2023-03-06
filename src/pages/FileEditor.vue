<template>
  <div>
    <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
    <b-modal id="modal-xl" size="xl" title="Template Editor"  @ok="handleOk">
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
    },
    handleOk() {
      this.$emit('do something');
    },
  },
};
</script>

<style >
#modal-xl {
  color: #FFFFFF;
}
#modal-xl .modal-content{
  background-color: #222222;
}
#modal-xl h5 {
  font-size: 16px;
  margin-left: 1rem;
  font-weight: 600;
}
#modal-xl .modal-header {
  border-bottom: 0px solid #dee2e6;
  border-top-left-radius: calc(0rem - 0px);
}

#modal-xl .modal-body {
  padding-top: 2rem;
}
#modal-xl .modal-footer {
  border-top: 0px solid #dee2e6;
  border-bottom-left-radius: calc(0rem - 0px);
}
#modal-xl .btn {
  background-color: #211E1E;
}
</style>