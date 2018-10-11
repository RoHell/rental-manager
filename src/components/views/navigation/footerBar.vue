<template lang="pug">
  .footer-bar
    .footer-bar__menu
    .footer-bar__action(@click="onAction")
      icon(
        :icon="iconToggleView"
        color="#515151"
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
    ...mapGetters("equipment", ["getCreatedItem"]),
    iconToggleView() {
      return this.isItemsRoute ? "plus" : "check";
    },
    isItemsRoute() {
      return this.$route.name === "items";
    },
    isCreateItemRoute() {
      return this.$route.name === "create-item";
    }
  },
  methods: {
    ...mapActions("equipment", ["addItem"]),
    onAction() {
      if (this.isItemsRoute) {
        this.add();
      } else if (this.isCreateItemRoute) {
        this.submit();
      }
    },
    async submit() {
      try {
        await this.addItem(this.createdItem);
      } catch (e) {
        console.error(e);
      } finally {
        this.$router.push({ name: "items" });
      }
    },
    add() {
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
    .footer-bar__menu
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
</style>
