<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
    <br>
    <p v-html="finishedLink"></p>
  </div>
</template>

<script>
export default {
  name: 'Class12',
  data() {
    return {
      title: 'Hello World!' ,
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>'
  };
},
  methods:{
    sayHello: function(){
      return this.title = 'Hello!';
    }
  }
}
</script>

<style scoped>
</style>
