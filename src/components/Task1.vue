<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p>Name: {{name}} - Age: {{age}}</p>
    <p>My age multiplied by 3: {{age*3}}</p>
    <p>Random Number: {{ randomNumber() }}</p>
    <p>Image</p>
    <div>
      <img v-bind:src="image" style="width:100px;height:100px">
    </div>
    <div>
      <input type="text" v-on:input="changeName">
      <p>Input: {{changedName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task1',
  data() {
    return {
      title: 'Task1' ,
      name: 'Itziar',
      age: 31,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Leucanthemopsis_alpina07.jpg/220px-Leucanthemopsis_alpina07.jpg",
      changedName:""
  };
},
  methods:{
    randomNumber: function(){
      return Math.floor(Math.random()*10);
    },
    changeName: function(event){
      this.changedName = event.target.value;
    }
  }
}
</script>

<style scoped>
</style>
