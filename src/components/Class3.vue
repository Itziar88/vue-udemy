<template>
  <div>
    <input type="text" v-on:input="changeTitle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Class3',
  data() {
    return { title: 'Hello World'  }
  },
  methods:{
    changeTitle: function(event){
      this.title = event.target.value;
    }
  }
}
</script>

<style scoped>
</style>
