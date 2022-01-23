import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(vueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
  }, installComponents:false})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
