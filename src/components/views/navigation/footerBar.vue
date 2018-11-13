<template lang="pug">
  .footer-bar
    .footer-bar__menu
    .footer-bar__action(
      @click="onAction"
      :class="{'footer-bar__action--disabled': isDisabled}"
    )
      icon(
        :icon="actionIcon"
        :disabled="isDisabled"
        size="40px"
      )
</template>

<script>
import { mapActions } from "vuex";
import icon from "../../commons/icon.vue";

export default {
  components: { icon },
  props: {
    footerAction: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    actionIcon() {
      return this.footerAction && this.footerAction.icon;
    },
    isDisabled() {
      return this.disabled || (this.footerAction && this.footerAction.disabled);
    }
  },
  methods: {
    ...mapActions("equipment", ["addPreparedItem"]),
    async onAction() {
      if (this.footerAction.action === "SUBMIT") {
        try {
          await this.addPreparedItem();
        } catch (e) {
          console.error(e);
        }
      }
      this.$router.push({ name: this.footerAction.route });
    }
  }
};
</script>

<style lang="sass" scoped>
  .footer-bar
    position: fixed
    display: flex
    align-items: center
    bottom: 0
    left: 0
    right: 0
    height: 60px
    border-top: 1px solid #ccc
    background: #515151
    .footer-bar__action
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      bottom: 5px
      left: calc(50% - 38px)
      width: 76px
      height: 76px
      border-radius: 50%
      background: #ffffff
      border: solid #515151
      border-width: 4px
      transition: 0.2s
      cursor: pointer
      &:hover
        border-width: 3px
    .footer-bar__action--disabled
      pointer-events: none
</style>
