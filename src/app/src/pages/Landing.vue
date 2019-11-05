
<template>
  <q-page style="background-color: white">
    <div class="header-container">
      <div class="column">
        <span class="forum-info">Fórum Municipal</span>
        <span class="forum-info">De Cultura</span>
        <span class="forum-info">De Campo Grande</span>
        <span class="text">cultura em movimento</span>
      </div>
      <span class="title">CARTOGRAFIA DA CULTURA</span>
    </div>
    <div class="map-container" style="">
      <map-import class="map"></map-import>
    </div>
    <div class="nav-container">
        <div class="menu"> SOBRE> </div>
        <div class="menu"> AGENDA> </div>
        <div class="menu"> DEBATE> </div>
        <div class="menu"> LOGIN> </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>


<style lang="stylus" scoped>

.map {
  height: 550px;
  width: 100%;
}
.nav-container {
  position:absolute;
  top: 70%;
  transform: translateY(-50%);
}
.header-container {
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  height: 6.25rem; // 100px
  background-color: black;
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
  top: 0px;
  left: 0px;
  z-index: 0;
}
.menu {
  font-family: LEVEL;
  font-size: 40px;
  display: block;
  text-decoration: none;
  background: none;
  color: black;
  margin: 10px;
  letter-spacing: 1.5px;
  position: relative;
  margin-left: 0px;
  }
.forum-info {
  font-family: CREAM;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  color: white;
}
.column {
  display: flex;
  flex-direction: column;
  width: 150px;
  flex-wrap: nowrap;
  margin-left: 20px;
}
.text {
  font-family: CREAM;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  color: white;
}
.title {
  margin-left: 100px;
  font-family: LEVEL;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  color: white;
}
</style>
