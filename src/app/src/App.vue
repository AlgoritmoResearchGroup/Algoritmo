<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="sass" scoped>
.column
  display: flex
  flex-direction: column

.align-center
  display: flex
  align-content: center
</style>
