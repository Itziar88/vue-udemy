<template>
  <div>
    <ul  class="lista">
      <li v-for="(ingredient, i) in ingredients">{{ ingredient }} ({{ i + 1}})</li>
    </ul>
    <button @click="ingredients.push('spices')">Add New</button>
    <br>
    <ul class="lista">
      <li v-for="person in persons" :key="person">
        <div v-for="(value, key, index) in person">{{ key }}: {{ value  }} ({{ index }})</div><br>
      </li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <br>
    <template v-for="(ingredient, index) in ingredients">
      <h1>{{ ingredient }}</h1>
      <p>{{ index }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Class38',
  data() {
    return {
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        {name: 'Max', age: 27, color: 'red'},
        {name: 'Anna', age: 'unknown', color: 'blue'}
      ]
    };
  }
}
</script>

<style scoped>
  .lista{
    text-align: left;
  }
</style>
