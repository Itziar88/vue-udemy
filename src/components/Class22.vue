<template>
  <div>
    <input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Class22',
  data() {
    return {
      name: 'Max'
    };
  }
}
</script>

<style scoped>
</style>
