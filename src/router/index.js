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
import profileVue from '@/components/myfile/profile.vue'
import changePassVue from '@/components/myfile/changePass.vue'
import chartSOVue from '@/components/SO/chartSO.vue'
import homePage from '@/components/home/homePage.vue'
import groupProfileVue  from '@/components/myfile/group_profile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage
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
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileVue
  },
  {
    path: '/group_profile',
    name: 'group_profile',
    component: groupProfileVue
  },
  {
    path: '/changePass',
    name: 'changePass',
    component: changePassVue
  },
  {
    path: '/chart',
    name: 'chart',
    component: chartSOVue
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
