<template>
<div>
  <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
  <b-modal id="modal-xl" size="xl" title="Template Editor"  @ok="handleOk">
    <div class="row">

    </div>
  </b-modal>
</div>
</template>

<script>
export default {
  name: "UploadImage"
}
</script>

<style scoped>

</style>