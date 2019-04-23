<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './Class255Files/Class255_Counter.vue';
import Result from './Class255Files/Class255_Result.vue';
import AnotherResult from './Class255Files/Class255_AnotherResult.vue';
import AnotherCounter from './Class255Files/Class255_AnotherCounter.vue';
import * as types from '../store/types';

export default {
  name: 'Class255',
  computed: {
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      }
    }
  },
  methods: {
    updateValue(event){
      this.$store.dispatch(types.UPDATE_VALE, event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter,
  }
}
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

</style>
