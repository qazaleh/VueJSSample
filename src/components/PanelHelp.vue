<template>
<!--    <v-app>-->
<!--        <v-toolbar extension-height="28px" height="38px" app>-->
<!--            <tabs-row slot="extension"></tabs-row>-->
<!--        </v-toolbar>-->
<!--    </v-app>-->
    <v-app>
    <v-card>
        <v-toolbar extension-height="30px" height="90px" app
                color="#ffffff"
                dark
                flat
                elevation="4"
        >
            <card>
                <div class="Oval" ></div>
                <div class="Oval" style="margin-right: -20px;" ></div>
                <h1  class="h1-nav-header">آتی پی</h1>
            </card>
            <template >
                <v-tabs
                        v-model="model"
                        centered
                        slider-color="#b10dbb"
                        color="#ffffff"
                >
                    <v-tab class="v-tab-help-item"
                            v-for="item in tabItems"
                            :key="item.id"
                    >
                        {{item.title}}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
    </v-card>
    </v-app>
</template>

<script>
    export default {
        name: "PanelHelp",
        data(){
            return{
                model: 'tab-1',
                tabItems:[
                    {
                        title:'راهنمای استفاده',
                        route:'/help',
                        id:'0',
                    },
                    {
                        title:'سوالات متداول',
                        route:'/commonQuestions',
                        id:'1',
                    },
                    {
                        title:'قوانین و مقررات',
                        route:'/rules',
                        id:'2',
                    },
                    {
                        title:'حریم شخصی',
                        route:'/privacy',
                        id:'3',
                    },

                ]
            }
        },
        methods: {
            routeView(item){
                this.$router.push(item.route);
            }

        },
    }
</script>

<style scoped>
    .h1-nav-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.28px;
        text-align: right;
        color: #4221a2;
        padding-right: 5px;
        padding-top: 3px;
    }
    .Oval {
        width: 29px;
        height: 29px;
        opacity: 0.43!important;
        background-color: #d5b9e6;
        border-radius: 15px!important;
    }
    .v-tab-help-item {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #b10dbb;
    }

</style>
