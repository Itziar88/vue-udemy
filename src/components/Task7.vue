<template>
 <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from '../components/Task7Files/Task7_Header.vue';
  import Footer from '../components/Task7Files/Task7_Footer.vue';
  import Servers from '../components/Task7Files/Task7_Servers.vue';
  import ServerDetails from '../components/Task7Files/Task7_ServerDetails.vue';
export default {
  components: {
    appHeader: Header, Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style scoped>
</style>
