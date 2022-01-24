<template>
  <v-app>
    <Header />
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-card class="card-prop">
          <v-form class="mx-auto my-10 form-prop">
            <v-text-field
              v-model="name"
              label="Nome do Restaurante"
              type="text"
              color="#00302e"
            />
            <v-text-field
              v-model="mobile"
              label="Número de telemóvel"
              type="text"
              color="#00302e"
            />
            <v-text-field
              v-model="adress"
              label="Endereço"
              type="text"
              color="#00302e"
            />

            <v-text-field
              v-model="coords"
              label="Coords"
              type="text"
              color="#00302e"
            />

            <v-combobox
              v-model="price"
              label="Nível de custo"
              type="text"
              color="#00302e"
              :items="cost"
            />
            <v-checkbox
              v-model="takeaway"
              label="Takeaway"
              color="#00302e"
              class="my-n3"
            />
            <v-checkbox
              v-model="delivery"
              label="Entregas a domicílios"
              color="#00302e"
              class="my-n3"
            />
            <v-checkbox
              v-model="dine_in"
              label="Sala"
              color="#00302e"
              class="my-n3"
            />
            <v-text-field
              v-model="description"
              label="Descrição"
              type="text"
              color="#00302e"
            />
          </v-form>

          <v-btn
            color="#00302e"
            width="46vh"
            center
            height="7vh"
            class="btn-prop"
            ><v-card-text>Adicionar Restaurante </v-card-text></v-btn
          >
        </v-card>
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
  data: function () {
    return {
      cost: ["€", "€€", "€€€"],
    };
  },
};
</script>

<style scoped>
#app {
  background-color: white;
  background-image: url("../assets/signIn.png");
  background-size: cover;
}
.card-prop {
  top: 20%;
  width: 60vw;
}
.form-prop {
  width: 40vw;
}
.btn-prop {
  color: white !important;
  font-size: 3vh;
}
</style>