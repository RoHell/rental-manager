<template lang="pug">
  .rented-items
    rented-item(
      v-for="item in getItems"
      :key="item.id"
      :item="item"
    )
</template>

<script>
import { mapGetters } from "vuex";
import RentedItem from "./RentedItem.vue";
import { create } from "../navigation/footerActions";

export default {
  components: { RentedItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("equipment", ["getItems"])
  },
  mounted() {
    this.$emit("footerAction", create);
  }
};
</script>

<style lang="sass" scoped>
</style>
