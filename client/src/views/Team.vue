<template>
  <v-app>
    <Header />
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col cols="12" md="3" v-for="member in members" :key="member">
          <!--Member Information-->
          <v-card color="transparent" flat>
            <!--Photo-->
            <v-img
              class="mx-auto img-prop"
              :src="require('../assets/' + member.photo + '.jpg')"
            />
            <!--Name-->
            <v-card-text class="name-prop mt-5 text-center"
              >{{ member.name }}
            </v-card-text>
            <!--Number-->
            <v-card-text class="number-prop mt-n5 text-center"
              >{{ member.number }}
            </v-card-text>
            <!--Description-->
            <v-card-text class="desc-prop mt-n5 text-center"
              >{{ member.description }}
            </v-card-text>
          </v-card>
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
  data: function () {
    return {
      members: [
        {
          name: "Duarte Serrão",
          number: "A83630",
          photo: "defaultuser",
          description:
            "Designer do site. Diz que todas as suas ideias do design são originais, mas temos as nossas dúvidas.",
        },
        {
          name: "Guilherme Gonçalves",
          number: "A88280",
          photo: "defaultuser",
          description:
            "Técnico de qualidade. Garante que tudo funciona bem, em todos os browsers e devices. 'Como podem ver, funciona no meu PC', diz ele em todas as reuniões",
        },
        {
          name: "João Amorim",
          number: "A74806",
          photo: "defaultuser",
          description:
            "Lider da equipa. Programa à cerca de 2 dias. (TODO: incrementar os dias de programação amanhã)",
        },
        {
          name: "Renato Machado",
          number: "A84696",
          photo: "defaultuser",
          description:
            "Tipo fixe. Apareceu um dia do nada na empresa, sentou-se e começou a trabalhar na base de dados. Ninguém sabe se é motivo de preocupação ou não.",
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  background-color: white;
  height: "50vh";
}

.img-prop {
  max-height: 25vh !important;
  max-width: 25vh !important;
}

.card-prop {
  height: 35vh !important;
  width: 30vh !important;
  top: 20%;
}

.name-prop {
  color: #002423 !important;
  font-size: 3vh;
}

.number-prop {
  color: #002423 !important;
  opacity: 60%;
  font-size: 2.5vh;
}
.desc-prop {
  color: #002423 !important;
  opacity: 60%;
  font-size: 2.5vh;
}
</style>
