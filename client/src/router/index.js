import Vue from 'vue'
import VueRouter from 'vue-router'
import Authentication from '../views/Authentication.vue'
import AccountDetails from '../views/AccountDetails.vue'



Vue.use(VueRouter)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/detalhes',
    name: 'AccountDetails',
    component: AccountDetails
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
