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
      label(for="vessel") Sprzęt
      select(
        id="vessel"
        v-model="vessel"
      )
        option(
          v-for="vessel in vessels"
          :key="vessel.code"
          :value="vessel.name"
        ) {{ vessel.name }}
</template>

<script>
import { mapActions } from "vuex";
import icon from "../../commons/icon.vue";
import vessels from "../../../utils/constants/vessels";
import clock from "../../mixins/clockMixin";
import { submit } from "../navigation/footerActions";

export default {
  components: { icon },
  mixins: [clock],
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
      this.prepareItem(this.singleRental);
      this.$emit("disabled", !val);
    }
  },
  mounted() {
    this.$emit("disabled", true);
    this.$emit("footerAction", submit);
  },
  methods: {
    ...mapActions("equipment", ["prepareItem"]),
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
      label
        font-size: 0.8rem
        color: #999999
        margin-bottom: 5px
        transition: 0.2s
      input, select
        border: none
        border-bottom: 1px solid #ccc
        outline: none
        font-size: 1rem
        color: #333333
        letter-spacing: 0.8px
        transition: 0.2s
        &:focus
          border-color: #666666
</style>
