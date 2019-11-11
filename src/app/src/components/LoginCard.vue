<template>
  <div class="login-field">
    <q-buttom rounded class="decision-buttom" v-if="opemPerfil===false" @click="opemLogin = true, addUnderscoreL()" style="font-family: LEVEL">
      {{ addUnderscoreLogin + modalLogin }}
    </q-buttom>
    <div class="card-decision-button" v-if="opemLogin">
      <q-card flat class="my-card" style="background-color: white; position: relative; margin-top: -10px; border-radius: 0px; max-width: 240px;">
        <q-item style="margin-left: 70%;">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="clear" @click="opemLogin = false, refactUnderscoreL()"></q-icon>
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-input v-model="userLogin" label="login" color="white" style="margin-left: 5px; width: 90%;"/>
        <q-input v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" hint="" style="margin: 5px; width: 90%;">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              size="20px"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn @click="opemPerfil=true, opemLogin=false" color="white" text-color="black" label="Logar" style="margin: 0px;"/>
        <q-btn color="white" text-color="black" label="Cadastre-se" style="margin-left: 10px;"/>
      </q-card>
    </div>
    <!-- perfil-->
    <q-buttom rounded class="decision-buttom" v-if="opemLogin===false && opemPerfil===true" @click="opemBoxPerfil = true, addUnderscoreP()" style="font-family: LEVEL">
      {{ addUnderscorePerfil + modalPerfil }}
    </q-buttom>
    <div class="hidden-box-perfil" v-if="opemBoxPerfil">
      <q-card flat class="my-card" style="background-color: white; position: relative; margin-top: -10px; border-radius: 0px;">
        <q-item style="margin-left: 10px;">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="clear" @click="opemBoxPerfil = false, refactUnderscoreP()"></q-icon>
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-btn color="white" text-color="black" label="Ver Perfil" style="margin: 0px;"/>
        <q-btn @click="opemPerfil=false, opemBoxPerfil=false, refactUnderscoreL(), refactUnderscoreP()" color="white" text-color="black" label="Logout" style="margin: 0px;"/>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCard',
  data() {
    return {
      isPwd: true,
      userLogin: '',
      password: '',
      opemLogin: false,
      opemPerfil: false,
      opemBoxPerfil: false,
      closeBoxPerfil: true,
      modalLogin: '___Login>',
      addUnderscoreLogin: '',
      modalPerfil: '___PERFIL_>',
      addUnderscorePerfil: '',
    };
  },
  methods: {
    addUnderscoreL() {
      this.addUnderscoreLogin = '________';
    },
    addUnderscoreP() {
      this.addUnderscorePerfil = '_____';
    },
    refactUnderscoreL() {
      this.addUnderscoreLogin = '';
    },
    refactUnderscoreP() {
      this.addUnderscorePerfil = '';
    },
  },
};
</script>

<style scoped>
  .decision-buttom {
    font-size: 40px;
    background-color: none;
    position: relative;
    left: 0px;
    bottom: 0px;
    z-index: 1;
  }
  .my-card {
    border-radius: 5px;
    width: 93%;
  }
</style>
