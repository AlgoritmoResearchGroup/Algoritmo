<template>
  <div>
    <q-buttom rounded class="decision-buttom" v-if="opemPerfil===false" @click="opemLogin = true, addUnderscore()" style="font-family: LEVEL">
      {{ addUnderscoreLogin + modalLogin }}
    </q-buttom>
    <div class="hidden-box" v-if="opemLogin">
      <q-card flat class="my-card" style="background-color: white; position: relative; margin-top: -10px; border-radius: 0px;">
        <q-item style="margin: 0px;">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="clear" @click="opemLogin = false, refactUnderscore()"></q-icon>
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-input v-model="userLogin" label="login" color="white" style="margin-left: 5px; width: 90%;"/>
        <q-input v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" hint="" style="margin: 5px; width: 90%;">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
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
    <q-buttom rounded class="decision-buttom" v-if="opemLogin===false && opemPerfil===true" @click="opemPerfil = true, closeBoxPerfil=true" style="font-family: LEVEL">
      {{ modalPerfil }}
    </q-buttom>
    <div class="hidden-box-perfil" v-if="opemPerfil && closeBoxPerfil">
      <q-card flat class="my-card" style="background-color: white; position: relative; margin-top: -10px; border-radius: 0px;">
        <q-item style="margin-left: 10px;">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="clear" @click="closeBoxPerfil = false"></q-icon>
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-btn color="white" text-color="black" label="Ver Perfil" style="margin: 0px;"/>
        <q-btn @click="opemPerfil=false" color="white" text-color="black" label="Logout" style="margin: 0px;"/>
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
      closeBoxPerfil: true,
      modalLogin: '___Login>',
      addUnderscoreLogin: '',
      modalPerfil: '_________PERFIL_>',
    };
  },
  methods: {
    addUnderscore() {
      this.addUnderscoreLogin = '________';
    },
    refactUnderscore() {
      this.addUnderscoreLogin = '';
    },
  },
};
</script>

<style scoped>
  .decision-buttom {
    font-size: 40px;
    background-color: none;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
  .hidden-box-enter {
    transform: translateX(100%);
  }
  .my-card {
    border-radius: 5px;
    width: 93%;
  }
</style>
