<template>
  <div>
    <button v-on:click="increase">Click me</button>
    <p>{{ counter }}</p>
    <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>
  </div>
</template>

<script>
export default {
  name: 'Class16',
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0
  };
},
  methods:{
    increase: function () {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
}
</script>

<style scoped>
</style>
