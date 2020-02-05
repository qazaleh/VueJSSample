<template>
    <v-app>
        <v-content >
            <side-menu/>
            <v-row wrap >
            <v-col md="9" lg="9" xl="9"  sm="12" xs="12"  class="#f4f5f7">
                <v-row style="  align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        border-radius: 18px!important;
        margin-right: 20px">
                <v-card  content="" width="80%" height="fill-height" style="border-radius: 18px !important;">
                <router-view></router-view>
                </v-card>
                </v-row>
            </v-col>
            <v-col md="3" lg="3" xl="3"  sm="12" xs="12"  class="white">
                <v-row justify="center" align-content="center">
                    <v-card flat class="transparent">
                        <home-toolbar/>
                    </v-card>
                </v-row>

                <v-row justify="center" align-content="center pt-8" >
                    <v-card flat class="transparent">
                        <UserInformationHome/>
                    </v-card>
                </v-row>
                <v-row justify="center" align-content="center pt-8"  >
                    <user-time-line v-bind:complete-register="true" user-state="registered"></user-time-line>
                </v-row>
            </v-col>
        </v-row>
        </v-content>
    </v-app>

</template>

<script>
    import SideMenu from "@/components/SideMenu";
    import HomeToolbar from "@/components/HomeToolbar";
    import UserInformationHome from "@/components/UserInformationHome";
    import UserTimeLine from "@/components/UserTimeLine";
    export default {
        name: "MainRoot",
        components: {
            UserTimeLine,
            UserInformationHome,
            HomeToolbar,
            SideMenu
        },
        data () {
            return {
                props: {
                },

            }
        },
        methods: {
            closeSideView() {
                this.toggleDrawer = !this.toggleDrawer;
            }

        },

    }
</script>

<style scoped>
    .v-btn-side-menu {
        width: 35px;
        height: 35px;
        background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);
    }

</style>