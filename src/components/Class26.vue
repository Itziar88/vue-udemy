<template>
  <div>
    <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
    <div class="demo" :class="{red: attachRed}"></div>
    <div class="demo" :class="[color, {red: attachRed}]"></div>
    <br>
    <input type="text" v-model="color">
  </div>
</template>

<script>
export default {
  name: 'Class26',
  data() {
    return {
      attachRed: false,
      color: 'green'
    };
  },
  computed:{
    divClasses(){
      return{
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
}
</script>

<style scoped>
  .demo {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin: 10px;
  }
  .red{
    background-color: red;
  }
  .green{
    background-color: green;
  }
  .blue{
    background-color: blue;
  }
</style>
