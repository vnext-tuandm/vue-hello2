import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Router from 'vue-router'
import router from './router'
Vue.use(Router)

import store from "./stores";

import setupInterceptors from './services/setupInterceptors';

setupInterceptors();

import vuetify from './plugins/vuetify' 
import '@/commons/app.style.scss'
import i18n from '@/plugins/i18n';
import assetPlugin from '@/plugins/asset';
Vue.use(assetPlugin);

new Vue({
  i18n,
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
