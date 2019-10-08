
<template>
  <q-page>
    <h3 class="title">Cartografia da Cultura</h3>
    <div class="map" style="">
      <l-map></l-map>
      <login-card class="my-card"></login-card>
      <button-card class="stcomp"></button-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="stylus" scoped>
  .title {
    position: absolute;
    top: 0px;
    left: 30px;
    margin: 0px;
  }
  .my-card {
    width: 300px; height: 100px;
    position: absolute;
    top: -20px;
    left: 10px;
  }
  .stcomp {
    background-color: orange;
    width: 100px; height: 100px;
    position: absolute;
    top: -20px;
    left: 820px;
  }
  .map {
    position: relative;
    top: 70px;
    left: 30px;
    width: 1300px;
    height:550px;
    border: 1px solid black;
  }
</style>
