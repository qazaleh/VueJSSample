<template>
    <v-container fluid fill-height >
        <v-container  >
            <v-row class="v-row-center">
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
                    <v-text-field class="v-textField-mobile
                                             pr-lg-10 pr-xl-10 pr-md-10 pr-8 pr-8
                                             pl-lg-10 pl-xl-10 pl-md-10 pl-8 pl-8"
                                  dense v-model="mobileInput"
                                  label="شماره موبایل"
                                  type="text"
                                  :maxlength="maxInput"
                                  @keypress="onlyNumber"
                                  :rules="inputRules"/>

                    <v-btn dark  class="btn-grad" elevation="0" :loading="this.loading" @click="login">ارسال پیامک</v-btn>

                    <v-row  wrap class="v-row-center">
                        <v-col >
                            <v-btn class="btn-gray-login" text x-small>
                                راهنمای وبسایت
                            </v-btn>
                        </v-col>
                        <v-col >
                            <v-btn class="btn-gray-login" text x-small>
                                قوانین و مقررات
                            </v-btn>
                        </v-col>
                        <v-col >
                            <v-btn class="btn-gray-login" text x-small>
                                حریم خصوصی
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-card>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    import RequestWrapper from "../RequestWrapper";

    export default {
        name: "LoginView",
        data(){
            return{
                mobileInput: '',
                maxInput: 11,
                loading:false,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                    v => v.length <12  || 'شماره موبایل شامل ۱۱ کاراکتر است'
                ],
                result:null,
                jsonData:{
                    data:{
                        mobileNumber : String,
                        // cardNo:String,
                        // iban:String,
                        // expDate:String
                        // page : 1
                    }
                }

            }
        },
        mounted () {
            if(localStorage.mobile){
                this.mobileInput = localStorage.mobile;
            }
        },
        watch: {
            name(newMob) {
                localStorage.userMobile = newMob;
            }
        },
        methods: {

            login: function () {

                console.log('Began Login');
                const apiService = new RequestWrapper();
                this.jsonData.data.mobileNumber = this.mobileInput;
                // this.jsonData.data.expDate = '9813';
                // this.jsonData.data.cardNo = '783545646587878';
                // this.jsonData.data.iban = '547587878453453454';

                // eslint-disable-next-line no-unused-vars
                let jsonString= JSON.stringify(this.jsonData);

                this.loading = true
                apiService.sendPostRequest("https://www.atipay.net/__login__.php",this.jsonData)
                    .then((response) => {
                        this.loading = false;

                        if(response["status"]["code"] == 0 && response["status"]["message"] == "Success") {
                            localStorage.otpCode = response["data"]["otp"];
                            this.routeToNext();
                        }else {
                            alert(response["status"]["message"]);
                        }
                    }).catch(function(error) {
                    alert("خطای ارتباط با سرور" + "\n" + error.description);
                });
            },
            routeToNext () {
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
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
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
    @media (min-width: 300px) and (max-width: 650px) {
        .btn-grad {
            width: 95%;
            max-width: 95%;
            height: 37px;
            flex-basis: 95%;
        }
    }
    .btn-gray-login{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 10px!important;
        color: #7a869a!important;
    }
    @media (min-width: 300px) and (max-width: 750px) {
        .btn-gray-login {
            font-family: 'IRANSansMobile(FaNum)' ;
            font-size: 8px!important;
            color: #7a869a!important;
        }
    }
</style>