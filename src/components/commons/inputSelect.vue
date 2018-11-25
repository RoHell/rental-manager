<template lang="pug">
  .text-field
    select(
      id="inputSelect"
      ref="inputSelect"
      :class="{'filled': value}"
      :value="value"
      @input="updateValue"
      :required="required"
    )
      option(
        v-for="option in options"
        :key="option.code"
      ) {{ option.name }}
    label(for="inputSelect") {{ label }}
    .bar
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => ({})
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    updateValue() {
      this.$emit("input", this.$refs.inputSelect.value);
    }
  }
};
</script>

<style lang="sass" scoped>
  @import "../../sass/textField.sass"
</style>
