<template>
  <div>
   <p v-if="show">You can see me!</p>
   <p v-else>Now you see me!</p>
   <p>Do you also see me?</p>
   <button @click="show = !show">Switch</button>
  </div>
</template>

<script>
export default {
  name: 'Class34',
  data() {
    return {
      show: true
    };
  }
}
</script>

<style scoped>
</style>
