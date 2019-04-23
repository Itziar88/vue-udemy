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
import Counter from './Class255Files(NoNamespace)/Class255_Counter(NoNamespace).vue';
import Result from './Class255Files(NoNamespace)/Class255_Result(NoNamespace).vue';
import AnotherResult from './Class255Files(NoNamespace)/Class255_AnotherResult(NoNamespace).vue';
import AnotherCounter from './Class255Files(NoNamespace)/Class255_AnotherCounter(NoNamespace).vue';

export default {
  name: 'Class255(NoNamespace)',
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue', event.target.value);
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
