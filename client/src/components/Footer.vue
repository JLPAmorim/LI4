<template>
  <v-footer dark padless fixed bottom class="mt-16">
    <v-card class="flex" flat tile height="100%">
      <v-card-title class="#0B0D17" height="1">
        <v-btn v-for="link in links" :key="link" color="white" text rounded>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="28px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <!--
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>RASBet</strong>
      </v-card-text>
      -->
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    links: ["Home", "About Us", "Team", "Contact Us"],
  }),
};
</script>