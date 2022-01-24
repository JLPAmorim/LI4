<template>
  <v-app-bar color="#00302E" height="90" clipped-left elevate-on-scroll>
    <a href="/escolha">
      <v-avatar color="#00302E" size="75" class="ml-5">
        <v-img src="../assets/logotipo.png" />
      </v-avatar>
    </a>
    <v-btn class="btn" color="white" text id="no-background-hover" to="/escolha">
      <h1>RestauraçaUM</h1>
    </v-btn>

    <div class="spacer"></div>

    <v-btn v-if="logged" class="mx-4" dark icon>
      <v-icon size="28px"> mdi-bell </v-icon>
    </v-btn>

    <v-tooltip v-if="!logged" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="white" text rounded to="/autenticar">
          Iniciar Sessão
        </v-btn>
      </template>
      <span>Iniciar Sessão</span>
    </v-tooltip>

    <v-tooltip v-if="!logged" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="white" text rounded to="/criar">
          Registar
        </v-btn>
      </template>
      <span>Registar Utilizador</span>
    </v-tooltip>

    <v-menu v-if="logged" :rounded="rounded" offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn fab v-on="{ ...tooltip, ...menu }">
              <v-avatar>
                <v-img src="../assets/defaultuser.jpg" />
              </v-avatar>
            </v-btn>
          </template>
          <span> </span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item class="mb-3" link :to="asd">
          <v-avatar class="mr-3">
            <v-img src="../assets/defaultuser.jpg" />
          </v-avatar>
          <h4>{{nome}}</h4>
        </v-list-item>
        <v-list-item v-if="user_type=='Admin'" link :to="admin">
          <v-icon class="mr-3">mdi-silverware</v-icon>
          <v-list-item-title> Inserir Restaurante</v-list-item-title>
        </v-list-item>

        <v-list-item  link :to="admin">
          <v-icon class="mr-3">mdi-food</v-icon>
          <v-list-item-title> Restaurantes Visitados</v-list-item-title>
        </v-list-item>

        <v-list-item  link>
          <v-icon class="mr-3">mdi-view-list-outline</v-icon>
          <v-list-item-title> Detalhes de Conta</v-list-item-title>
        </v-list-item>

        <v-list-item @click="logout" text>
            <v-icon class="mr-3">mdi-logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      logged: false,
      nome: '',
      email: '',
      user_type: ''
    };
  },
  created(){
        if(localStorage.getItem('token') != null){
            this.logged = true
        }else{
            this.$router.push('/')
        }
        console.log('Token: ' + localStorage.getItem('token'))
        axios.get('http://localhost:8001/user', {headers: {token: localStorage.getItem('token')}})
            .then(res => {
                this.nome = res.data.nome
                this.email = res.data.email
                this.user_type = res.data.user_type
        })      
    },

  methods: {
      logout(){
          localStorage.clear()
          this.$router.push('/autenticar')
      }
  },
};
</script>

<style scoped>
/* css do cabeçalho */
.v-toolbar__content,
.v-toolbar__extension {
  position: relative;
}
.spacer {
  flex-grow: 1;
}
h1 {
  color: white;
  text-align: center;
}
#rounded-card {
  border-radius: 50%;
  min-height: 500px;
  min-width: 500px;
}
.btn {
  text-transform: none;
}
#no-background-hover::before {
  background-color: transparent;
}

.min-button::before {
  display: none;
}
</style>