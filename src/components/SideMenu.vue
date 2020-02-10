<template>
<div>
    <v-app-bar
            class="transparent"
            light
            elevation="0"
            dense
    >
        <div  v-if="drawer" style="padding-right: 250px;">
            <v-btn
                    class="v-btn-side-menu"
                    @click.stop="drawer = !drawer"
                    fab
                    small
                    dark
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <div  v-else style="padding-right: 10px;">
            <v-btn
                    class="v-btn-side-menu"
                    @click.stop="drawer = !drawer"
                    fab
                    small
                    dark
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </div>

<!--        <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>-->
    </v-app-bar>
    <v-navigation-drawer
                                   class="v-navigation-drawer-flat "

                                   temporary
                                   app
                                   right
                                   dark
                                   v-model="drawer"
                                   :style="{background: gradient}"
                                   disable-resize-watcher
                                   width="249px"
    >

        <v-list
                                       dense
                                       nav
                               >
                                   <v-row  style="padding-right: 20px;padding-top: 32px;padding-bottom: 32px">
                                       <div  class="Oval"></div>
                                       <div  class="Oval" style="margin-right: -20px;" ></div>
                                       <h1  class="h1-headerName">آتی پی</h1>
                                   </v-row>
                                   <v-row style="      align-content: center;alignment: center;align-items: center;justify-content: center;justify-items: center; padding-bottom: 5px">

                                   </v-row>

                                   <v-list-item
                                           v-for="item in links"
                                           :key="item.title"
                                           link
                                           router :to="item.route"
                                   >
                                       <v-list-item-icon>
                                           <v-icon>{{ item.icon }}</v-icon>
                                       </v-list-item-icon>

                                       <v-list-item-content class="ps-0">
                                           <v-list-item-title class="v-list-item-title" >{{ item.text }}</v-list-item-title>
                                       </v-list-item-content>
                                   </v-list-item>
                               </v-list>
                           </v-navigation-drawer>
</div>
</template>

<script>

    export default {

        name: "SideMenu",
        data () {
            return {
                mini:false,
                drawer:false,
                props: {

                },
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
                    // {
                    //     icon:'mdi-wallet-outline',
                    //     text:'کیف پول',
                    //     route:'/team'
                    // },
                    // {
                    //     icon:'mdi-card-text-outline',
                    //     text:'حساب بانکی',
                    //     route:'/team'
                    // },
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
                    // {
                    //     icon:'mdi-alert-circle-outline',
                    //     text:'راهنمای پنل',
                    //     route:'/team'
                    // },

                ]
            }},
        methods: {
            closeSidebarPanel() {
                this.isPanelOpen = !this.isPanelOpen;
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
        }
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

    .v-btn-side-menu {
        width: 35px;
        height: 35px;
        background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);
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


</style>