<template lang="pug">
  .text-field
    input(
      id="inputText"
      :class="{'filled': value}"
      type="text"
      ref="inputText"
      :value="value"
      @input="updateValue"
      :required="required"
    )
    label(for="inputText") {{ label }}
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
      this.$emit("input", this.$refs.inputText.value);
    }
  }
};
</script>

<style lang="sass" scoped>
  @import "../../sass/textField.sass"
</style>
