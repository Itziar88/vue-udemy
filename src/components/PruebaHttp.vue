<template>
  <div class="prueba">
    <h1>Prueba Http</h1>
    <div
      v-for="blog in blogs"
      :key="blog"
    >
      <h2> {{ blog.title }}</h2>
      <article> {{ blog.body }} </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PruebaHttp',
  data(){
    return{
      blogs:[]
    };
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0, 10);
    })
  }
}
</script>

<style scoped>
  .prueba {
    margin: 20px;
    text-align: left;
  }
</style>
