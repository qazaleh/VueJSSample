<template>
<!--    <v-app-bar-->
<!--            color="grey lighten-5"-->
<!--            light-->
<!--            prominent-->
<!--            dense-->
<!--    >-->
<!--        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

    <v-navigation-drawer
                    v-model="drawer"
                    floating
                    app
                    fixed
                    temporary
                    clipped
                    right
                    width="249px"
                    :style="{background: gradient}"
                    disable-resize-watcher
            >

                    <v-list>

                        <v-row class="mb-12" no-gutters>
                            <v-col>
                                <v-card  color="grey" width="30px" height="30px" class="transparent rounded-card mt-3 mr-8" flat style="border-radius: 120px" >
                                    <v-card  color="grey" width="30px" height="30px" class="transparent rounded-card-2 mt-3 mr-3"   style="border-radius: 120px">
                                    </v-card>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card-title class="headline white--text font-weight-light pt-2 pr-3 mr-n12" style="font-size:2em">آتی پی</v-card-title>
                            </v-col>
                        </v-row>
                    <v-list-item  link v-for="l in links" :key="l.text" router :to="l.route">
                        <v-list-item-icon >
                            <v-icon class="white--text">{{l.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="white--text subheading" to="/">{{l.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
<!--    </v-app-bar>-->


</template>

<script>

    export default {

    name: "SideMenu",

        drawer:true,
        data () {
            return {
                miniVariant: false,
                expandOnHover: true,
                colors: [
                    { id: 0, hex: "#27269c", disabled: false },
                    { id: 1, hex: "#e005c5", disabled: false },
                ],
                links: [
                    {
                        icon:'mdi-home-outline',
                        text:'پیشخوان',
                        route:'/'
                    },
                    {
                        icon:'mdi-id-card',
                        text:'درگاه‌های پرداخت',
                        route:'/profile'
                    },
                    {
                        icon:'mdi-wallet-outline',
                        text:'کیف پول',
                        route:'/team'
                    },
                    {
                        icon:'mdi-card-text-outline',
                        text:'حساب بانکی',
                        route:'/team'
                    },
                    {
                        icon:'mdi-calculator-variant',
                        text:'امکانات پرداخت',
                        route:'/team'
                    },
                    {
                        icon:'mdi-account-multiple-outline',
                        text:'باشگاه مشتریان',
                        route:'/team'
                    },
                    {
                        icon:'mdi-comment-text-multiple-outline',
                        text:'تیکت ها',
                        route:'/team'
                    },
                    {
                        icon:'mdi-alert-circle-outline',
                        text:'راهنمای پنل',
                        route:'/team'
                    },

                ]
        }},
        methods: {
            updateAppDrawer() {
                this.$emit('updateDrawer');
                this.drawer = !this.drawer;
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
        }
    }
</script>

<style scoped>
    .rounded-card {

        opacity: 0.34;
        border-color: #101cff;
        border-width: medium;
    }
    .rounded-card-2 {

        opacity: 0.5;
        border-color: #101cff;
        border-width: medium;
    }
    .subheading{
        font-family: "IRANSansMobile(FaNum)";
        font-size: medium;
    }
</style>