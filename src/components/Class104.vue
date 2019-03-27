<template>
 <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <app-user></app-user>
          </div>
        </div>
    </div>
</template>

<script>
  import User from '../components/Class104/Class104_User.vue';
export default {
  components: {
    appUser: User
  }
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
  div .component{
    border: 1px solid black;
    padding: 30px;
  }
  .container{
    text-align: left;
  }
</style>
