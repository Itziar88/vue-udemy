<template>
  <div id="exercise">
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
        <button @click="alertMe">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
        <input type="text" @keydown="keyDown">
        <p>Value 1: {{ value1 }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
        <input type="text" @keydown.enter="keyDownEnter">
        <p>Value 2: {{ value2 }}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Task2',
  data() {
    return {
      value1: "",
      value2: ""
  };
},
  methods:{
    alertMe: function(){
      alert('Alert!');
    },
    keyDown: function(event){
      this.value1 = event.target.value;
    },
    keyDownEnter: function(event){
      this.value2 = event.target.value;
    }
  }
}
</script>

<style scoped>
</style>
