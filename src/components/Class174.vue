<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-3 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <br>
        <input v-model="filterText">
        <ul style="text-align: left">
          <li
            v-for="fruit in filteredFruits"
            :key="fruit"
          >
            {{ fruit }}
          </li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './Class174_List.vue';
import { fruitMixin } from './Class174_ListMixins.js';
export default {
  name: 'Class174',
  mixins: [fruitMixin],
  data(){
    return{
      text: 'Hello there!',
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
</style>
