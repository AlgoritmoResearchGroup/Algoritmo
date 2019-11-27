<template>
  <q-layout>
    <div class="header-container">
      <div class="col-l">
        <span class="forum-info">Fórum Municipal</span>
        <span class="forum-info">De Cultura</span>
        <span class="forum-info">De Campo Grande</span>
      </div>
      <div class="col-r">
        <span class="title">CARTOGRAFIA DA CULTURA</span>
        <span class="text">cultura em movimento</span>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
  },
};
</script>

<style lang="sass" scoped>

.header-container
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  top: 0;
  height: 7rem; // 100px
  background-color: #0E0B16;

.col-l
  height: 100%;
  flex-basis: 20%;
  display: flex;
  flex-direction: column;

.col-r
  height: 100%;
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

.forum-info
  margin-left: 30px
  margin-top: 5px
  font-family: 'Fredoka One', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  color: #E7DFDD;

.text
  font-family: verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #E7DFDD;
  margin-top: 0px;

.title
  height: 70%;
  font-family: 'Permanent Marker';
  font-style: normal;
  font-size: 70px;
  font-weight: normal;
  color: #E7DFDD;
 </style>
