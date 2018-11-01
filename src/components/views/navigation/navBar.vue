<template lang="pug">
.nav-bar
  .nav-bar__menu menu
  .nav-bar__logo logo
  .nav-bar__time {{ time }}
</template>

<script>
import menuItems from "../../../utils/constants/menuItems";
import clock from "../../mixins/clockMixin";

export default {
  mixins: [clock],
  data() {
    return {
      menuItems
    };
  }
};
</script>

<style lang="sass" scoped>
.nav-bar
  height: 60px
  width: 100%
  display: flex
  align-items: center
  color: #ffffff
  justify-content: space-between
  top: 0
  background: #515151
  padding: 0 10px
  .nav-bar__logo
    padding: 0 10px
  .nav-bar__time
    font-family: monospace
    font-size: 24px
</style>
