import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Login from '../components/Login'
import Register from '../components/Register'
import Check from '../components/Check'
import Analusis from '../components/Analysis'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/check',
    name: 'check',
    component: Check
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: Analusis
  }
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
