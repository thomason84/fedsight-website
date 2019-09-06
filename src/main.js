import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueResource from 'vue-resource'

Vue.use(VueResource);



library.add(faDownload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = require('jquery')
window.JQuery = require('jquery')

import BootstrapVue from 'bootstrap-vue'



Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
