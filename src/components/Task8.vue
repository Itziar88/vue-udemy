<template>
 <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
        <hr>
        <component :is="selectedComponent">
          <p>This is the Content</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from '../components/Task8Files/Task8_Blue.vue';
  import Green from '../components/Task8Files/Task8_Green.vue';
  import Red from '../components/Task8Files/Task8_Red.vue';
export default {
  name: 'Task8',
  data(){
    return{
      selectedComponent: 'appBlue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style scoped>
</style>
