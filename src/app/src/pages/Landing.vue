
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
    <div class="body">
      <div class="map-container" style="">
        <map-import class="map">
        </map-import>
      </div>
      <div class="nav-container">
        <q-list>
          <q-expansion-item popup default-opened :header-style="{ backgroundColor: '#7FFFD4' }" icon="notes" label="SOBRE" caption="">
            <q-separator />
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet,
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item popup :header-style="{ backgroundColor: '#F0E68C'}" icon="font_download"  label="AGENDA" caption="">
            <q-separator />
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet,
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item popup :header-style="{ backgroundColor: '#FFA07A'}" :duration="400" icon="account_circle" label="LOGIN" caption="">
            <q-separator />
            <q-card>
              <q-card-section>
                <q-input outlined v-model="userLogin" label="login" style="margin: 10px; width: 90%;"/>
                <q-input outlined v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" hint="" style="margin: 10px; width: 90%; padding-bottom: 0px;">
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      size="20px"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <div class="btn-field" style="padding-bottom: 5px;">
                  <q-btn outlined class="btn-logar" @click="opemPerfil=true, opemLogin=false" color="white" text-color="black" label="Logar" style="margin-left: 10px; margin-top: -25px;"/>
                  <!--<q-btn outlined class="btn-cadastro" color="white" text-color="black" label="Cadastre-se" style="margin-left: 10px;"/>-->
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
    </q-list>
      </div>
      <div class="filter-container">
        <q-expansion-item popup :header-style="{ backgroundColor: '#98FB98'}" icon="bubble_chart" label="FILTRO" caption="">
            <q-separator />
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet,
              </q-card-section>
            </q-card>
          </q-expansion-item>
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
.body {
  position: relative;
  top: 0px;
}
.map-container {
  background-color: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.nav-container {
  background-color: none;
  height: 100%;
  position: absolute;
  top: 20vh;
  left: 0;
  z-index: 1;
}
.filter-container {
  position: absolute;
  top: 60vh;
  right: 0;
  background-color: none;
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
