import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Router from 'vue-router'
import router from './router'
import vuetify from './plugins/vuetify' 
Vue.use(Router)

import store from "./stores";

import setupInterceptors from './services/setupInterceptors';

setupInterceptors(store);


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
