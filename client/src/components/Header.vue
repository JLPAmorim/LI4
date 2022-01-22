<template>
  <v-app-bar color="#00302E" clipped-left elevation="0" size="70">
    <a href="/">
      <v-avatar color="#00302E" size="70" class="ml-5">
        <v-img src="../assets/logotipo.png" />
      </v-avatar>
    </a>
    <v-btn class="btn" color="white" text id="no-background-hover">
      <h1>RestauraçaUM</h1>
    </v-btn>

    <div class="spacer"></div>
    <!--
    <v-text-field
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      dense
      solo
      class="mt-7"
    ></v-text-field>
    <div class="spacer"></div>-->

    <!--Caso não tenha feito login-->
    <v-btn v-if="!logged" v-bind="attrs" color="#ebd9c6" text to="/autenticar">
      Autenticar
    </v-btn>

    <v-btn
      v-if="!logged"
      v-bind="attrs"
      color="#e9cfb4"
      style="color: #00302e"
      class="mr-16"
      to="/criar"
    >
      Registar
    </v-btn>

    <!--Caso já tenha feito login-->
    <v-card-text v-if="logged" class="text-right greeting"
      >Olá {{ nameAnon }}!</v-card-text
    >

    <v-menu v-if="logged" :rounded="rounded" offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-btn fab v-on="{ ...menu }" class="mr-5">
          <v-avatar>
            <v-img src="../assets/defaultuser.jpg" />
          </v-avatar>
        </v-btn>
      </template>

      <!--Lista do menu do utilizador-->
      <v-list>
        <v-list-item class="mb-3">
          <v-avatar class="mr-3" tile>
            <v-img src="../assets/defaultuser.jpg" />
          </v-avatar>
          <v-list dense>
            <v-list-item dense
              ><h4>{{ nameAnon }}</h4></v-list-item
            >
            <v-list-item class="mt-n5" v-if="this.user_type === 'admin'"
              ><h6>Admin</h6></v-list-item
            >
            <v-list-item class="mt-n5" v-else> <h6>User</h6></v-list-item>
          </v-list>
        </v-list-item>
        <v-divider class="mt-n2" />

        <!--Lista para ADMIN-->
        <v-list-item v-if="this.user_type === 'admin'" to="/admin">
          <v-icon class="mr-2">mdi-plus</v-icon>
          <v-list-item-title> Inserir Restaurante</v-list-item-title>
        </v-list-item>

        <!--Lista para todos os tipos de usuarios-->
        <v-list-item text to="/perfil">
          <v-icon>mdi-account</v-icon>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>

        <v-list-item @click="logout" text>
          <v-icon>mdi-logout</v-icon>
          <v-list-item-title>Sair da conta</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>


<script>
//import axios from "axios";
export default {
  data() {
    return {
      logged: true,
      user_type: "admin",
      nameAnon: "anonimo",
    };
  },

  methods: {
    logout() {
      this.$store.commit("logout"); //TODO ver dps isto melhor
      this.$router.push("/");
    },
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

.greeting {
  color: #ebd9c6;
  font-size: 2vh;
}

.min-button::before {
  display: none;
}
</style>


<!--created(){
        if(localStorage.getItem('token') === null){
            this.$router.push('/authentication')
        }  
        axios.get('http://localhost:8001/user', {headers: {token: localStorage.getItem('token')}})
            .then(res => {
                this.coinType = res.data.user.currentCoin
                if(this.coinType==='EUR'){
                    this.finalBalance=res.data.user.balance.EUR
                }
                if(this.coinType==='USD'){
                    this.finalBalance=res.data.user.balance.USD
                }
                if(this.coinType==='GBP'){
                    this.finalBalance=res.data.user.balance.GBP
                }
                if(this.coinType==='ADA'){
                    this.finalBalance=res.data.user.balance.ADA
                }
                this.user_type= res.data.user.type
        })      
    },
    
    
    
    
      
        -->