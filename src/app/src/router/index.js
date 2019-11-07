import Vue from 'vue';
import VueRouter from 'vue-router';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Login from '../components/LoginCard.vue';
import BCard from '../components/ButtonCard.vue';
import routes from './routes';
import MapaImport from '../components/MapaImport.vue';

Vue.component('map-import', MapaImport);
Vue.component('login', Login);
Vue.component('b-card', BCard);

delete Icon.Default.prototype.getIconUrl;

/*
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
*/

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
