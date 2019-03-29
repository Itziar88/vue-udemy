import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//Filter para Task11
Vue.filter('calculateLength', (value) => {
  return value + ' (' + value.length + ')';
});

export const serverBus = new Vue();
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
