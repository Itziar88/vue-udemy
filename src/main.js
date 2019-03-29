import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-e3147.firebaseio.com/';
// Vue.http.interceptors.push((request, next) => {
//   //console.log(request);
//   if(request.method == 'POST'){
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = () => {return {messages: response.body}}
//   });
// });

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
