<template>
 <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from '../components/Task6Files/Task6_Header.vue';
  import Footer from '../components/Task6Files/Task6_Footer.vue';
  import Servers from '../components/Task6Files/Task6_Servers.vue';
  import ServerDetails from '../components/Task6Files/Task6_ServerDetails.vue';
export default {
  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style scoped>
</style>
