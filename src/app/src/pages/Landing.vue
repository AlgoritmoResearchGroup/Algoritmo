
<template>
  <q-page style="background-color: white; width: 100%;">
    <div class="body">
      <div class="map-container" style="">
        <map-import class="map">
        </map-import>
      </div>
      <div class="nav-container">
        <q-list>
          <q-expansion-item class="menu" popup default-opened :header-style="{ backgroundColor: '#7FFFD4'}" style="width: 250px;">
            <template v-slot:header>
              <q-item-section>
                <span class="title-menu">SOBRE</span>
              </q-item-section>
            </template>
            <q-separator />
            <q-card>
              <q-card-section>
                <div class="column">
                  <router-link class="link" to="/About">A PLATAFORMA</router-link>
                  <a class="link" href=""> O FÓRUM </a>
                  <router-link class="link" to="/Terms" style="">NOSSOS TERMOS</router-link>
                  <router-link class="link" to="/Faq">FAQ</router-link>
                  <div class="row" >
                    <q-icon  color="white" name="img:assets/acebook_rounded.png" style="font-size: 4em"/>
                    <q-icon color="white" name="img:~/assets/images/instagram_rounded.png" style="font-size: 4em"/>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item class="menu" popup :header-style="{ backgroundColor: '#F0E68C'}" style="width: 220px;">
            <template v-slot:header>
              <q-item-section>
                <span class="title-menu">AGENDA</span>
              </q-item-section>
            </template>
            <q-separator />
            <q-card>
              <q-card-section>
                <ul style="list-style: none;">
                  <li>
                    evento x
                  </li>
                  <li>
                    evento y
                  </li>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item class="menu" popup :header-style="{ backgroundColor: '#FFA07A'}" style="width: 270px;">
            <template v-slot:header>
              <q-item-section>
                <span class="title-menu">LOGIN</span>
              </q-item-section>
            </template>
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
                <div class="btn-field column" style="width: 90%; align-content: center;">
                  <router-link class="link" to="/Recover">Esqueceu sua conta?</router-link>
                  <router-link class="link" to="/Register">Cadastre-se</router-link>
                  <q-btn outlined class="btn-logar" @click="opemPerfil=true, opemLogin=false" color="white" text-color="black" label="Logar" style="width: 70%; margin-top: 10px; "/>
                  <!--<q-btn outlined class="btn-cadastro" color="white" text-color="black" label="Cadastre-se" style="margin-left: 10px;"/>-->
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item class="menu" popup :header-style="{ backgroundColor: 'white'}" style="width: 200px;">
            <template v-slot:header>
              <q-item-section>
                <span class="title-menu">PERFIL</span>
              </q-item-section>
            </template>
            <q-separator />
            <q-card>
              <q-card-section>
                <div class="btn-field column" style="width: 90%; align-content: center;">
                  <q-btn outlined class="btn-perfil" to="/Profile" color="black" text-color="white" label="VER PERFIL" style="width: 70%; margin-top: 10px; "/>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="filter-container">
        <q-expansion-item class ="menu" popup :header-style="{ backgroundColor: '#98FB98'}" style="width: 220px">
          <template v-slot:header>
              <q-item-section>
                <span class="title-menu">FILTRO</span>
              </q-item-section>
            </template>
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


<style lang="sass" scoped>
.menu
  font-family: 'Fredoka One';
  font-weight: normal;
  min-width: 200px;

.link
  text-decoration: none;
  font-family: 'arial';
  font-weight: bold;
  font-size: 15px;
  color: black;

.link:hover
  color: orange;

.map
  z-index: 0;
  height: 550px;
  width: 100%;

.body
  position: relative;
  top: 0px;

.map-container
  background-color: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

.nav-container
  background-color: none;
  height: 100%;
  position: absolute;
  top: 20vh;
  left: 0;
  z-index: 1;

.filter-container
  position: absolute;
  top: 60vh;
  right: 0;
  background-color: none;

.column
  display: flex;
  flex-direction: column;
  width: 150px;
  flex-wrap: nowrap;
  margin-left: 20px;

</style>
