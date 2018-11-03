<template lang="pug">
  .rental-create
    icon(
      icon="close"
      color="#515151"
      size="26px"
      @click="close"
    )
    .rental-create__form
      label(for="name") Nazwisko
      input(
        id="name"
        v-model="name"
        type="text"
      )
      label(for="vesselType") Sprzęt
      select(
        id="vesselType"
        v-model="vessel"
      )
        option(
          v-for="vessel in vessels"
          :key="vessel.code"
          :value="vessel.name"
        ) {{ vessel.name }}
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import icon from "../../commons/icon.vue";
import vessels from "../../../utils/constants/vessels";
import clock from "../../mixins/clockMixin";

export default {
  components: { icon },
  mixins: [clock],
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
      vessel: ""
    };
  },
  computed: {
    singleRental() {
      return {
        id: this.time,
        rentier: {
          name: this.name
        },
        timing: {
          start: this.time,
          expectedDuration: 1,
          actualDuration: 2
        },
        equipment: {
          vessel: this.vessel,
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
    },
    isBaseData() {
      return !!(this.name && this.vessel);
    }
  },
  watch: {
    isBaseData(val) {
      this.SET_PROVIDED_DATA_STATE(val);
      this.prepareItem(this.singleRental);
    }
  },
  methods: {
    ...mapActions("equipment", ["prepareItem"]),
    ...mapMutations("equipment", ["SET_PROVIDED_DATA_STATE"]),
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
      button
        padding: .625rem .9375rem
        margin: .625rem
</style>
