<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-smoffset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <input
          class="form-control"
          type="text"
          v-model="node"
        >
        <br>
        <button
          class="btn btn-primary"
          @click="fetchData"
        >
          Get Data
        </button>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="u in users"
            :key="u"
          >
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
        <button @click="conseguirDatos">
          Prueba
        </button>
      </div>
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
  methods:{
    fetchData(){
    //   this.$http.get('data.json')
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       const resultArray = [];
    //       for(let key in data){
    //         resultArray.push(data[key]);
    //       }
    //       this.users = resultArray;
    //     });
      this.resource.getData({node: this.node})
      .then(response => {
        return response.json();
      })
      .then(data => {
        const resultArray = [];
        for(let index in data){
          resultArray.push(data[index]);
        }
        this.users = resultArray;
      });
    }
  },
  created(){
    // const customActions = {
    //   getData: {method: 'GET'}
    // };
    // this.resource = this.$resource('{node}.json', {}, customActions);
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    })
  }
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
</style>
