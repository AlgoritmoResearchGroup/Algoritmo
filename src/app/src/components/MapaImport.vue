<template>
    <div style="display: flex; height: 580px; width: 100%">
        <l-map style="" :zoom="13" :center="[-20.4435, -54.6478]" :options="{zoomControl: true}">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
            <l-marker></l-marker>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
    });
    this.$refs.map.mapObject.invalideSize();
  },
};
</script>
