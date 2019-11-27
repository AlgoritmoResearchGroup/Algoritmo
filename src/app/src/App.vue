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
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');

.column
  display: flex
  flex-direction: column

.align-center
  display: flex
  align-content: center
</style>
