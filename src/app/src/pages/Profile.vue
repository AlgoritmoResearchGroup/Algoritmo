<template>
  <q-page padding style="width: 100%">
    <q-btn outline to="/" color="white" text-color="black" style="width: 180px; margin-top: 10px; margin-left: 15px; margin-bottom: 20px">
        <q-icon name="keyboard_arrow_left" style=""></q-icon>
        <span>Voltar ao Mapa</span>
    </q-btn>
    <div class="row" style="flex-wrap: nowrap">
      <q-card class="perfil-card" style="max-height: 400px;">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" style="max-height: 45%;">
        </q-img>
        <div class="column" align="center" style="margin-top: 20px;">
          <div class="text-h6">{{userName}}</div>
          <div class="text-subtitle2">{{userCategory}}</div>
        </div>
        <q-card-actions class="bg-white" vertical align="right" style="margin: 10px">
          <div class="row" style="flex-wrap: nowrap; align-items: center; margin-top: 20px;">
            <span class="user-email" style="font-size: 17px; font-family: 'Roboto'"> {{ userEmail }} </span>
            <q-btn flat style="margin-left: 25px; margin-right: 10px;">
              <q-icon name="edit" size="20px"></q-icon>
            </q-btn>
          </div>
          <div class="row" style="flex-wrap: nowrap; align-items: center; margin-top: 15px">
            <span class="user-password" style=""> {{ userPassword }} </span>
            <q-btn flat style="margin-left: 15px; margin-right: 10px;">
              <q-icon name="edit" size="20px"></q-icon>
            </q-btn>
          </div>
        </q-card-actions>
      </q-card>
      <q-card class="pin-card" style="min-width: 18%; height: 30%; margin-left: 25px;">
        <q-card-section class="bg-yellow text-black">
          <div class="text-h6">Adicionar Pin</div>
          <div class="text-subtitle2">Faça parte da Cartografia</div>
        </q-card-section>

        <q-card-section class="context" v-if="opemBoxPin" style="height: 100%; width: 100%;">
          <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;"> Este pin te localiza no mapa com os dados inseridos abaixo</span>
          <div class="name-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
            <div class="collumn" style="width: 200px;">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome do Pin</span>
              <q-input class="input" v-model="nomePin" label="" color="white"/>
            </div>
            <div class="collumn" style="width: 300px;">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email </span>
              <q-input class="input" v-model="emailPin" label="" color="white"/>
            </div>
            <div class="collumn" style="width: 190px;">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Telefone </span>
              <q-input class="input" v-model="telefonePin" color="white"/>
            </div>
          </div>
          <div class="address-field"  style="display: flex; flex-direction: row; width: 100%; margin-top: 20px;">
            <div class="column" style="width: 300px">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Rua </span>
              <q-input class="input" v-model="ruaPin" label="" color="white"/>
            </div>
            <div class="column" style="width: 140px">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Número </span>
              <q-input class="input" v-model="numeroRuaPin" label="" color="white"/>
            </div>
            <div class="column" style="width: 180px">
              <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Cep </span>
              <q-input class="input" v-model="cepPin" label="" color="white"/>
            </div>
          </div>
          <div class="description-field" style="display: flex; flex-direction: column; width: 100%; margin-top: 20px;">
            <div class="column" style="">
              <div class="row">
                <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Descrição* </span>
                <span class="text-info text-black" style="font-size: 10px; position: relative; top: 10px;">(descrição da atividade, até 300 caracteres) </span>
              </div>
              <q-input outlined type="textarea" class="input" v-model="descricaoPin" color="white" style=" width: 95%;"/>
            </div>
            <div class="row">
              <div class="column" style="width: 80%">
                <div class="column link-pagina">
                  <div class="row">
                    <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Página </span>
                    <span class="text-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                  </div>
                  <q-input class="input" v-model="linkPagina" color="white" style=" width: 60%;"/>
                </div>
                <div class="column link-insta" style="">
                  <div class="row">
                    <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Instagram </span>
                    <span class="text-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                  </div>
                  <q-input class="input" v-model="linkInstagram" color="white" style=" width: 60%;"/>
                </div>
                <div class="column link-facebook" style="">
                  <div class="row">
                    <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Facebook </span>
                    <span class="text-info text-black" style="font-size: 10px; position: relative; top: 10px;">(opcional) </span>
                  </div>
                  <q-input class="input" v-model="linkFacebook" color="white" style=" width: 60%;"/>
                </div>
              </div>
              <div class="q-pa-md q-gutter-sm">

              </div>
            </div>
          </div>
        </q-card-section>

        <q-separator style="margin-top: 50px;"/>
        <q-card-actions  class="absolute-bottom" align="right" style="background: white; margin: 10px">
          <q-btn flat @click="opemBoxPin=true" v-if="opemBoxPin===false">Criar Pin</q-btn>
          <q-btn filled color="black" v-if="opemBoxPin" >Finalizar</q-btn>
          <q-btn flat v-if="opemBoxPin" @click="opemBoxPin=false">Cancelar</q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="schedule-card" style="min-width: 18%; height: 30%; margin-left: 25px;">
        <q-card-section class="bg-green text-black">
          <div class="text-h6">Eventos</div>
          <div class="text-subtitle2">Crie eventos</div>
        </q-card-section>

        <q-card-section class="" v-if="opemEventBox" style="width: 100%; height: 100%">
          <span class="subtitle" style="font-size: 12px; position: relative; top: 10px;">
          </span>
          <div class="collumn" style="width: 300px;">
            <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Nome do Evento</span>
            <q-input class="input" v-model="nomeEvento" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 300px;">
            <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Local do Evento</span>
            <q-input class="input" v-model="localEvento" label="" color="white"/>
          </div>
          <div class="row">
            <div class="collumn" style="width: 150px;">
              <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Data</span>
              <q-input class="input" v-model="dataEvento" label="" color="white"/>
            </div>
            <div class="collumn" style="width: 150px;">
              <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Horário</span>
              <q-input class="input" v-model="localEvento" label="" color="white"/>
            </div>
            <div class="collumn" style="width: 150px;">
              <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Valor Entrada</span>
              <q-input class="input" v-model="dataEvento" label="" color="white"/>
            </div>
          </div>
          <div class="collumn" style="width: 250px;">
            <span class="text-info text-black" style="font-size: 14px; position: relative; top: 10px;">Link do Evento</span>
            <q-input class="input" v-model="localEvento" label="" color="white"/>
          </div>
          <div class="" style="margin-top: 20px; margin-left: 0px">
            <q-uploader
              url=""
              label="Imagem do Evento"
              accept=".jpg, image/*"
              :max-file-size="2048"
              style="max-width: 200px"
              color="teal"
              flat
              square
              bordered
            />
          </div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right" style="background: white">
          <q-btn flat @click="opemEventBox=true" v-if="opemEventBox===false">Criar Evento</q-btn>
          <q-btn filled color="black" v-if="opemEventBox">Adicionar Evento</q-btn>
          <q-btn flat v-if="opemEventBox" @click="opemEventBox=false">Cancelar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      userName: 'Juliana Trujillo',
      userCategory: 'Cinema e AudioVisual',
      userEmail: 'JulianaTrujillo@email.com',
      userPassword: '**********',
      opemBoxPin: false,
      addPin: false,
      opemEventBox: true,
      addEvent: false,
    };
  },
};
</script>
<style lang="sass" scoped>
.row
  display: flex
  flex-direction: row
  align-content: center

.collumn
  display: flex
  flex-direction: column
  border-radius: 5px

.nav
  width: 100px
  height: 100%
  background-color: yellow

.text-info
  margin: 5px
  font-size: 15px

.input
  margin: 5px
  margin-top: -10px
  font-size: 15px

</style>
