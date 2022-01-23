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
import Results from '../views/Results.vue'
import Perfil from '../views/Perfil.vue'



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
    path: '/escolha',
    name: 'ChooseRestaurant',
    component: ChooseRestaurant
  },
  {
    path: '/equipa',
    name: 'Team',
    component: Team
  },
  {
    path: '/sobrenos',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/resultados',
    name: 'Results',
    component: Results
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
