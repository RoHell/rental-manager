<template lang="pug">
  .rentals
    router-view(
      @footerAction="onFooterAction"
      @disabled="actionDisabled"
    )
    footer-bar(
      :footer-action="footerAction"
      :disabled="isFooterActionDisabled"
    )
</template>

<script>
import footerBar from "../navigation/footerBar.vue";

export default {
  components: { footerBar },
  data() {
    return {
      footerAction: {},
      isFooterActionDisabled: false
    };
  },
  methods: {
    onFooterAction(action) {
      this.footerAction = action;
    },
    actionDisabled(isDisabled) {
      this.isFooterActionDisabled = isDisabled;
    }
  }
};
</script>

<style lang="sass" scoped>
  .rentals
    margin-bottom: 20px
</style>
