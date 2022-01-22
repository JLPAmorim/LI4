import Vue from 'vue'
import VueRouter from 'vue-router'

//All views
import Authentication from '../views/Authentication.vue'
import AccountDetails from '../views/AccountDetails.vue'
import HomePage from '../views/HomePage.vue'
import ChooseRestaurant from '../views/ChooseRestaurant.vue'
import CreateAcount from '../views/CreateAcount.vue'
import Team from '../views/Team.vue'
import AboutUs from '../views/AboutUs.vue'



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
    path: '/', 
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/choices',
    name: 'ChooseRestaurant',
    component: ChooseRestaurant
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
