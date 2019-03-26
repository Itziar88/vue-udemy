<template>
  <div>
    <button @click="counter++">Increase</button>
    <button @click="counter--">Decrease</button>
    <button @click="secondCounter++">Increase Second</button>
    <p>Counter: {{ counter }} {{ secondcounter }}</p>
    <p>Result: {{ result() }} | {{ output }}</p>
  </div>
</template>

<script>
export default {
  name: 'Class23',
  data() {
    return {
      counter: 0,
      secondCounter: 0
    };
  },
  computed: {
    output(){
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  },
  watch:{
    counter(value) {
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result(){
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    }
  }
}
</script>

<style scoped>
</style>
