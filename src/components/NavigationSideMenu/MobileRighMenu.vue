<template>
    <div>
<!--        <v-system-bar color="#b10ebb"></v-system-bar>-->
        <v-app-bar
                color="#b10ebb"
                dark
                :style="{background: gradient}"
                prominent
                dense
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer

                app
                v-model="drawer"
                dark
                right
                :style="{background: gradient}"
                height="100%"
                absolute
                temporary
                :hide-overlay="true"
        >
            <v-list>
                <v-row  style="padding-right: 30px;padding-top: 32px;padding-bottom: 32px">
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
    export default {
        name: "MobileRighMenu",
        data () {
            return {
                miniVariant: true,
                drawer: false,
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
        methods:{
            routeView(item){
                console.log("&*&*&*&*&*&*&*&*&*&*&*",item.route);

                this.$router.push(item.route);
            },
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



</style>