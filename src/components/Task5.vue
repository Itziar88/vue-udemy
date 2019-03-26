<template>
  <div id="exercise">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs.
    Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="showMe = !showMe">Toggle</button>
      <p v-if="showMe">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="showMe">You either see me ...</p>
      <p v-show="!showMe">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul class="lista">
      <li v-for="person in array" :key="person">{{ person }}</li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object:
    {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}.
    Also print the index of each item. -->
    <ul class="lista">
      <li v-for="(value, key, index) in myObject" :key="key">{{ key }}: {{ value}} ({{ index }})</li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array:
    {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul class="lista">
      <li v-for="value in testData" :key="value">
        <template v-if="Array.isArray(value)">
          <div v-for="element in value" :key="element">{{ element }}</div>
        </template>
        <template v-else>{{ value }}</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Task5',
  data() {
    return {
      showMe: true,
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData:{
        name: 'TESTOBJETC',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      }
    };
  }
}
</script>

<style scoped>
  .lista{
    text-align: left;
  }
</style>
