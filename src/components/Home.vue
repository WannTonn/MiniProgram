<template>
  <div>
      <a-header></a-header>
      <a-main></a-main>
      <a-footer></a-footer>
  </div>
</template>

<script>
import AHeader from "./Header.vue";
import AMain from "./Main.vue";
import AFooter from "./Footer.vue";

  export default {
      components: {
        AHeader,
        AMain,
        AFooter
      }
  }
</script>

<style scoped>

</style>