import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './views/About.vue'
import Home from './views/Home.vue'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

const routes = [
  { path: 'home', name: 'Home', component: Home },
  { path: 'about', name: 'About', component: About },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
