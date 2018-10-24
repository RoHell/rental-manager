<template lang="pug">
  .rental-create
    icon(
      icon="close"
      color="#515151"
      size="26px"
      @click="close")
    form.rental-create__form(@submit.prevent="onSubmit")
      label(for="name") Nazwisko
      input(
        id="name"
        v-model="name"
        type="text")
      label(for="vesselType") Sprzęt
      select(
        id="vesselType"
        v-model="vesselType")
        option(
          v-for="vessel in vessels"
          :key="vessel.code"
          :value="vessel.name") {{ vessel.name }}
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
import icon from "../../commons/icon.vue";
import vessels from "../../../utils/constants/vessels";

export default {
  components: { icon },
  props: {
    submitRental: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      vessels,
      name: "",
      vesselType: ""
    };
  },
  computed: {
    singleRental() {
      return {
        id: 13,
        rentier: {
          name: this.name
        },
        timing: {
          start: "11:05",
          expectedDuration: 1,
          actualDuration: 2
        },
        equipment: {
          vessel: this.vesselType,
          amount: 1,
          vests: 2,
          paddles: 2
        },
        payment: {
          fee: 30,
          paid: 30,
          toPay: 30
        },
        comment: "Wędkarze"
      };
    }
  },
  watch: {
    submitRental() {
      // this.createRental(this.singleRental);
    }
  },
  methods: {
    onSubmit() {
      // console.log('form', form);
    },
    close() {
      this.$router.push({ name: "items" });
    }
  }
};
</script>

<style lang="sass" scoped>
  .rental-create
    display: flex
    flex-direction: column
    padding: 20px 0
    width: 100%
    .rh-icon
      display: flex
      align-self: flex-end
      cursor: pointer
      opacity: 0.8
      &:hover
        opacity: 1
    .rental-create__form
      display: flex
      width: 100%
      flex-direction: column
      justify-content: space-between
</style>
