<template>
  <div>
    <q-buttom rounded class="decision-buttom" @click="opem = true" >
    </q-buttom>
    <div v-if="opem">
        <q-card flat class="my-card" style="background-color: orange; position: relative; border-radius: 0px;">
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
    width: 100px; height: 100px;
    background-color: grey;
  }
</style>
