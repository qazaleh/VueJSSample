<template>
    <v-container fluid class="transparent">
    <v-toolbar  class="transparent"  flat app light elevation="0" >
            <v-toolbar-title class="v-toolbar-title-profile-header">پروفایل کاربری</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="btn-back transparent" elevation="0" >
                بازگشت
                <v-icon color="#253858">mdi-chevron-left</v-icon>
            </v-btn>
        </v-toolbar>

                <v-row class="transparent">
                    <v-col cols="12" class="transparent">
                        <v-row
                                :align="start"
                                :justify="end"
                                class="transparent"
                        >
                            <p class="p-switch-labels" style="padding-right: 10px">شخصیت حقیقی</p>
                            <v-switch
                                      class="v-switch-small"
                                      v-model="switch1" inset
                                      color="grey darken-1"
                                      hide-details></v-switch>
                            <p class="p-switch-labels" style="margin-right: -10px">شخصیت حقوقی</p>

<!--                            class="ma-3 pa-6"-->
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>



<!--            <v-row justify="end" align="start">-->
<!--                    <p class="p-switch-labels" >شخصیت حقیقی</p>-->
<!--                    <v-switch v-model="switch1" inset-->
<!--                              color="grey darken-1"-->
<!--                              hide-details></v-switch>-->
<!--                    <p class="p-switch-labels" >شخصیت حقوقی</p>-->
<!--            </v-row>-->


</template>
<script>
    export default {
        name: "ProfileView",

        data(){
            return{
                switch1: false,
            }
        }
    }
</script>

<style scoped>
    .v-row-blur{
        background-color: #4221a2;
    }
    .v-toolbar-title-profile-header{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
    }
    .btn-back{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
    .p-switch-labels{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        text-align: right;
        color: #253858;
        padding-top: 22px;
    }
    .v-switch-small {
        transform: scale(0.775);
        transform-origin: right;
        padding-right: 8px;
    }
</style>