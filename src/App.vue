<template>


  <v-app>

<!--      <MainRoot v-if='this.$route.name === "dashboard" || this.$route.name === "gateway"'/>-->
<!--      <login-form v-if='this.$route.name === "login"'/>-->
<!--      <otp-code-view v-if='this.$route.name === "otp"'/>-->

      <login-form v-if='this.$route.name === "login"'/>
      <otp-code-view v-else-if='this.$route.name === "otp"'/>
      <PanelHelp v-else-if='this.$route.name === "panelHelp"'/>
<!--      <MainRoot v-else/>-->

      <router-view  v-else></router-view>

  </v-app>

</template>

<script>


//  import LoginForm from "@/components/LoginForm";

// import MainRoot from "@/components/MainRoot";
import LoginForm from "@/components/LoginForm";
import OtpCodeView from "@/components/OtpCodeView";
import PanelHelp from "@/components/PanelHelp";
// import PanelHelp from "@/components/PanelHelp";
export default {
    name: 'App',
    el: '#app',

    mounted () {
      this.$vuetify.rtl = true;

    },
    components: {
        PanelHelp,
        // PanelHelp,
        OtpCodeView,
        // MainRoot,
        LoginForm,

    },

    watch: {

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
