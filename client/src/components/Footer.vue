<template>
  <v-footer color="#141515" padless fixed bottom class="mt-16">

        <v-btn v-for="link in links" :key="link" color="white" text flat :to="link.route">
          {{ link.text }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="28px">
            {{ icon }}
          </v-icon>
        </v-btn>
  </v-footer>

</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    links: [
      {text:"Home", route:"/"}, 
      {text:"About Us", route:"/aboutus"}, 
      {text:"Team", route:"/team"}],
  }),
};
</script>