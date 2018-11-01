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

export default {
  components: { RentedItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("equipment", ["getItems"])
  }
};
</script>

<style lang="sass" scoped>
</style>
