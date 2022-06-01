import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import 'taipei-sans-tc';
import 'taipei-sans-tc/dist/Light/TaipeiSansTCBeta-Light.css';
import 'taipei-sans-tc/dist/Bold/TaipeiSansTCBeta-Bold.css';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
