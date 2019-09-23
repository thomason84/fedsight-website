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
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHdd } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import VueResource from 'vue-resource'

Vue.use(VueResource);


//add icons to library
library.add(faDownload)
library.add(faUsers)
library.add(faChartPie)
library.add(faCloud)
library.add(faCheck)
library.add(faCopyright)
library.add(faLinkedinIn)
library.add(faBuilding)
library.add(faHandshake)
library.add(faHdd)
library.add(faHandHoldingUsd)
library.add(faChartBar)
library.add(faUserFriends)
library.add(faUserCog)
library.add(faClipboardList)
library.add(faUserTie)
library.add(faRocket)
library.add(faEye)

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
