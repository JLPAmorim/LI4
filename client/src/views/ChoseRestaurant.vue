<template>
  <v-app>
    <Header />
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="5" v-for="k in 2" :key="k">
          <v-btn> </v-btn>
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
</style>
