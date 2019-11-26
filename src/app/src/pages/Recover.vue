<template>
  <div class="fixed-center">
    <q-btn outline to="/" color="white" text-color="black" style="width: 35%; margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
      <q-icon name="keyboard_arrow_left" style=""></q-icon>
      <span>Voltar ao Mapa</span>
    </q-btn>
    <div class="q-pa-md" style="width: 100%">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
        style="width: 600px;"
      >
        <q-step class="step1"
          :name="1"
          title="Encontre sua conta"
          icon="email"
          :done="step > 1"
          color="black"
        >
          <div class="row" style="align-items: center">
            <q-input outlined v-model="userRecoverEmail" label="e-mail"  color="black" style="margin-top: 10px; margin-bottom: 10px; width: 70%;"/>
            <q-btn outlined color="black" text-color="white" label="Pesquisar" style="width: 20%; height: 30px; margin-left: 10px; "/>
          </div>
          <q-stepper-navigation>
            <q-btn outline @click="step = 2" color="black" label="Continue" style="width: 18%"/>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Receba o código"
          caption=""
          icon="vpn_key"
          :done="step > 2"
          color="black"
        >
          <div class="column">
            <span class="question" style="font-size: 15px;">Como você deseja receber o código para redefinir sua senha?</span>
            <q-list class="">
              <q-item tag="label" v-ripple>
                <q-radio v-model="optionRecover" val="option1" color="black" />
                <q-item-section avatar>
                  <q-icon name="mail_outline"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Enviar código por <strong>Email</strong></q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-radio v-model="optionRecover" val="option2" color="black" />
                <q-item-section avatar>
                  <q-icon name="sms"></q-icon>
                </q-item-section>
                <q-item-section >
                  <q-item-label>Enviar código por <strong>SMS</strong></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-stepper-navigation>
            <q-btn outline @click="step = 3" color="black" label="Continue" />
            <q-btn flat @click="step = 1" color="black" label="Voltar" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Insira o código"
          icon="dialpad"
          :done="step > 3"
          color="black"
        >
          <div class="column">
            <span class="question" style="font-size: 15px;">Verifique se você recebeu o código de 6 números.</span>
            <div class="row" style="align-items: center">
              <q-input outlined v-model="userRecoverEmail" label="insira o código"  color="black" style="margin-top: 10px; width: 280px;"/>
              <q-btn flat @click="step = 2" style="width: 35%; height: 30px; margin-left: 20px"><span style="font-size: 13px">Não recebeu um código?</span></q-btn>
            </div>
          </div>
          <q-stepper-navigation>
            <q-btn outline @click="step = 4" color="black" label="Continue" />
            <q-btn flat @click="step = 2" color="black" label="Voltar" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="Redefina sua senha"
          icon="check_circle"
          color="black"
        >
          <!--<span class="recover" style="font-size: 15px;">Digite sua nova senha</span>-->
          <div class="column">
            <q-input outlined v-model="userNewPassword" label="Digite nova senha"  color="black" style="margin: 10px; width: 280px;"/>
            <q-input outlined v-model="userNewPassword" label="confirme sua senha"  color="black" style="margin: 10px; width: 280px;"/>
          </div>
          <q-stepper-navigation>
            <q-btn color="black" label="Finalizar" />
            <!-- finaliza e volta para a landing para logar -->
            <q-btn flat @click="step = 3" color="" label="Voltar" class="q-ml-sm" />
            <!-- colocar algo para identificar o match das senhas -->
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recover',
  data() {
    return {
      step: 1,
      userRecoverEmail: '',
      optionRecover: '',
    };
  },
  methods() {
    //  searchEmail e enviar email par recuperar senha
  },
};
</script>
