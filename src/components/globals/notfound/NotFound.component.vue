<template>
  <div>
    NotFound
  </div>
</template>

<script>
import NoFooterLayoutVue from '../../../layouts/NoFooterLayout.vue';
export default {
  name: "NotFound",
  created() {
      this.$emit('update:layout', NoFooterLayoutVue);
  },
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>