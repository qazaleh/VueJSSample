<template>


  <v-app>

      <MainRoot v-if='this.$route.name === "dashboard" || this.$route.name === "gateway"'/>
<!--      <side-menu v-if='this.$route.name === "dashboard" || this.$route.name === "gateway"'/>-->
<!--      <v-container>-->
<!--      <router-view></router-view>-->
<!--      </v-container>-->
<!--    <v-if v-if='this.$route.name === "dashboard" || this.$route.name === "gateway"'>-->
<!--      <side-menu v-if='this.$route.name === "dashboard" || this.$route.name === "gateway"'/>-->
<!--      <v-row class="px-12 mx-12"  justify="space-between">-->
<!--          <v-col cols="8" class="green ml-n8">-->
<!--            <router-view></router-view>-->
<!--          </v-col>-->
<!--          <v-col cols="3" class="purple">-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--    </v-if>-->
<!--    <v-if v-if='this.$route.name === "login" || this.$route.name === "otp"'>-->
<!--      <router-view></router-view>-->
<!--    </v-if>-->


  </v-app>

</template>

<script>


//  import LoginForm from "@/components/LoginForm";

// import SideMenu from "@/components/SideMenu";
import MainRoot from "@/components/MainRoot";
export default {
    name: 'App',
    el: '#app',
    mounted () {
      this.$vuetify.rtl = true;
    },
    components: {
        MainRoot,
      // SideMenu
      // LoginForm,

    },

    method:{
      showMenu() {
        return this.$route.name !== '/' || this.$route.name !== 'otp';
      }
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
