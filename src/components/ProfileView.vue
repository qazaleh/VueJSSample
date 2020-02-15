<template>
    <v-container>
        <v-row >
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-right-content" style="margin-right: 10px">
                    <v-toolbar-title class="v-toolbar-title-profile-header">پروفایل کاربری</v-toolbar-title>
                </v-row>
            </v-col>
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-left-content">
                <v-btn class="btn-back transparent" elevation="0" >
                                    بازگشت
                     <v-icon color="#253858">mdi-chevron-left</v-icon>
                </v-btn>
                </v-row>
            </v-col>
        </v-row>


        <v-container fluid class="white" style="border-radius: 18px!important;">
            <v-row
                    class="transparent  v-row-right-content" style="padding-right: 10px">
                <p class="p-profile-header" >{{viewTitle()}}</p>
            </v-row>
            <v-row  class=" v-row-right-content wrap" style="margin-right: 5px; margin-top: -10px" >
                <v-col cols="6"
                       class=" v-row-right-content wrap">
                    <v-row
                            class="transparent  v-row-right-content">
                        <p class="p-switch-labels" >شخصیت حقیقی</p>
                        <v-switch
                                class="v-switch-small"
                                v-model="switch1" inset
                                color="#b10dbb"
                                hide-details
                                light
                        ></v-switch>
                        <p class="p-switch-labels">شخصیت حقوقی</p>
                    </v-row>
                </v-col>
            </v-row>
            <real-user-base-info v-if="this.switch1 === false"/>
            <legal-user-base-info v-if="this.switch1 === true"/>
        </v-container>




    </v-container>

</template>
<script>
    import RealUserBaseInfo from "@/components/RealUserBaseInfo";
    import LegalUserBaseInfo from "@/components/LegalUserBaseInfo";
    export default {
        name: "ProfileView",
        components: {LegalUserBaseInfo, RealUserBaseInfo},
        watch: {
            steps(val) {
                if (this.e1 > val) {
                    this.e1 = val
                }
            }
        },
        data(){
            return{
                e1: 1,
                n:2,
                firstName:'',
                lastName:'',
                birthDate:'',
                ideNumber:'',
                switch1: false,
                indeterminate:false,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                    v => v.length < 4 || 'کد باید شامل ۴ کاراکتر باشد'
                ],
            }
        },
        methods:{
            screenWidth(){
                return "Total Width: " + screen.width;
            },
            viewTitle(){


              if(this.switch1){
                  return 'مشخصات شرکت';
              }else {
                  return  'پروفایل کاربری';
              }
            }
        }

    }
</script>

<style scoped>
    .p-switch-labels{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        text-align: right;
        color: #253858;
        padding-top: 22px;
    }
    .v-switch-small {
        transform-origin: right;
        padding-right: 8px;
        transform: rotateY(-180deg) scale(0.775);
        margin-right: 70px;
        margin-left: -50px;

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

    .v-row-left-content {

        justify-content: flex-end;

    }
    .v-row-right-content {

        justify-content: flex-start;

    }

    .p-profile-header{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        text-align: right;
        color: #253858;
        word-wrap: normal;
    }
</style>