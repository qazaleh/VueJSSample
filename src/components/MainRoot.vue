<template>
    <v-app>
            <side-menu/>
        <v-container fluid  class="#f4f5f7">
            <v-row justify="end" no-gutters class="transparent">
                <v-col class="transparent"  cols="12" md="9">
                    <v-row style="  align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        border-radius: 18px!important;">
                        <v-card class="transparent" flat width="85%" height="fill-height" style="border-radius: 0px !important;">
<!--                            <router-view class="view two" name="a"></router-view>-->
                            <router-view/>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col
                        :class="{'mt-n12': $vuetify.breakpoint.mdAndUp,}"
                        class="white"
                       cols="12" md="3">
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
                        <UserWorkFlow></UserWorkFlow>
<!--                        <user-time-line v-bind:complete-register="true" user-state="registered"></user-time-line>-->
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import SideMenu from "@/components/SideMenu";
    import HomeToolbar from "@/components/HomeToolbar";
    import UserInformationHome from "@/components/UserInformationHome";
    import UserWorkFlow from "@/components/UserWorkFlow";
    // import UserTimeLine from "@/components/UserTimeLine";
    export default {
        name: "MainRoot",
        components: {
            UserWorkFlow,
            // UserTimeLine,
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
<style>

</style>