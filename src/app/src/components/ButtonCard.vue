<template>
  <div>
    <q-buttom rounded class="decision-buttom" @click="opem = true" >
      ___DIÁLOGO>
    </q-buttom>
    <div v-if="opem">
        <q-card flat class="my-card" style="background-color: white; height: 100px; width: 100px; position: relative; border-radius: 0px;">
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
