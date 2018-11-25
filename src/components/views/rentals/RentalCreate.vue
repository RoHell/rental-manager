<template lang="pug">
  .rental-create
    icon(
      icon="close"
      color="#515151"
      size="26px"
      @click="close"
    )
    .rental-create__form
      input-text(label="Nazwisko" v-model="name" required)
      input-select(label="Sprzęt" v-model="vessel" :options="vessels" key="code" required)
      //- label(for="vessel") Sprzęt
      //- select(
      //-   id="vessel"
      //-   v-model="vessel"
      //- )
      //-   option(
      //-     v-for="vessel in vessels"
      //-     :key="vessel.code"
      //-   ) {{ vessel.name }}
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import icon from "../../commons/icon.vue";
import vessels from "../../../utils/constants/vessels";
import clock from "../../mixins/clockMixin";
import inputText from "../../commons/inputText.vue";
import inputSelect from "../../commons/inputSelect.vue";

export default {
  components: { icon, inputText, inputSelect },
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
