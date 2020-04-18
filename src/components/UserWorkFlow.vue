<template>
    <div class="container">
        <ul>
            <li v-for="item in states" :key="item.title">
                <v-row >
                    <v-icon v-if="item.current == false"
                            :color="item.color" size="18" class="v-icon-workflow">{{item.icon}}</v-icon>
                    <div v-if="item.current == true" class="div-title-current">{{item.title}}</div>
                    <div v-else-if="item.complete == true" class="div-title-complete">{{item.title}}</div>
                    <div v-else class="div-title-next">{{item.title}}</div>
                </v-row>
                    <span class="timer" v-if="item.complete">{{item.year}}</span>
                <span  v-if="item.current" class="circle">
               </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserWorkFlow",
        props: {
            completeRegister: Boolean,
            userState:String
        },
        data: () => ({
            states: [
                {
                    complete: true,
                    current:false,
                    icon: 'mdi-account-badge-horizontal-outline',
                    title: 'ثبت نام',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color:"#253858"
                },
                {
                    complete: localStorage.userProfileComplete,
                    current:false,
                    icon: 'mdi-account-box-outline',
                    title: 'تکمیل حساب کاربری',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color:"#97a0af"
                },
                {
                    complete: false,
                    current:true,
                    icon: 'mdi-card-text-outline',
                    title: 'تایید حساب بانکی',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color: "purple"
                },
                {
                    complete: false,
                    current:false,
                    icon: 'mdi-briefcase-outline',
                    title: 'اطلاعات ؟',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color: "#97a0af"
                },
                {
                    complete: false,
                    current:false,
                    icon: 'mdi-account-check',
                    title: 'شما پذیرنده شدید!',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color: "#97a0af"
                },

            ],
        }),
        method:{
            userTitleClass: function(item) {
                if (item.current) {
                    return 'div-title-current'
                }else if (item.complete) {
                    return 'div-title-complete'
                }else {
                    return 'div-title-next'
                }

            },
        }
        }
</script>

<style scoped>

    .container ul {
        list-style: none;
        position: relative;
        font-family: 'IRANSansMobile(FaNum)';
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        padding: 1px 50%;
        color: #ff2e88;
        font-size: 13px;
    }
    .container ul:before {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        border-left: 3px solid rgba(190, 92, 135, 0.24);

    }
    .container ul li {
        position: relative;
        margin-left: 30px ;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 25px;
        border-radius: 6px;
        width: 300px;
    }
    .container ul li:not(:first-child) {
        margin-top: 0px;
    }
    .container ul li > span.timer {
        left: 100%;
        background: white;
        right: -60px;
        top: 25%;
        position: absolute;
        color: #97a0af;

    }
    .container ul li > span.circle {
        width: 2px;
        left: 100%;
        background: #b40dbb;
        right: 0.5px;
        top: 0;
        position: absolute;

    }
    .container ul li > span.timer:after {
        content: '';
        position: absolute;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }
    .container ul li > span.circle:after {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1.5px solid #b40dbb;
        position: absolute;
        background: transparent;
        left: -11px;
        justify-content: center;
        align-items: center;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
    }
    .container ul li > span.circle:before {
        content: '';
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 8px solid white;
        position: absolute;
        background: #b40dbb;
        justify-content: center;
        align-items: center;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        right: -11px;
        top: 25px;
    }
    .container ul li span.timer:after {
        top: 50%;
    }
    .container ul li span.circle:after {
        top: 32%;
    }
    .container ul li > div {
        margin-left: 10px;
    }
    .container div > div {
        margin-top: 5px;
    }
    .container span.circle {
        height: 100%;
    }

    .container span.circle span:first-child {
        top: 0;
    }
    .container span.circle span:last-child {
        top: 100%;
    }
    .div-title-complete {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding-right: 20px;
    }
    .div-title-current {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #b10dbb;
        padding-right: 10px;
    }
    .div-title-next {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #97a0af;
        padding-right: 15px;
    }

    .v-icon-workflow {
        width: 24px;
        height: 16px;
        padding-right: 12px;

    }
</style>