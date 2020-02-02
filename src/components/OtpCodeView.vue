<template>

    <v-container fluid fill-height >
        <v-row class="v-row-center">
            <v-card class="transparent" flat light>
                <v-card class="v-card-main-rounded" light  flat>

                    <v-row  class="pt-8 v-row-center">
                        <div class="Oval" ></div>
                        <div class="Oval" style="margin-right: -20px;" ></div>
                        <h1  class="h1-headerName">آتی پی</h1>
                    </v-row>
                    <v-row class="v-row-center" style="padding-top: 32px;">
                        <p class="p-welcome">خوش آمدید!</p>
                    </v-row>
                    <v-row class="v-row-center" style="padding-top: 9px;">
                        <p class="p-message">کد ۴ رقمی پیامک شده را ارسال کنید.</p>
                    </v-row>
                    <v-form class="px-3" ref="form">
                        <v-text-field class="v-textField-mobile "  dense v-model="otpCode" label="کد ۴ رقمی پیامک شده"  :rules="inputRules"/>
                        <v-btn dark  class="btn-grad">ورود</v-btn>

                        <v-chip
                                class="ma-2"
                                color="white"
                                text-color="#b10dbb"

                        >
                            <v-icon left>mdi-fire</v-icon>
                            New Posts Available
                        </v-chip>

<!--                        <v-chip-->
<!--                                class="ma-2 v-chip-pink-timer"-->
<!--                                color="white"-->
<!--                                text-color="#b10dbb"-->
<!--                                pill-->
<!--                        >-->
<!--                            <v-avatar left>-->
<!--                                <v-icon class="v-icon-timer">mdi-alarm</v-icon>-->
<!--                            </v-avatar>-->
<!--                            1:20-->
<!--                        </v-chip>-->

                    </v-form>
                </v-card>
            </v-card>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "OtpCodeView",
        data(){
            return{
                otpCode: '',

                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                    v => v.length <11  || 'کد باید شامل ۴ کاراکتر باشد'
                ],

            }
        },
    }
</script>

<style scoped>
    .container{
        background-color: #f0f3f8;
    }
    .Oval {
        width: 29px;
        height: 29px;
        opacity: 0.43!important;
        background-color: #d5b9e6;
        border-radius: 15px!important;
    }

    .v-card{

        border-radius: 18px!important;
        align-content: center;
        align-items: center;
        text-align: center;
        width: 448px;
        height: 399px;


    }

    .v-textField-mobile {
        font-size: 8px;
        font-family: 'IRANSansMobile(FaNum)';
        text-align: left;
        color: #b10dbb;
        padding-bottom: 40px;
        padding-right: 80px;
        padding-left: 80px;
        background-color: white;
    }
    .v-textField-mobile label {
        font-size: 8px;
    }
    .v-row-center{
        align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .p-welcome{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 20px;
        color: #253858
    }

    .p-message{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        color: #7a869a
    }

    .h1-headerName {
        color:#4221a2;
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: medium;
        padding-right: 10px;
    }

    .btn-grad {background-image: linear-gradient( to right, #27269c 5%, #e005c5 51%, #e005c5 100%);
        border-radius: 23px!important; ;
        width: 114px;
        height: 47px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px

    }

    .btn-gray-login{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 10px!important;
        color: #7a869a!important;
    }

    .v-chip-pink-timer{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 10px!important;
        color: #b10dbb!important;
    }

    .v-icon-timer {
        color: #b10dbb;
        height: 15px;
        width: 12px;
    }

</style>