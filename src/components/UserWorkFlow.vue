<template>
    <div class="container">
        <ul>
            <li v-for="item in states" :key="item.title">
                <v-row >
                    <v-icon size="25" color="#253858" right small>{{item.icon}}</v-icon>
                    <div class="div-title">{{item.title}}</div>
                </v-row>
                    <span class="timer" v-if="item.complete">10:00</span>
                <span  v-if="item.current" class="number">
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
                    color:"blue"
                },
                {
                    complete: false,
                    current:true,
                    icon: 'mdi-account-box-outline',
                    title: 'تکمیل حساب کاربری',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color:"purple"
                },
                {
                    complete: false,
                    current:false,
                    icon: 'mdi-card-text-outline',
                    title: 'تایید حساب بانکی',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color: "grey"
                },
                {
                    complete: false,
                    current:false,
                    icon: 'mdi-briefcase-outline',
                    title: 'اطلاعات ؟',
                    year:'۲۸ دی  ۹۸ \n' +
                        '۱۰:۳۰ ب.ظ',
                    color: "grey"
                },

            ],
        }),
        }
</script>

<style scoped>

    .container ul {
        list-style: none;
        position: relative;
        font-family: 'IRANSansMobile(FaNum)';
        top: 50%;
        left: 50%;
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
        padding: 32px;
        border-radius: 6px;
        width: 250px;
    }
    .container ul li:not(:first-child) {
        margin-top: 30px;
    }
    .container ul li > span.number {
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
        color: #97a0af;
        left: -11px;
    }
    .container ul li > span.number:after {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid #b40dbb;
        position: absolute;
        background: white;
        left: -11px;
    }
    .container ul li span.number:after {
        top: 32%;
    }
    .container ul li > div {
        margin-left: 10px;
    }
    .container div .title, .container div .type {
        font-weight: 600;
        font-size: 12px;
    }
    .container div .info {
        font-weight: 300;
    }
    .container div > div {
        margin-top: 5px;
    }
    .container span.number {
        height: 100%;
    }

    .container span.number span:first-child {
        top: 0;
    }
    .container span.number span:last-child {
        top: 100%;
    }
    .div-title {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
</style>