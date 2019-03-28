<template>
  <div>
    <h1>Filters & Mixins</h1>
      <input v-model="filterText">
      <ul style="text-align: left">
        <li
        v-for="fruit in filteredFruits"
        :key="fruit"
        >
          {{ fruit }}
        </li>
      </ul>
  </div>
</template>

<script>
import { fruitMixin } from './Class174_ListMixins.js';
export default {
  name: 'Class174',
  mixins: [fruitMixin]
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
</style>
