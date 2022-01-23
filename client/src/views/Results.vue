<template>
  <v-app>
    <Header />
    <v-container class="fill-height" fluid>
      <v-row no-gutters>
        <v-col cols="6">
          <!--Resultados dos restaurantes-->
          <v-card class="drawer-prop ma-n3" tile>
            <v-list>
              <v-list-item v-for="k in 10" :key="k" class="mb-5">
                <v-btn height="15vh" width="25vw" depressed>
                  <!--Photo-->
                  <v-avatar size="15vh" tile color="#d3d3d3" class="photo-prop">
                    <v-img
                      :src="require('../assets/' + restaurante.photo + '.png')"
                    />
                  </v-avatar>

                  <!--Informação do restaurante-->
                  <v-card color="transparent" flat class="ml-4">
                    <v-card-text class="name-prop text-left">{{
                      restaurante.name
                    }}</v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">{{
                      restaurante.adress
                    }}</v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">{{
                      restaurante.time
                    }}</v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">{{
                      restaurante.cost
                    }}</v-card-text>
                  </v-card>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
          <!--Fim de resultados-->
        </v-col>
        <v-col cols="12" md="6">
          <Map />
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </v-app>
</template>



<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Map from "../components/Map.vue";

export default {
  components: {
    Footer,
    Header,
    Map,
  },
  data: function () {
    return {
      /*Teste*/
      drawer: null,
      restaurante: {
        photo: "signIn",
        name: "restaurante",
        adress: "Rua 1, nº123, Braga",
        time: "Aberto ate 00:00",
        cost: "€€",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
#app {
  background-color: white;
  height: "50vh";
}

.drawer-prop {
  height: 90vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
  width: 27vw;
}

.drawer-prop:hover {
  overflow-y: auto;
}

.drawer-prop v-card {
  padding-right: 16px;
}
.drawer-prop:hover v-card {
  padding-right: 0px;
}

.photo-prop {
  position: absolute;
  left: 0px;
}

.name-prop {
  font-size: 2.3vh;
  font-weight: 500;
  color: #002423 !important;
}

.inf-prop {
  font-size: 1.7vh;
  font-weight: 400;
  color: #002423 !important;
}
</style>