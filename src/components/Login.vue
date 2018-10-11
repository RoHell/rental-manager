<template lang="pug">
  .login
    button(@click="$router.push({name: 'items'})") Przejdz do menagera
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="sass" scoped>
  .login
    display: flex
    flex-direction: column
    margin-top: 100px
    align-items: center
    justify-content: center
</style>
