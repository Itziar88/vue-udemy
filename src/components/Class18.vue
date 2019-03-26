<template>
  <div>
    <button v-on:click="increase(2)">Click me</button>
    <p>{{ counter }}</p>
    <p v-on:mousemove="updateCoordinates">
      Coordinates: {{ x }} / {{ y }}
      - <span v-on:mousemove.stop="dummy">DEAD SPOT</span>
    </p>
    <input type="text" v-on:keyup.enter="alertMe">
  </div>
</template>

<script>
export default {
  name: 'Class18',
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0
  };
},
  methods:{
    increase: function(step) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event){
      alert('alert! ' + event.target.value);
    }
  }
}
</script>

<style scoped>
</style>
