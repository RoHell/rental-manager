<template lang="pug">
  .rentals
    router-view
    footer-bar
</template>

<script>
import footerBar from "../navigation/footerBar.vue";

export default {
  components: { footerBar },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
  .rentals
    margin-bottom: 20px
</style>
