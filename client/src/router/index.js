import Vue from 'vue'
import VueRouter from 'vue-router'

//All views
import Authentication from '../views/Authentication.vue'
import AccountDetails from '../views/AccountDetails.vue'
import HomePage from '../views/HomePage.vue'
import ChooseRestaurant from '../views/ChooseRestaurant.vue'
import CreateAcount from '../views/CreateAcount.vue'



Vue.use(VueRouter)

Vue.use(VueRouter)

const routes = [
  {
    path: '/autenticar', //site é pt
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/criar',
    name: 'CreateAcount',
    component: CreateAcount
  },
  {
    path: '/detalhes',
    name: 'AccountDetails',
    component: AccountDetails
  },
  {
    path: '/', //exta dps vai ser s '/'
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/choices', //exta dps vai ser s '/'
    name: 'ChooseRestaurant',
    component: ChooseRestaurant
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
