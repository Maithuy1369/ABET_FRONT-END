import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/main.css'

Vue.config.productionTip = false
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
// require('@/assets/resource/toc/jquery.toc/jquery.toc.js');

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
