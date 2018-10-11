<template lang="pug">
  .rh-icon(@click="$emit('click')")
    svg(
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :width="size"
      :height="size"
      viewBox="0 0 24 24")
      path(
        :fill="color"
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
      default: ""
    },
    size: {
      type: [String, Number],
      default: "100%"
    }
  },
  data() {
    return {
      iconPath: ""
    };
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

</style>
