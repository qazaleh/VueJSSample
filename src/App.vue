<template>

  <v-app>
      <div>
          <h1 style="text-align: center">{{this.$route.name}}</h1>
      </div>
      <login-form v-if='this.$route.name === "login"'/>
      <OtpView v-else-if='this.$route.name === "otp"'/>
      <PanelHelp v-else-if='this.$route.name.includes("PanelHelp")'/>
      <RightMenu  v-else></RightMenu>
<!--      <router-view  v-else></router-view>-->
  </v-app>

</template>

<script>


//  import LoginForm from "@/components/LoginForm";

// import MainRoot from "@/components/MainRoot";
import LoginForm from "@/components/LoginForm";
// import OtpCodeView from "@/components/OtpCodeView";
import RightMenu from "./components/NavigationSideMenu/RightMenu";
import PanelHelp from "@/components/PanelHelp";
import OtpView from "./components/Otp/OtpView";
export default {
    name: 'App',
    el: '#app',
    drawer: true,
    clipped: false,
    mounted () {
      this.$vuetify.rtl = true;

    },
    data () {
        return {
            miniVariant: false,
            links: [
                {
                    icon:'mdi-home-outline',
                    text:'پیشخوان',
                },
                {
                    icon:'mdi-id-card',
                    text:'درگاه‌های پرداخت',
                    route:'/gateway'
                },
                {
                    icon:'mdi-alert-circle-outline',
                    text:'راهنمای پنل',
                },
            ]
        }
    },
    components: {
        OtpView,
        RightMenu,
        PanelHelp,
        // OtpCodeView,
        // MainRoot,
        LoginForm,

    },
    created() {
      localStorage.openDrawer = false;
    },

    watch: {

    },

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
