<template>
  <div>
    <p>Server Status {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  name: 'Class95',
  data(){
    return{
      status: 'Critial'
    }
  },
  methods:{
    changeStatus(){
      this.status = 'Normal'
    }
  }
}
</script>

<style scoped>
</style>
