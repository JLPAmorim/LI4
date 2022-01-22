<template>
  <v-app>
    <Header />
    <v-card left height="90vh" width="27vw" class="drawer-prop" elevation="5">
      <v-list>
        <v-list-item v-for="k in 10" :key="k" class="mb-5">
          <v-btn height="15vh" block depressed>
            <v-img
              :scr="require('../assets/' + restaurante.photo + '.jpg')"
              class="photo-prop ma-0"
            />
            <v-card color="transparent" flat>
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
    <Footer />
  </v-app>
</template>



<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
  data: function () {
    return {
      /*Teste*/
      restaurante: {
        photo: "defaultuser",
        name: "restaurante",
        adress: "Rua 1, nº123, Braga",
        time: "Aberto ate 00:00",
        cost: "€€",
      },
    };
  },
};
</script>

<style scoped>
#app {
  background-color: white;
  height: "50vh";
}

.drawer-prop {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.drawer-prop::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.drawer-prop {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.photo-prop {
  max-height: 5vh !important;
  max-width: 5vh !important;
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