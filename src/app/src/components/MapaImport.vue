<template>
  <div>
    <!--<div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>-->
    <l-map ref="MyAwesomeMap"
      style="height: 90vh; width: 100%"
      :zoom="zoom"
      :center="center"
      :options="{zoomControl: false}"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-control-zoom position="topright"  ></l-control-zoom>
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LControlZoom,
} from 'vue2-leaflet';

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [-20.460277, -54.612277],
      markerLatLng: [-20.460277, -54.612277],
      bounds: null,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
  mounted() {
  },
};
</script>
