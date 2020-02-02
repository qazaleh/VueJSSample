<template>


  <v-app>
    <router-view></router-view>
<!--    <login-form/>-->
  </v-app>
<!--  <v-app class="grey lighten-4">-->
<!--    <MyAppNavBar/>-->

<!--    <v-content class="mx-4 mb-4">-->
<!--      <router-view></router-view>-->
<!--    </v-content>-->

<!--  </v-app>-->

<!--  <v-app>-->
<!--    <v-content>-->

<!--      <div id="app">-->

<!--        <o-t-p-code-view/>-->
<!--&lt;!&ndash;        <o-t-p-login-view/>&ndash;&gt;-->
<!--&lt;!&ndash;        <side-menu/>&ndash;&gt;-->
<!--&lt;!&ndash;        <router-view></router-view>&ndash;&gt;-->
<!--      </div>-->
<!--    </v-content>-->
<!--  </v-app>-->
</template>

<script>


//  import LoginForm from "@/components/LoginForm";

  export default {
    name: 'App',
    el: '#app',
    mounted () {
      this.$vuetify.rtl = true;
    },
    components: {
      // LoginForm,

    },


    data: () => ({

    }),
  };
</script>
<style scoped>
  .rounded-Button{
    background-color: purple;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .rounded-card{
    background-color: grey;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
</style>
