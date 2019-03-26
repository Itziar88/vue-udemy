<template>
  <div>
    <button v-on:click="increase(2, $event)">Click me</button>
    <button v-on:click="counter++">Click me</button>
    <p>{{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10'}}</p>
    <p v-on:mousemove="updateCoordinates">
      Coordinates: {{ x }} / {{ y }}
      - <span v-on:mousemove.stop="dummy">DEAD SPOT</span>
    </p>
    <input type="text" v-on:keyup.enter="alertMe">
  </div>
</template>

<script>
export default {
  name: 'Class21',
  data() {
    return {
      counter: 0,
      x: 0,
      y: 0
  };
},
  methods:{
    increase: function(step, event) {
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
