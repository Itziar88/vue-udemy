<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="title = 'Changed'">Update Title</button>
    <button @click="destroy">Destroy</button>
  </div>
</template>

<script>
export default {
  name: 'Class75',
  data() {
    return {
      title: 'The VueJS Instance'
    }
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
    created(){
    console.log('created()');
  },
    beforeMount(){
    console.log('beforeMount()');
  },
    mounted(){
    console.log('mounted()');
  },
    beforeUpdate(){
    console.log('beforeUpdate()');
  },
    updated(){
    console.log('updated()');
  },
    beforeDestroy(){
    console.log('beforeDestroy()');
  },
    destroyed(){
    console.log('destroyed()');
  },
  methods:{
    destroy(){
      this.$destroy();
    }
  }
}
</script>

<style scoped>
</style>
