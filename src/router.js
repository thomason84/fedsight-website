import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/AboutUs.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('./views/Clients.vue')
    }
  ]
})


