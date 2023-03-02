<template>
  <div class="row">
    <div class="col-md-9">
      <router-view>
        
      </router-view>
    </div>
    <div class="col-md-3">
      <CreateButton>

      </CreateButton>
    </div>
  </div>
</template>

<script>
import CreateButton from "@/components/UI/CreateButton.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components: {CreateButton}
}
</script>

<style scoped>

</style>