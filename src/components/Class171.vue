<template>
  <div class="container">
    <div class="row">
      <class class="col-xs-3 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul style="text-align: left">
          <li
            v-for="fruit in filteredFruits"
            :key="fruit"
          >
            {{ fruit }}
          </li>
        </ul>
      </class>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Class171',
  data(){
    return{
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  }
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
</style>
