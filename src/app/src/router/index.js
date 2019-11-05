import Vue from 'vue';
import VueRouter from 'vue-router';

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import routes from './routes';
import LoginCard from '../components/LoginCard.vue';
import ButtonCard from '../components/ButtonCard.vue';
import MapaImport from '../components/MapaImport.vue';


Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('map-import', MapaImport);


delete Icon.Default.prototype.getIconUrl;

Vue.component('login-card', LoginCard);
Vue.component('button-card', ButtonCard);

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
