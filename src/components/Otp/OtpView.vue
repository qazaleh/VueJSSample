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
                        <p class="p-message">کد ۴ رقمی پیامک شده را ارسال کنید.</p>
                    </v-row>
                    <v-text-field class="v-textField-mobile
                                             pr-lg-10 pr-xl-10 pr-md-10 pr-8 pr-8
                                             pl-lg-10 pl-xl-10 pl-md-10 pl-8 pl-8"
                                  dense v-model="otpCode"
                                  label="کد ۴ رقمی پیامک شده"
                                  type="text"
                                  :maxlength="maxInput"
                                  :rules="inputRules"/>
                    <v-row justify="center" >
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('3')"
                                fab
                                small
                                color="darkBlue--text"
                                v-on="on"
                        >3</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('2')"
                                fab
                                small
                                color="darkBlue--text"
                        >2</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('1')"
                                fab
                                small
                                color="darkBlue--text"
                        >1</v-btn>
                    </v-row>
                    <v-row justify="center" >
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('6')"
                                fab
                                small
                                color="darkBlue--text"
                        >6</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('5')"
                                fab
                                small
                                color="darkBlue--text"
                        >5</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('4')"
                                fab
                                small
                                color="darkBlue--text"
                        >4</v-btn>
                    </v-row>
                    <v-row justify="center" >

                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('9')"
                                fab
                                small
                                color="darkBlue--text"
                        >9</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('8')"
                                fab
                                small
                                color="darkBlue--text"
                        >8</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('7')"
                                fab
                                small
                                color="darkBlue--text"
                        >7</v-btn>
                    </v-row>
                    <v-row justify="center " >

                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                fab
                                small
                                color="darkBlue--text"
                                :disabled="true"
                        ></v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                @click="clickKeyPadButton('0')"
                                fab
                                small
                                color="darkBlue--text"
                        >0</v-btn>
                        <v-btn
                                class="btn-keyboard ma-3 pa-2"
                                elevation="0"
                                fab
                                small
                                color="darkBlue--text"
                                :disabled="true"
                        ></v-btn>
                    </v-row>
                    <v-row class="v-row-center pt-3">
                        <v-btn dark  class="btn-grad" elevation="0" @click="showDashboard">ورود</v-btn>
                        <v-btn
                                v-if="countDown=0"
                                dark  class="btn-rounded-pink" elevation="0">ارسال مجدد</v-btn>

                        <v-cardte
                                v-else
                                class=" v-card-pink-timer ma-5"
                                color="white"
                                text-color="#b10dbb"
                                flat
                        >
                            {{formattedTimeLeft()}}
                            <v-icon class="v-icon-timer" left>mdi-alarm</v-icon>
                        </v-cardte>
                    </v-row>
                </v-card>
            </v-row>
        </v-container>
    </v-container>

</template>

<script>
    export default {

        name: "OtpView",
        data() {
            return {
                otpCode: '',
                countDown : 10,
                timeRemained : 0,
                maxInput: 6,
                userSession:'',
                timerInterval: null,

                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                ],
                value: '',
                keys:['3','2','1','6','5','4','9','8','7',' ','0',' ']
                // Array.from({length: 9}, (v, k) => k+1),
            }
        },

        methods: {
            formattedTimeLeft() {
                const countDown = this.countDown

                const minutes = Math.floor(countDown / 60)

                let seconds = countDown % 60

                if (seconds < 10) {
                    seconds = `0${seconds}`
                }
                return `${minutes}:${seconds}`
            },
            countDownTimer() {

                console.log("count Down 1",this.countDown);

                this.interval = setInterval(() => {
                        const temp = this.countDown
                        console.log("interval closure")
                        this.timerCount(temp);}
                    , 1000);

            },
            timerCount(timeValue){
                console.log("count Down",timeValue);
                if (timeValue > 0) {
                    console.log("count Down isn't zero");
                    this.countDown = timeValue - 1
                }else if (timeValue < 0 || timeValue == 0 ){
                    console.log("count Down is zero");
                    clearInterval(this.interval)
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
                localStorage.token = '123456789'
                this.$router.push('/dashboard')
            },
            clickKeyPadButton (buttonValue) {

                if((this.otpCode.length) < 6){
                    this.otpCode = this.otpCode + buttonValue
                }else {
                    return
                }//lacasa the pape
            },
        },

        watch: {
            value() {
                this.$emit('pressed', this.value);
            },
            name(newToken) {
                localStorage.userSession = newToken;
            }
        },
        created() {
            // this.countDownTimer()
        },
        computed(){
            // timeRemained() {
            //     return this.timeRemained - this.timePassed
            // }
        },
        mounted () {
            if(localStorage.token){
                this.userSession = localStorage.token;
            }
            this.countDown = 10
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
    @media (min-width: 300px) and (max-width: 650px) {
        .v-card {
            width: 95%;
            max-width: 95%;
            flex-basis: 95%;
        }
    }

    .v-textField-mobile {
        font-size: 16px;
        font-family: 'IRANSansMobile(FaNum)';
        text-align: left;
        color: #b10dbb;
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

    .btn-keyboard {
        background-color: #f0f3f8!important;
        color: #253858;
        font-family: 'IRANSansMobile(FaNum)' !important ;
        font-size: 11px!important;
    }
    .btn-keyboard:hover{
        background-color: #3933ff !important;
        color: #b10dbb!important;
        opacity: 0.6!important;

    }


</style>