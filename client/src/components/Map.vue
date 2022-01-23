<template>
  <div>
    <h1>MAP HERE</h1>
    <p>{{ coords.lat }} : {{ coords.lng }}</p>

    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      style="width: 50px; height: 50px"
    />
  </div>
</template>



<script>
export default {
  data() {
    return {
      coords: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coords) => {
        this.coords = coords;
      })
      .cath((error) => alert(error));
  },
  methods: {},
};
</script>