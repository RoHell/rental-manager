<template lang="pug">
  .rented-item
    .rented-item__equipment
      .rented-item__equipment__vessel {{ equipment.vessel }}
      .rented-item__equipment__accessories
        .rented-item__equipment__accessories__vests {{ equipment.vests }}
        .rented-item__equipment__accessories__paddles {{ equipment.paddles }}
    .rented-item__details
      .rented-item__details__rentier {{ rentierFullName }}
      .rented-item__details__timing {{ timing.start }}
      .rented-item__details__payment
        .rented-item__details__payment__fee {{ computedPaymentFee }}
        .rented-item__details__payment__paid {{ computedPaymentPaid }}
        .rented-item__details__payment__to-pay {{ computedPaymentToPay }}
</template>

<script>
export default {
  props: {
    rentier: {
      type: Object,
      default: () => ({})
    },
    timing: {
      type: Object,
      default: () => ({})
    },
    equipment: {
      type: Object,
      default: () => ({})
    },
    payment: {
      type: Object,
      default: () => ({})
    },
    comment: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    isRentierNameProvided() {
      return this.rentier && (this.rentier.firstName || this.rentierLastName);
    },
    rentierFullName() {
      return this.isRentierNameProvided
        ? `${this.rentier.firstName} ${this.rentierLastName}`
        : "Anonimowy";
    },
    computedPaymentFee() {
      return this.payment && this.payment.fee ? `${this.payment.fee} PLN` : "";
    },
    computedPaymentPaid() {
      return this.payment && this.payment.paid
        ? `${this.payment.paid} PLN`
        : "";
    },
    computedPaymentToPay() {
      return this.payment && this.payment.toPay
        ? `${this.payment.toPay} PLN`
        : "";
    }
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
