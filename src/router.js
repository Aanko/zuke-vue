import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Archives from './views/Archives.vue'
import Post from './views/Post.vue'
import About from './views/About.vue'
import Links from './views/Links.vue'

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
    component: Archives
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/links',
    name: 'Link',
    component: Links
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})