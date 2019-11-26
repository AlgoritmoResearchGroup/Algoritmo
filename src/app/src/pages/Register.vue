<template>
  <q-page padding>
    <div class="row" style="align-content: center">
        <div class="column context" style="height: 100%; width: 40%; margin-left: 4rem; margin-top: 2rem;">
          <span class="title" style="margin-bottom: 2rem">Cadastro</span>
          <p>O cadastro permitirá:</p>
          <p>MAPA:</p>
          <p>Adicionar um pin no mapa (sua localização e as informações que você inserir serão visto por todos). Cada cadastro permitirá que você insira um pin.</p>
          <p>AGENDA:</p>
          <p>Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande Além de ser mais um local de divulgação do seu trabalho,
          o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.</p>
          <p>DIÁLOGO:</p>
          <p>Propor debates ou participar de um debate que acontece online, proposto pelo Fórum Municipal de Cultura ou pelos participantes,
          entre a produtores artísticos e culturais da cidade.</p>
          <p>Para o Fórum Municipal de Cultura é muito importante que você, sendo da classe artística, produtor cultural, instituição ou responsável
          por estabelecimento que promove arte e cultura na cidade, participe desta plataforma. A cartografia da cultura é uma maneira de dar voz e visibilidade
          A todos que produzem arte e cultura, sem hierarquias e com transparência.</p>
        </div>
        <div class="column user-data" style="margin-left: 7rem; margin-top: 6rem;">
          <div class="collumn" style="width: 22rem;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Nome*</span>
            <q-input class="input" v-model="userName" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 22rem;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Email* </span>
            <q-input class="input" v-model="userEmail" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 22rem;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Confirme seu email </span>
            <q-input class="input" v-model="confirmEmail" label="" color="white"/>
          </div>
          <div class="collumn" style="width: 19rem; margin-left: 0px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Senha* </span>
            <q-input v-model="password" :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  size="20px"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="collumn" style="width: 19rem; margin-left: 0px;">
            <span class="text-info text-black" style="font-size: 12px; position: relative; top: 10px;">Confirme sua senha </span>
            <q-input v-model="confirmPassword" :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  size="20px"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="column user-Category" style="margin-top: 50px">
            <span class="subtitle">Identificação ou Área de Atuação</span>
            <span>(A categoria escolhida irá aparecer no seu pin no mapa)</span>
            <div class="q-pa-md option-group">
              <q-option-group
                :options="primaryOptions"
                label="Notifications"
                type="radio"
                v-model="userCategory"
              />
              <q-option-group
                v-if="userCategory==='atuacao'"
                :options="secondaryOptions"
                label="Notifications"
                type="radio"
                v-model="secondaryUserCategory"
                style="margin-left: 50px;"
              />
            </div>
          </div>
          <div class="btn" style="margin-top: 1.2rem">
            <q-btn outlined color="black" text-color="white" style="width: 45%" >Finalizar</q-btn>
            <q-btn outline to="/" style="margin-left: 25px; width: 30%">Cancelar</q-btn>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  data() {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      isPwd: true,
      userCategory: null,
      secondaryUserCategory: null,
      primaryOptions: [
        { label: 'Produtor Cultural', value: 'produtor', color: 'yellow' },
        { label: 'Responsável por Estabelecimento', value: 'estabelecimento', color: 'green' },
        { label: 'instituição', value: 'instituicao', color: 'red' },
        { label: 'Atuação', value: 'atuacao', color: 'orange' },
      ],
      secondaryOptions: [
        { label: 'Dança, Teatro e Circo', value: 'dtc', color: 'yellow' },
        { label: 'Escultura', value: 'escultura', color: 'green' },
        { label: 'Arte Urbana', value: 'arteUrbana', color: 'red' },
        { label: 'Arte Digital', value: 'arteDigital', color: 'orange' },
      ],
    };
  },
  methods() {

  },
};
</script>

<style lang="sass" scoped>
.column
  display: flex
  flex-direction: column

.row
  display: flex
  flex-direction: row

.p
  font-size: 20px

.title
  font-family: sans-serif
  font-size: 30px
  font-weight: 500
  word-wrap: break-word

.subtitle
  font-size: 18px

</style>
