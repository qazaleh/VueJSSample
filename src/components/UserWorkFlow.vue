<template>
    <div class="container">
        <ul>
            <li>
                <span></span>
                <v-row>
                    <v-icon style="width: 12px; height: 12px ; color: #27269c" >mdi-account-badge-horizontal-outline</v-icon>
                    <div class="type">Prensetation</div>
                </v-row>
                <span class="number">
        <span>10:00</span>
        <span>12:00</span>
      </span>
            </li>
            <li>
                    <span></span>
                <v-icon style="width: 12px; height: 12px ; color: #27269c" >mdi-account-badge-horizontal-outline</v-icon>
                    <div class="type">Prensetation</div>
                <span class="number">
        <span>13:00</span>
        <span>14:00</span>
      </span>
            </li>
            <li>
                    <span></span>
                <v-icon style="width: 12px; height: 12px ; color: #27269c" >mdi-account-badge-horizontal-outline</v-icon>
                    <div class="type">Review</div>
                <span class="number">
        <span>15:00</span>
        <span>17:45</span>
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
                    current:true,
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
    body {
        height: 100vh;
        font-family: 'Open Sans', sans-serif;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#bea2e7+0,86b7e7+100 */
        background: #bea2e7; /* Old browsers */
        background: -moz-linear-gradient(top,  #bea2e7 0%, #86b7e7 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  #bea2e7 0%,#86b7e7 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  #bea2e7 0%,#86b7e7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bea2e7', endColorstr='#86b7e7',GradientType=0 ); /* IE6-9 */
    }
    .container ul {
        list-style: none;
        position: absolute;
        top: 70%;
        right: 60%;
        transform: translate(-50%, -50%);
        padding: 1px 100px;
        color: #e32ee7;
        font-size: 13px;
    }
    .container ul:before {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        border-right: 2px dashed #6b74ff;

    }
    .container ul li {
        position: relative;
        margin-right: 30px ;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 14px;
        border-radius: 6px;
        width: 250px;
        box-shadow: 0 0 4px rgba(248, 120, 176, 0.12), 0 2px 2px rgba(227, 46, 231, 0.08)
    }
    .container ul li:not(:first-child) {
        margin-top: 60px;
    }
    .container ul li > span {
        width: 2px;
        height: 100%;
        background: #6b74ff;
        right: -30px;
        top: 0;
        position: absolute;
    }
    .container ul li > span:before, .container ul li > span:after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 2px solid #6b74ff;
        position: absolute;
        background: #ffffff;
        right: -5px;
        top: 0;
    }
    .container ul li span:after {
        top: 100%;
    }
    .container ul li > div {
        margin-right: 10px;
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
    .container span.number span {
        position: absolute;
        font-size: 10px;
        right: -35px;
        font-weight: bold;
    }
    .container span.number span:first-child {
        top: 0;
    }
    .container span.number span:last-child {
        top: 100%;
    }
</style>