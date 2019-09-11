import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// icons
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

import VueResource from 'vue-resource'

Vue.use(VueResource);


//add icons to library
library.add(faDownload)
library.add(faUsers)
library.add(faChartPie)
library.add(faCloud)

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
