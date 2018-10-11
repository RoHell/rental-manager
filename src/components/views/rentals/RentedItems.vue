<template lang="pug">
  .rented-items
    rented-item(
      v-for="rentedItem in rentedItemsList"
      :key="rentedItem.id"
      :equipment="rentedItem.equipment"
      :rentier="rentedItem.rentier"
      :timing="rentedItem.timing"
      :payment="rentedItem.payment")
</template>

<script>
import RentedItem from "./RentedItem.vue";
import rentedItemsList from "../../../utils/mocks/rentedItemsList";

export default {
  components: { RentedItem },
  data() {
    return {
      rentedItemsList
    };
  },
  methods: {
    onAddCreatedItem(item) {
      this.rentedItemsList.push(item);
    }
  }
};
</script>

<style lang="sass" scoped>
  .rented-items
</style>
