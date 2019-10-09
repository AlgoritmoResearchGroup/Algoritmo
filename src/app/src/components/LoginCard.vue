<template>
  <div>
    <q-buttom rounded class="decision-buttom" @click="opemLogin = true" >
    </q-buttom>
    <div v-if="opemLogin">
      <q-card flat class="my-card" style="background-color: orange; position: relative; border-radius: 0px;">
        <q-item style="margin: 10px;">
        <q-item-section avatar>
          <q-avatar>
            <q-icon name="clear" @click="opemLogin = false"></q-icon>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Voltar</q-item-label>
        </q-item-section>
      </q-item>

      <q-input v-model="userLogin" label="login" style="margin: 20px; width: 250px;"/>
      <q-input v-model="password" label="senha" :type="isPwd ? 'password' : 'text'" hint="" style="margin: 20px; width: 250px;">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="white" text-color="black" label="Logar" style="margin: 20px;"/>
      <q-btn color="white" text-color="black" label="Cadastre-se" style="margin: 20px;"/>
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
    };
  },
};
</script>

<style scoped>
  .decision-buttom {
    width: 100px; height: 100px;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 10px;
  }
</style>
