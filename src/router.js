import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import('./views/Archives.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  },
  {
    path: '/links',
    name: 'Link',
    component: () => import('./views/Links.vue')
  },
] 

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})