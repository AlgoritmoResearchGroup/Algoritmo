<template>
  <div>
    <q-buttom rounded class="decision-buttom" @click="opem = true" >
      {{ modal }}
    </q-buttom>
    <div v-if="opem">
        <q-card flat class="my-card" style="background-color: white; height: 100px; width: 100px; margin-top: -10px; position: relative; border-radius: 0px;">
          <q-item style="margin-left: 10px;">
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="clear" @click="opem=false"></q-icon>
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonCard',
  data() {
    return {
      opem: false,
      closeBoxDialogo: false,
      modal: '___DIÁLOGO>',
    };
  },
};
</script>

<style scoped>

  .decision-buttom {
    background-color: none;
    font-family: LEVEL;
    color: black;
  }
</style>
