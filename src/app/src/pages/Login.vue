
<template>
  <q-page style="background-color: white">
    <h3 class="title">Cartografia da Cultura</h3>
    <div class="map-container" style="">
      <map-import></map-import>
    </div>
    <div class="nav-container">
        <a href="#"> SOBRE <span>S</span></a>
        <a href="#"> AGENDA <span>A</span></a>
        <a href="#"> LOGIN <span>L</span></a>
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
    color: #e74c3c;
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
  .nav-container a span{
    float: right;
    width: 70px;
    line-height: 50px;
    height: 100%;
    text-align: center;
    color: #fff;
    background: #cc4125ff;
    position: absolute;
    right: 0px;
    top: 0px;
    text-size: 20px;
  }
  .title {
    position: absolute;
    top: 0px;
    left: 200px;
    margin: 0px;
  }
  .my-card {
    width: 300px; height: 100px;
    position: absolute;
    top: -20px;
    left: 10px;
    z-index: 5;
  }
  .stcomp {
    background-color: orange;
    width: 100px; height: 100px;
    position: absolute;
    top: -20px;
    left: 820px;
  }
  .map-container {
    position: relative;
    top: 70px;
    left: 0px;
    z-index: 0;
  }
</style>
