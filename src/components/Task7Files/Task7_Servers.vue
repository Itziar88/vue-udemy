<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="server in servers"
        :server="server"
      >
      </app-server>
    </ul>
  </div>
</template>

<script>
import Server from '../Task7Files/Task7_Server.vue';
  export default {
    data(){
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critial' },
          { id: 3, status: 'Unknown' },
          { id: 4, status: 'Normal' }
        ]
      };
    },
    components: {
      appServer: Server
    }
  }
</script>

<style scoped>
</style>
