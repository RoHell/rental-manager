<template lang="pug">
  .item-view
    span {{ getSelectedItem }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("equipment", ["getSelectedItem"])
  }
};
</script>

<style lang="sass" scoped>
</style>
