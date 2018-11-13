<template lang="pug">
  .item-view
    pre {{ item }}
</template>

<script>
import { back } from "../navigation/footerActions";
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$emit("footerAction", back);
  }
};
</script>

<style lang="sass" scoped>
</style>
