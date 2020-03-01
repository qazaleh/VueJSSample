<template>
    <v-app>
        <v-card>
            <v-toolbar
                    color="#ffffff"
                    dark
                    flat
            >
                <div class="Oval" style="margin-right:39px" ></div>
                <div class="Oval" style="margin-right: -20px;" ></div>
                <h1  class="h1-nav-header">آتی پی</h1>
                <template v-slot:extension>
                    <v-tabs
                            v-model="tab"
                            align-with-title
                            color="#b10dbb"
                            light
                            left
                            background-color="#ffffff"
                    >
                        <v-tabs-slider color="#b10dbb"></v-tabs-slider>

                        <v-tab class="v-tab-help-item" v-for="item in tabItems" :key="item" :to="item.route" >
                            {{ item.title }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-tabs-items v-model="tab">
                    <v-tab-item
                      v-for="item in tabItems"
                      :key="item"
                      :to="{path:item.route}"
                    >
                    </v-tab-item>
            </v-tabs-items>
        </v-card>
        <v-container fluid fill-heigh>
            <router-view></router-view>
        </v-container>

    </v-app>
</template>

<script>
    export default {
        name: "PanelHelp",
        data(){
            return{
                model: 'tab',
                tabItems:[
                    // {
                    //     title:'راهنمای استفاده',
                    //     route:'/help',
                    //     id:'0',
                    // },
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
                    {
                        title:'ثبت شکایات',
                        route:'/complainForm',
                        id:'3',
                    },

                ]
            }
        },
        methods: {
            routeView(item){
                this.$router.push(item.route);
            },
            firstRouter(){
                 this.$router.push("/commonQuestions");
            }

        },
        created() {
        },
        mounted(){
            this.firstRouter();
        }
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
        padding-right: 25px;
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
