<template>
  <v-app>
    <Header />
    <v-container class="fill-height" fluid>
      <v-row no-gutters>
        <v-col cols="3">
          <!--Resultados dos restaurantes-->
          <v-card class="drawer-prop ma-n3" tile>
            <v-list>
              <v-list-item v-for="rest in restaurants" :key="rest.id" class="mb-5">
                <v-btn height="15vh" width="25vw" depressed>
                  <!--Photo-->
                  <v-avatar size="15vh" tile color="#d3d3d3" class="photo-prop">
                    <v-img
                      :src="require('../assets/' + restaurante.photo + '.png')"
                    />
                  </v-avatar>

                  <!--Informação do restaurante-->
                  <v-card color="transparent" flat class="ml-4">
                    <v-card-text class="name-prop text-left">
                      {{rest.name}}
                    </v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">
                      {{rest.address}}
                    </v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">
                      {{rest.time}}
                      </v-card-text>
                    <v-card-text class="inf-prop mt-n9 text-left">
                      {{rest.price_level}}
                    </v-card-text>
                  </v-card>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
          <!--Fim de resultados-->
        </v-col>
        <v-col cols="12" md="9">
          <gmap-map :center="mapCenter" :zoom="12" style="width:1390px; height:730px; margin: 10px auto">
              <gmap-info-window :options="infoWindowOptions" :position="infoWindowPosition" :opened="infoWindowOpened" @closeclick="handleInfoWindowClose">
                  <div class="info-window">
                      <h2 v-text="activeRestaurant.name"/>
                      <p v-text="activeRestaurant.address"/>
                      <p v-text="activeRestaurant.mobile"/>
                      <p> Restaurante - {{activeRestaurant.price_level}} </p>
                      <p> {{activeRestaurant.description}}</p>
                      
                  </div>
              </gmap-info-window>
              <gmap-marker v-for="r in restaurants" :key="r.id" :position="getPosition(r)" :clickable="true" :draggable="false" @click="handleMarkerClicked(r)">

              </gmap-marker>
          </gmap-map>

        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </v-app>
</template>



<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Footer,
    Header
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
      restaurants: [],
      infoWindowOptions: {
        pixelOffset: {
          width: 10,
          height: -35
        }
      },
      activeRestaurant: {},
      infoWindowOpened: false
    };
  },

  created(){
    axios.get(`http://localhost:8001/restaurante`)
          .then((response)=>{
            this.restaurants=response.data
          },(error) =>{
              console.log(error);
          }); 
  },

  methods: {
      getPosition(r){
          return {
            lat: parseFloat(r.latitude),
            lng: parseFloat(r.longitude)
          }
      },
      handleMarkerClicked(r){
        this.activeRestaurant = r
        this.infoWindowOpened = true
      },
      handleInfoWindowClose(){
        this.activeRestaurant = {}
        this.infoWindowOpened = false
      }
  },
  computed: {
      mapCenter(){
          if(!this.restaurants.length){
              return {
                lat: 38.7436883,
                lng: -9.1952226
              }
          }
          return{
            lat: parseFloat(this.restaurants[0].latitude),
            lng: parseFloat(this.restaurants[0].longitude)
          }
      },
      infoWindowPosition() {
        return{
            lat: parseFloat(this.activeRestaurant.latitude),
            lng: parseFloat(this.activeRestaurant.longitude)
          }
      }
      
  }
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