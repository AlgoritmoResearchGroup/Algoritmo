<template>
  <q-layout>
    <div class="header-container">
      <div class="column">
        <span class="forum-info">Fórum Municipal</span>
        <span class="forum-info">De Cultura</span>
        <span class="forum-info">De Campo Grande</span>
        <span class="text">cultura em movimento</span>
      </div>
      <span class="title">CARTOGRAFIA DA CULTURA</span>
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
  position: relative;
  top: 0;
  height: 6.25rem; // 100px
  background-color: black;

.forum-info
  font-family: BITWONDER;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  color: white;

.text
  font-family: CREAM;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  color: white;

.title
  margin-left: 100px;
  font-family: LEVEL;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  color: white;
 </style>
