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
                        <v-text-field class="v-textField-mobile "  dense v-model="otpCode" label="کد ۴ رقمی پیامک شده" @keypress="onlyNumber" type="text" :maxlength="maxInput" :rules="inputRules"/>
                        <v-row class="v-row-center">

                        <div class="numeric-keyboard">
                            <v-btn
                                    v-for="key in keys"
                                    :key="key"
                                    class="btn-keyboard"
                                    elevation="0"
                                    fab
                                    x-small
                            >{{ key }}</v-btn>
                            <v-btn class="btn-keyboard" elevation="0" fab disabled  x-small></v-btn>
                            <v-btn class="btn-keyboard" elevation="0" fab   x-small>0</v-btn>
                            <v-btn class="btn-keyboard" elevation="0" fab disabled  x-small></v-btn>
                        </div>
                        </v-row>

                        <v-row class="v-row-center pt-6">
                            <v-btn dark  class="btn-grad" elevation="0" @click="showDashboard">ورود</v-btn>
                            <v-btn
                                    v-if="countDown=0"
                                    dark  class="btn-rounded-pink" elevation="0">ارسال مجدد</v-btn>

                            <v-card
                                    class=" v-card-pink-timer ma-5"
                                    color="white"
                                    text-color="#b10dbb"
                                    flat

                            >
                                {{countDown}}
                                <v-icon class="v-icon-timer" left>mdi-alarm</v-icon>
                            </v-card>
                        </v-row>
                    </v-form>
                </v-card>
            </v-card>
        </v-row>
    </v-container>

</template>

<script>
    export default {

        name: "OtpCodeView",
        data() {
            return {
                otpCode: '',
                countDown : 10,
                maxInput: 4,

                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                ],
                value: '',
                keys: Array.from({length: 9}, (v, k) => k+1),
            }
        },

        methods: {
            countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            },
            onlyNumber ($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57 )
                // && keyCode !== 46
            ) { // 46 is dot
                $event.preventDefault();
            }
            },
            showDashboard(){
                // this.$router.push({ name: '/dashboard', params: { userId: '123' } })
                this.$router.push('/dashboard')
            }

            },
        watch: {
            value() {
                this.$emit('pressed', this.value);
            },
            selfValue() {
                this.value = this.selfValue;
            },
            },
        created() {
            this.countDownTimer()
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
        height: 577px;


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

    .btn-rounded-pink {
        border-radius: 23px!important; ;
        width: 114px;
        height: 47px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        color: #e005c5;
        background: linear-gradient(to right, #e005c5, #27269c);
        padding: 1rem;
        position: relative;
        border-image-slice: 1;
    }

    .btn-gray-login{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 10px!important;
        color: #7a869a!important;
    }

    .v-card-pink-timer{
        font-family: 'IRANSansMobile(FaNum)' ;
        font-size: 16px!important;
        font-weight: 500;
        color: #b10dbb!important;
        width: fit-content;
        height: fit-content;
    }

    .v-icon-timer {
        color: #b10dbb;
        height: 12px;
        width: 12px;
    }

/*    keyboard class*/

    .numeric-keyboard {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 22px;
        text-align: center;
    }

    .btn-keyboard {
        background-color: #f0f3f8;
        color: #253858;
        font-family: 'IRANSansMobile(FaNum)' !important ;
        font-size: 11px!important;
    }


</style>