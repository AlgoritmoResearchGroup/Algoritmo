
<template>
  <q-page style="background-color: white">
    <div class="title-container">
      <a class="pre-title">Fórum de Cultura Campo Grande</a>
      <a class="title">CARTOGRAFIA DA CULTURA</a>
    </div>
    <div class="map-container" style="">
      <map-import></map-import>
    </div>
    <div class="nav-container">
        <a > SOBRE <span>S</span></a>
        <a > AGENDA <span>A</span></a>
        <a > LOGIN <span>L</span></a>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="stylus" scoped>
  .nav-container {
    position:absolute;
    margin-top: 100px;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav-container a{
    display: block;
    text-decoration: none;
    background: #fff;
    color: black;
    padding: 15px 0px 15px 10px;
    margin: 5px;
    width: 150px;
    letter-spacing: 1.5px;
    box-shadow: 2px 2px 16px 0px rgba(0,0,0,0.75);
    position: relative;
    margin-left: -90px;
    transition: 0.5s  ease;
  }
  .nav-container a:hover {
    margin-left: 0px;
  }
  .nav-container a span:hover {
    margin-left: -70px;
  }
  .nav-container a span{
    float: right;
    width: 70px;
    line-height: 50px;
    height: 100%;
    text-align: center;
    color: #fff;
    background: black;
    position: absolute;
    right: 0px;
    top: 0px;
    text-size: 20px;
  }
  .title-container {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
  }
  .pre-title {
    margin-top: 20px;
    width: 180px;
    margin-left: 20px;
    font-family: roboto;
    font-size: 18px;
  }
  .title {
    margin-top: 20px;
    width: 700px;
    font-family: Level;
    font-size: 40px;
    text-decoration: none;
  }
  .my-card {
    width: 300px; height: 100px;
    position: absolute;
    top: -20px;
    left: 10px;
    z-index: 5;
  }
  .stcomp {
    background-color: black;
    width: 100px; height: 100px;
    position: absolute;
    top: -20px;
    left: 820px;
  }
  .map-container {
    position: relative;
    top: 40px;
    left: 0px;
    z-index: 0;
  }
</style>
