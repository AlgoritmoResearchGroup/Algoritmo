<template>
    <l-map style="height: 200px; width: 100%" :zoom="zoom" :center="center" :options="{zoomControl: false}">
        <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
</template>

<script>
    import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import L from 'leaflet';

    export default {
        name: 'MyAwesomeMap',
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        mounted () {
            this.$nextTick(() => {
                this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
            })
        }
    }
</script>