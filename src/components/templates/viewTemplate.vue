<template lang="pug">
  .view-template
    .view-template--content
      router-view
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/scrollbar.sass'
.view-template
  width: 100%
  height: calc(100vh - 120px)
  padding: 0 10px 0 15px
  overflow: auto
  visibility: hidden
  transition: 0.2s
  &:hover
    visibility: visible
    transition: 0s 0.2s
  &:focus
    visibility: visible
  .view-template--content
    visibility: visible
</style>
