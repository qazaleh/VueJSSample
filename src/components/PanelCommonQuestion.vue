<template>
    <v-container fluid fill-height style="padding-top: 0px">
        <v-row style="padding-top: 0px" justify="end">
            <v-col cols="3"
                   v-if="window.width > 760"
                   class="#fafbfc"
            >
                <div class="container">
                    <ul>
                        <li v-for="item in commonQuestionLists" :key="item.id">
                                <div  class="div-question">{{item.question}}</div>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="9" class="white">
                <h1 class="h1-rule-header">سوالات متداول</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PanelCommonQuestion",
        data(){
            return{
                window: {
                    width: 0,
                    height: 0
                },
                commonQuestionLists :[
                    {
                        question:'چطور موجودی حسابم رو به حساب بانکی منتقل کنم؟',
                        id:'0'
                    },
                    {
                        question:'چقدر طول میکشه پول به حسابم واریز بشه؟',
                        id:'1'
                    },
                    {
                        question:'میشه حساب کسی دیگه رو بدم؟میشه حساب کسی دیگه رو بدم؟',
                        id:'2'
                    },
                    {
                        question:'به حساب چه بانک هایی پول واریز میشه ؟',
                        id:'3'
                    },
                    {
                        question:'سقف برداشت چیه ؟',
                        id:'4'
                    },
                    {
                        question:'سرویس تسهیم یا تقسیم پول تراکنش چیه ؟',
                        id:'5'
                    },
                    {
                        question:'پرداخت درون برنامه‌ای چیه و چه کاربردی داره ؟',
                        id:'6'
                    }
                ]
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        },
    }
</script>

<style scoped>
    .h1-rule-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 28px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
        padding: 20px;
    }
    .div-question{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
    }
</style>