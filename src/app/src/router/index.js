import Vue from 'vue';
import VueRouter from 'vue-router';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LCard from '../components/LoginCard.vue';
import DCard from '../components/DialogoCard.vue';
import ACard from '../components/AgendaCard.vue';
import SCard from '../components/SobreCard.vue';
import FCard from '../components/FilterCard.vue';
import routes from './routes';
import MapaImport from '../components/MapaImport.vue';

Vue.component('map-import', MapaImport);
Vue.component('l-card', LCard);
Vue.component('d-card', DCard);
Vue.component('a-card', ACard);
Vue.component('s-card', SCard);
Vue.component('f-card', FCard);

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
