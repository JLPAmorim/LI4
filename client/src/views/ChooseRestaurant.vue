<template>
  <v-app>
    <Header />
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="k in 2" :key="k">
          <v-btn class="mt-n15 btn-prop" center>
            <!--Choose in Map button-->
            <v-card v-if="k == 1" color="transparent" elevation="0">
              <v-img
                lazy-src="../assets/error.png"
                class="mx-auto img-prop"
                src="../assets/map.png"
              ></v-img>
              <v-card-text class="text-prop mt-10" style="font-size: 3vh"
                >Escolher localização no mapa
              </v-card-text>
            </v-card>

            <!--Choose Here button-->
            <v-card v-else color="transparent" elevation="0">
              <v-img
                class="mx-auto img-prop"
                lazy-src="../assets/error.png"
                src="../assets/map-pin.png"
              ></v-img>
              <v-card-text class="text-prop mt-10" style="font-size: 3vh"
                >Utilizar localização atual
              </v-card-text></v-card
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

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
};
</script>

<style scoped>
#app {
  background-color: white;
  height: "50vh";
}

.img-prop {
  max-height: 50vh !important;
  max-width: 50vh !important;
  filter: invert(10%) sepia(75%) saturate(530%) hue-rotate(129deg)
    brightness(98%) contrast(101%) !important;
}
.btn-prop {
  height: 70vh !important;
  width: 60vh !important;
}

.text-prop {
  color: #002423 !important;
}
</style>
