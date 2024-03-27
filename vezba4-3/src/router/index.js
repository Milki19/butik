import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Proizvod from '@/views/Proizvod.vue'
import Kategorije from '@/views/Kategorije.vue'
import SviProizvodi from '@/views/SviProizvodi.vue'
import Prijava from '@/views/Prijava.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/proizvod/:id',
    name: 'Proizvod',
    component: Proizvod
  },
  {
    path: '/kategorije',
    name: 'Kategorije',
    component: Kategorije
  },
  {
    path: '/sviProizvodi',
    name: 'SviProizvodi',
    component: SviProizvodi
  },
  {
    path: '/prijavi-promenu',
    name: 'Prijava',
    component: Prijava
  }  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
