<template>
  <div>
    <div class="demo" :style="{backgroundColor: color}"></div>
    <div class="demo" :style="myStyle"></div>
    <div class="demo" :style="[myStyle, {height: width +'px'}]"></div>
    <br>
    <input type="text" v-model="color">
    <input type="text" v-model="width">
  </div>
</template>

<script>
export default {
  name: 'Class29',
  data() {
    return {
      color: 'gray',
      width: 100
    };
  },
  computed: {
    myStyle(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
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
</style>
