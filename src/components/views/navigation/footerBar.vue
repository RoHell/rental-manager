<template lang="pug">
  .footer-bar
    .footer-bar__menu
    .footer-bar__action(
      @click="onAction"
      :class="{'footer-bar__action--disabled': isActionButtonDisabled}"
    )
      icon(
        :icon="iconToggleView"
        :color="iconColor"
        size="40px")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import icon from "../../commons/icon.vue";

export default {
  components: { icon },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("equipment", ["isDataProvided"]),
    iconToggleView() {
      return this.isItemsRoute ? "plus" : "check";
    },
    isItemsRoute() {
      return this.$route.name === "items";
    },
    isCreateItemRoute() {
      return this.$route.name === "create-item";
    },
    isActionButtonDisabled() {
      return this.isCreateItemRoute && !this.isDataProvided;
    },
    iconColor() {
      return this.isActionButtonDisabled ? "#999999" : "#515151";
    }
  },
  methods: {
    ...mapActions("equipment", ["addPreparedItem"]),
    onAction() {
      if (this.isItemsRoute) {
        this.prepareItem();
      } else {
        this.submitPreparedItem();
      }
    },
    async submitPreparedItem() {
      try {
        await this.addPreparedItem();
      } catch (e) {
        console.error(e);
      } finally {
        this.$router.push({ name: "items" });
      }
    },
    prepareItem() {
      this.$router.push({ name: "create-item" });
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
