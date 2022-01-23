<template>
  <v-app>
    <Header />
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="k in 2" :key="k">
          <!--Choose in Map button-->
          <v-card
            v-if="k == 1"
            flat
            v-click-outside="onClickOutside"
            class="btn-prop mt-n15 text-center"
            rounded="lg"
            color="#e1e1e1"
            @click="active = true"
            v-ripple="!active"
          >
            <v-div v-if="!active">
              <v-img class="mx-auto img-prop" src="../assets/map.png"></v-img>
              <v-card-text class="text-prop mt-10" style="font-size: 3vh"
                >Escolher localização no mapa
              </v-card-text>
            </v-div>

            <v-div v-if="active" fill-height d-flex align-center justify-center>
              <v-img
                class="mx-auto small-img-prop"
                src="../assets/map.png"
              ></v-img>
              <v-form>
                <v-container>
                  <v-row justify="center" width="50vh">
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="location"
                        label="Localização"
                        color="#00302e"
                        type="text"
                        class="mt-10"
                        required
                        solo
                        flat
                    /></v-col>

                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model="radius"
                        label="Raio"
                        color="#00302e"
                        solo
                        flat
                        class="mt-10"
                        suffix="Km"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <v-btn
                :disabled="isFormValid"
                color="#00302e"
                width="46vh"
                height="7vh"
                to="/resultados"
                ><v-card-text class="search-prop"
                  >Pesquisar
                </v-card-text></v-btn
              >
            </v-div>
          </v-card>
          <!--Choose Here button-->

          <v-card
            v-else
            rounded="lg"
            to="/resultados"
            flat
            color="#e1e1e1"
            :disabled="active"
            class="mt-n15 btn-prop text-center"
          >
            <v-img class="mx-auto img-prop" src="../assets/map-pin.png"></v-img>
            <v-card-text class="text-prop mt-10" style="font-size: 3vh"
              >Utilizar localização atual
            </v-card-text></v-card
          >
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
  data() {
    return {
      active: false,
      isFormValid: false,
      formThings: {
        location: "",
        radius: "",
      },
    };
  },
  methods: {
    onClickOutside() {
      this.active = false;
    },
  },
};
</script>

<style scoped>
#app {
  background-color: white;
  height: "50vh";
}

.img-prop {
  top: 5%;
  max-height: 50vh !important;
  max-width: 50vh !important;
  filter: invert(10%) sepia(75%) saturate(530%) hue-rotate(129deg)
    brightness(98%) contrast(101%) !important;
}

.small-img-prop {
  top: 5%;
  max-height: 40vh !important;
  max-width: 40vh !important;
  filter: invert(10%) sepia(75%) saturate(530%) hue-rotate(129deg)
    brightness(98%) contrast(101%) !important;
}

.btn-prop {
  height: 70vh !important;
  width: 60vh !important;
}

.search-prop {
  color: white !important;
  font-size: 3vh;
}

.text-prop {
  color: #002423 !important;
}
</style>
