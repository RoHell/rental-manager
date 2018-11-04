<template lang="pug">
  .item-view
    pre {{ item }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
</style>
