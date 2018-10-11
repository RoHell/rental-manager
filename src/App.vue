<template lang="pug">
  #app
    nav-bar
    view-template
</template>

<script>
import navBar from "./components/views/navigation/navBar.vue";
import viewTemplate from "./components/templates/viewTemplate.vue";

export default {
  components: {
    navBar,
    viewTemplate
  }
};
</script>


<style lang="sass">
html, body
  margin: 0
  padding: 0
  overflow: hidden
  *
    box-sizing: border-box
body
  background: #fff
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: flex
  flex-direction: column
  align-items: center
  min-height: 100vh
</style>
