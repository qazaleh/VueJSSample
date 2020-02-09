<template>
    <v-container fluid fill-height>
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
                    <p class="p-message">برای ورود یا عضویت شماره موبایل خود را وارد کنید.</p>
                </v-row>
                    <v-form class="px-3" ref="form">
                        <v-text-field class="v-textField-mobile "  dense v-model="mobileNumber" label="شماره موبایل"  @keypress="onlyNumber" type="text" :maxlength="maxInput" :rules="inputRules"/>
                        <v-btn dark  class="btn-grad" elevation="0" @click="login">ارسال پیامک</v-btn>
                    </v-form>
            </v-card>
                <v-row  wrap class="v-row-center">
                    <v-col md="4" sm="3">
                        <v-btn class="btn-gray-login" text small>
                            راهنمای وبسایت
                        </v-btn>
                    </v-col>
                    <v-col md="4" sm="3">
                        <v-btn class="btn-gray-login" text small>
                            قوانین و مقررات
                        </v-btn>
                    </v-col>
                    <v-col md="4" sm="3">
                        <v-btn class="btn-gray-login" text small>
                            حریم خصوصی
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>




</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return{
                mobileNumber: '',
                maxInput: 11,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                    v => v.length <11  || 'شماره موبایل شامل ۱۱ کاراکتر است'
                ],

            }
        },
        methods: {
            login () {

                this.$router.push('/otp')

            },
            onlyNumber ($event) {
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57 )
                    // && keyCode !== 46
                ) { // 46 is dot
                    $event.preventDefault();
                }
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
        width: 287px;
        height: 47px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px

    }

    .btn-gray-login{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 10px!important;
        color: #7a869a!important;
    }


</style>