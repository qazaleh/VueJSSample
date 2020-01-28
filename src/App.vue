<template>
  <v-app>
    <v-content>

      <div id="app">
        <side-menu/>
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>

  // import Dashboard from "@/components/Dashboard";
  // import Team from "@/components/Team";
  // import Projects from "@/components/Projects";
  import SideMenu from "@/components/SideMenu";

  export default {
    name: 'App',
    el: '#app',
    mounted () {
      this.$vuetify.rtl = true;
    },
    components: {
        // Projects,
        // Team,
        // Dashboard,
        SideMenu,
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
