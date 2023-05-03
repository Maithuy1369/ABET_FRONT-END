import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '../components/auth/Login.vue'
import ConfigSo from '@/components/SO/ConfigSO.vue'
import ListPIbySO from '@/components/document/ListPIbySO.vue'
import CreateDocument from '@/components/document/CreateDocument.vue'
import WaitingRoomVue from '@/components/WaitingRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/waiting-room',
    name: 'waitingRoom',
    component: WaitingRoomVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/SO/config',
    name: 'configSO',
    component: ConfigSo
  },
  {
    path: '/document/all-document-by-so/:id',
    name: 'ListPIbySO',
    component: ListPIbySO
  },

  {
    path: '/document/:id/create-document',
    name: 'CreateDocument',
    component: CreateDocument
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
