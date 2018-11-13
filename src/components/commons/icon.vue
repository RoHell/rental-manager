<template lang="pug">
  .rh-icon(@click="$emit('click')" :class="{'rh-icon--disabled': disabled}")
    svg(
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="size"
      :height="size"
      viewBox="0 0 24 24")
      path(
        :fill="iconColor"
        :d="iconPath")
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#515151"
    },
    size: {
      type: [String, Number],
      default: "100%"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      iconPath: ""
    };
  },
  computed: {
    iconColor() {
      return this.disabled ? "#cccccc" : this.color;
    }
  },
  watch: {
    icon(iconName) {
      this.getIconPath(iconName);
    }
  },
  mounted() {
    this.getIconPath(this.icon);
  },
  methods: {
    async getIconPath(iconName) {
      const icon = await import(`../../utils/icons/${iconName}.js`);
      this.iconPath = icon.default;
    }
  }
};
</script>

<style lang="sass" scoped>
  .rh-icon--disabled
    pointer-events: none

</style>
