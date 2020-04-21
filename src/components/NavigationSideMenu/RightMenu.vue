<template>
    <div v-if="isMobile()">
       <mobile-righ-menu></mobile-righ-menu>
    </div>
    <div v-else >
        <v-navigation-drawer

                 app
                 v-model="drawer"
                 disable-resize-watcher
                 dark
                 right
                 :mini-variant="miniVariant"
                 class="primary lighten-1"
                 :style="{background: gradient}"
                 height="100%"
                 permanent
        >
            <v-list>
                <v-row  style="padding-right: 20px;padding-top: 32px;padding-bottom: 32px">
                    <div  class="Oval"></div>
                    <div  class="Oval" style="margin-right: -20px;" ></div>
                    <h1  class="h1-headerName">آتی پی</h1>
                </v-row>

                                  <v-list-item
                                            v-for="item in links"
                                            :key="item.text"
                                            link
                                            @click="routeView(item)"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon}}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content class="ps-0">
                                            <v-list-item-title class="v-list-item-title" >{{item.text}}</v-list-item-title>
                                       </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                                   </v-navigation-drawer>
                                        <v-content >
                                                <v-row class=""  >
                                                    <v-col class="" cols="12" sm="12" md="12"  lg="9" xl="9">
                                                        <v-row>
                                                                <v-btn
                                                                        class="v-btn-side-menu"
                                                                        @click.stop="expandAndCollapseMenu"
                                                                        fab
                                                                        dark
                                                                        color="#b10ebb"
                                                                >
                                                                    <v-icon class="v-icon-row" v-if="miniVariant == true" >mdi-chevron-left</v-icon>
                                                                    <v-icon class="v-icon-row" v-else >mdi-chevron-right</v-icon>
                                                                </v-btn>
                                                                <router-view/>
                                                        </v-row>
                                                    </v-col>

                                                    <v-col class="" cols="12" sm="12" md="12"  lg="3" xl="3">
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
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                        </v-content>
    </div>
</template>
<script>
    import UserInformationHome from "../UserInformationHome";
    import UserWorkFlow from "../UserWorkFlow";
    import HomeToolbar from "../HomeToolbar";
    import MobileRighMenu from "./MobileRighMenu";

    export default {
        name: "RightMenu",
        components: {
            MobileRighMenu,
            // HomeBaseComponent,
            UserInformationHome,UserWorkFlow,HomeToolbar
        },
        created() {
            this.mini();
        },
        data () {
            return {
                miniVariant: true,
                drawer: true,
                clipped: false,

                colors: [
                    { id: 0, hex: "#27269c", disabled: false },
                    { id: 1, hex: "#e005c5", disabled: false },
                ],
                links: [
                    {
                        icon:'mdi-home-outline',
                        text:'پیشخوان',
                        route:'/dashboard'
                    },
                    {
                        icon:'mdi-id-card',
                        text:'درگاه‌های پرداخت',
                        route:'/gateway'
                    },
                    {
                        icon:'mdi-alert-circle-outline',
                        text:'راهنمای پنل',
                        route:'/PanelHelp'
                    },
                    // {
                    //     icon:'mdi-wallet-outline',
                    //     text:'کیف پول',
                    //     route:'/team'
                    // },
                    {
                        icon:'mdi-card-text-outline',
                        text:'حساب بانکی',
                        route:'/bankingAccounts'
                    },
                    // {
                    //     icon:'mdi-calculator-variant',
                    //     text:'امکانات پرداخت',
                    //     route:'/team'
                    // },
                    // {
                    //     icon:'mdi-account-multiple-outline',
                    //     text:'باشگاه مشتریان',
                    //     route:'/team'
                    // },
                    // {
                    //     icon:'mdi-comment-text-multiple-outline',
                    //     text:'تیکت ها',
                    //     route:'/team'
                    // },


                ]
            }},
        methods: {
            closeSidebarPanel() {
                this.isPanelOpen = !this.isPanelOpen;
            },
            expandAndCollapseMenu() {
                this.miniVariant = !this.miniVariant;
                // console.log("fucking miniVariant property",this.mini)
                // console.log("i click button",this.mdAndDown)

            },
            routeView(item){
                this.$router.push(item.route);
            },
            mini() {
                // console.log("this is mini msggggg",this.mdAndDown)
                // return !(this.mdAndUp);

            },
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        },
        computed: {
            gradient() {
                let colors = "linear-gradient(-31deg";
                this.colors.forEach(function(e) {
                    colors += "," + e.hex;
                });
                colors += ")";
                return colors;
            }
        },

    }
</script>

<style scoped>
    .Oval {
        width: 29px;
        height: 29px;
        opacity: 0.43!important;
        background-color: #d5b9e6;
        border-radius: 25px!important;
    }
    .subheading{
        font-family: "IRANSansMobile(FaNum)";
        font-size: medium;
    }

    .v-navigation-drawer-flat {
        border-radius: 0!important;
        /*clip-path: inset(0px 0px fill 249px);*/
        /*shape-outside: ellipse(150px 300px at 50% 50%);*/
        transition: all 500ms ease-in-out 30ms;
        height: 100%!important;
    }
    /*.v-navigation-drawer--close.v-navigation-drawer--temporary {*/
    /*    !*transform: translateX(80%) !important;*!*/
    /*    height: 100%*/
    /*}*/
    .v-row-center{
        align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        padding-top: 32px;
        padding-bottom: 12px;
    }
    .h1-headerName {
        color: white;
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 20px;
        padding-right: 5px;
        padding-top: 3px;
    }
    .v-list-item-title{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #ffffff;
    }

    .v-btn-side-menu {
        width: 40px;
        height: 40px;
        /*border-right: lightgray 9px solid;*/
        /*background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);*/
    }

    .v-list-item--link::before {
        background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);
        background-color: transparent;
        border-right: 2px solid #f0f3f8;
        border-radius: 0px!important;
    }

    .v-card-rounded-btn{
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 35px !important;
        align-content: center;
        align-items: center;
    }

    .router-view-main {
        margin: 0px;
        padding: 0px;
    }
    .router-view-main::before {
        content: "Read this -";
    }

    .v-icon-row {
        /*margin: 0px;*/
        /*padding: 0px;*/
        /*border-right: lightcoral;*/
        /*border-width: 2px;*/
        /*border-style: solid;*/
    }
</style>