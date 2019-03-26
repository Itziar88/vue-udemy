<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ sayHello() }}</p>
  </div>
</template>

<script>
export default {
  name: 'Class10',
  data() {
    return { title: 'Hello World'  }
  },
  methods:{
    sayHello: function(){
      return 'Hello! ' + this.title;
    }
  }
}
</script>

<style scoped>
</style>
