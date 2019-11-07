
<template>
  <q-page style="background-color: white; width: 100%;">
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
      <map-import class="map">
      </map-import>
    </div>
    <div class="body">
      <div class="nav-container">
      <s-card class="l-menu"></s-card>
      <a-card class="l-menu"></a-card>
      <d-card class="l-menu"></d-card>
      <login class="l-menu"></login>
      </div>
      <div class="filter-container">
        <f-card class="r-menu"></f-card>
      </div>
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
  z-index: 0;
  height: 550px;
  width: 100%;
}
.map-container {
  background-color: none;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 0;
}
.body {
  top: 0px;
}
.nav-container {
  background-color: none;
  position:absolute;
  transform: translateY(-50%);
  float: left;
}
.filter-container {
  position: relative;
  background-color: none;
  float: right;
}
.header-container {
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  height: 6.25rem; // 100px
  background-color: black;
}
.l-menu {
  font-size: 40px;
  text-decoration: none;
  background: none;
  color: black;
  letter-spacing: 0px;
}
.r-menu {
  font-size: 40px;
  display: block;
  text-decoration: none;
  background: none;
  color: black;
  letter-spacing: 0px;
  float: right;
  top: 50%;
}
.forum-info {
  font-family: BITWONDER;
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
