<template lang="pug">
  .rented-item(@click="showItem")
    .rented-item__equipment
      .rented-item__equipment__vessel {{ item.equipment.vessel }}
      .rented-item__equipment__accessories
        .rented-item__equipment__accessories__vests {{ item.equipment.vests }}
        .rented-item__equipment__accessories__paddles {{ item.equipment.paddles }}
    .rented-item__details
      .rented-item__details__rentier {{ item.rentier.name }}
      .rented-item__details__timing {{ item.timing.start }}
      .rented-item__details__payment
        .rented-item__details__payment__fee {{ computedPaymentFee }}
        .rented-item__details__payment__paid {{ computedPaymentPaid }}
        .rented-item__details__payment__to-pay {{ computedPaymentToPay }}
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
  },
  computed: {
    computedPaymentFee() {
      return this.item.payment && this.item.payment.fee
        ? `${this.item.payment.fee} PLN`
        : "";
    },
    computedPaymentPaid() {
      return this.item.payment && this.item.payment.paid
        ? `${this.item.payment.paid} PLN`
        : "";
    },
    computedPaymentToPay() {
      return this.item.payment && this.item.payment.toPay
        ? `${this.item.payment.toPay} PLN`
        : "";
    }
  },
  methods: {
    showItem() {}
  }
};
</script>

<style lang="sass" scoped>
$border: 1px solid #515151

.rented-item
  width: 100%
  display: flex
  border-bottom: 1px solid #cccccc
  // margin-bottom: 20px
  &__equipment
    width: 30%
    display: flex
    flex-direction: column
    // border-right: $border
    &__vessel
      padding: 10px
      // border-bottom: $border
      flex: 1
    &__accessories
      display: flex
      &__vests
        // border-right: $border
      &__vests,
      &__paddles
        padding: 10px
        flex: 1
  &__details
    width: 70%
    display: flex
    flex-direction: column
    padding: 10px
    &__rentier
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      padding-bottom: 10px
    &__timing
      padding-bottom: 10px
    &__payment
      display: flex
      justify-content: space-between
      align-items: center
      &__fee, &__paid, &__to-pay
        flex: 1
      &__fee
        text-align: left
      &__paid
        text-align: center
      &__to-pay
        text-align: right
</style>
