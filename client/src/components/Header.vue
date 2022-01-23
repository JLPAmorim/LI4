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

    <v-btn v-if="logged" class="mx-4" dark icon>
      <v-icon size="28px"> mdi-bell </v-icon>
    </v-btn>

    <v-tooltip v-if="!logged" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="white" text rounded>
          Iniciar Sessão
        </v-btn>
      </template>
      <span>Iniciar Sessão</span>
    </v-tooltip>

    <v-tooltip v-if="!logged" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="white" text rounded>
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
          <h4>João Amorim</h4>
        </v-list-item>
        <v-list-item v-if="this.user_type === 'admin'" link :to="admin">
          <v-icon class="mr-2">mdi-plus</v-icon>
          <v-list-item-title> Inserir Evento</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-icon class="mr-2">mdi-view-list-outline</v-icon>
          <v-list-item-title @click="historico"
            >Histórico de Apostas</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-icon class="mr-2">mdi-cash-multiple</v-icon>
          <v-list-item-title @click="movimentos"
            >Movimentos de Conta</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-icon class="mr-2">mdi-currency-usd</v-icon>
          <v-list-item-title @click="saldo">Gerir Saldo</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-icon class="mr-2">mdi-cog</v-icon>
          <v-list-item-title @click="detalhes"
            >Detalhes de Conta</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="logout" text>
          <v-icon>mdi-logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
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
      tempos: ["EUR", "USD", "GBP", "ADA"],
      balance: {
        EUR: "",
        USD: "",
        GBP: "",
        ADA: "",
      },
      coinType: "",
      finalBalance: "",
      user_type: "",
    };
  },
  /*created(){
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
    },*/
  methods: {
    historico() {
      this.$router.push("/historico");
    },
    movimentos() {
      this.$router.push("/movimentos");
    },
    saldo() {
      this.$router.push("/saldo");
    },
    detalhes() {
      this.$router.push("/detalhes");
    },
    logout() {
      localStorage.clear();
      this.$router.push("/authentication");
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