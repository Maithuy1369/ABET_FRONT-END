import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '../components/auth/Login.vue'
import ConfigSo from '@/components/SO/ConfigSO.vue'
import ListPIbySO from '@/components/document/ListPIbySO.vue'
import CreateDocument from '@/components/document/CreateDocument.vue'
import RepassVue from '../components/auth/Repass.vue'
import WaitingRoomVue from '@/components/WaitingRoom.vue'
import DocumentWorkspace from '@/components/document/DocumentWorkspace.vue'

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
    path: '/repass',
    name: 'repass',
    component: RepassVue
  },{
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
  
  {
    path: '/document/:id/workspace',
    name: 'documentWorkspace',
    component: DocumentWorkspace
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
