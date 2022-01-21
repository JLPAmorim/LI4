<template>
  <v-app-bar color="#00302E" height="90" clipped-left elevate-on-scroll>
    <a href="/">
      <v-avatar color="#00302E" size="75" class="ml-5">
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
    <v-btn v-if="!logged" v-bind="attrs" color="#e4c5a3" text to="/autenticar">
      Autenticar
    </v-btn>

    <v-btn
      v-if="!logged"
      v-bind="attrs"
      color="#e4c5a3"
      style="color: #00302e"
      class="mr-16"
      to="/criar"
    >
      Registar
    </v-btn>

    <!--Caso já tenha feito login-->
    <v-menu v-if="logged" :rounded="rounded" offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn fab v-on="{ ...tooltip, ...menu }" class="mr-10">
              <v-avatar>
                <v-img src="../assets/defaultuser.jpg" />
              </v-avatar>
            </v-btn>
          </template>
          <span> </span>
        </v-tooltip>
      </template>

      <!--Lista do menu do utilizador-->
      <v-list>
        <v-list-item class="mb-3" link :to="asd">
          <v-avatar class="mr-3">
            <v-img src="../assets/defaultuser.jpg" />
          </v-avatar>
          <h4>{{ nameAnon }}</h4>
        </v-list-item>

        <!--Lista para ADMIN-->
        <v-list-item v-if="this.user_type === 'admin'" link :to="admin">
          <v-icon class="mr-2">mdi-plus</v-icon>
          <v-list-item-title> Inserir Restaurante</v-list-item-title>
        </v-list-item>

        <!--Lista para todos os tipos de usuarios-->
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
      user_type: "",
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
    },-->