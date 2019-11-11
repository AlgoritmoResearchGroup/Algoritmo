<template>
  <div class="sobre-field">
    <div class="card" v-if="opem">
        <q-card flat class="my-card" style="background-color: white; height: 100px; width: 92%; max-width: 168px; margin-top: -10px; position: relative; border-radius: 0px;">
          <q-item style="margin-left: 70%;">
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="clear" @click="opem=false"></q-icon>
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-card>
    </div>
    <q-buttom rounded class="decision-buttom" @click="opem = true" >
      {{ modal }}
    </q-buttom>
  </div>
</template>

<script>
export default {
  name: 'SobreCard',
  data() {
    return {
      opem: false,
      closeBoxDialogo: false,
      modal: '___SOBRE>',
    };
  },
};
</script>

<style scoped>

  .decision-buttom {
    background-color: none;
    font-family: LEVEL;
    color: black;
    margin-top: -20px;
    position: relative;
    z-index: 1;
  }
  .card {
    position: relative;
    z-index: 0;
    margin-bottom: -20px;
  }
</style>
