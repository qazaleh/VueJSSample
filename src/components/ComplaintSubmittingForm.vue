<template>
    <v-container fluid fill-height style="padding-top: 0px">
        <v-row style="padding-top: 0px" justify="end">
            <v-col cols="1"
                   class="#fafbfc"
            >
            </v-col>
            <v-col cols="8" class="#fafbfc">
                <h1 class="h1-rule-header">ثبت شکایات</h1>

                <p class="p-description">اگر پیشنهاد، انتقاد و یا شکایتی در جهت بهبود خدمات آتی‌پی دارید، با ما در میان گذارید. با سپاس</p>

                    <div class="div-textField-label">نام و نام‌خانوادگی</div>
                    <v-text-field class="v-textField-form-complain "  dense v-model.number="fullName"/>

                    <div class="div-textField-label">ایمیل</div>
                    <v-text-field class="v-textField-form-complain "  dense v-model.number="email"/>

                    <div class="div-textField-label">متن</div>
                    <v-text-field class="v-textField-form-complain "  dense v-model.number="text"/>

            </v-col>
            <v-col cols="3">

                    <div class="chevron" />
                    <div class="div-oval-shape2" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "ComplaintSubmittingForm",
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
        data() {
            return {
                window: {
                    width: 0,
                    height: 0
                },
                fullName:'',
                email:'',
                text:'',

            }
        }
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

    .p-description{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
        padding: 20px;
    }

    .div-textField-label {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 9px;

    }
    .v-textField-form-complain {
        font-size: 8px;
        font-family: 'IRANSansMobile(FaNum)';
        text-align: left;
        color: rgba(45, 40, 48, 0.78);
        padding-bottom: 40px;
        padding-right: 80px;
        padding-left: 80px;
        border-radius: 8px;
        background-color: #f4f5f7;
        width: 350px;
        height: 45px;
    }

    .div-oval-shape1 {
        width: 427px;
        height: 358px;
        opacity: 0.08;
        border-radius: 50% !important;
        background-image: linear-gradient(218deg, #e005c5 144%, #27269c -12%);
    }
    .div-oval-shape2{
        width: 363px;
        height: 227px;
        opacity: 0.13;
        border-radius: 50% !important;
        background-image: linear-gradient(226deg, #e005c5 137%, #27269c -9%);
    }
    .chevron {
                position: relative;
                text-align: center;
                padding: 12px;
                margin-bottom: 6px;
                height: 60px;
                width: 200px;
            }
    .chevron:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 51%;
        background: red;
        transform: skew(0deg, 6deg);
    }
    .chevron:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
        background: red;
        transform: skew(0deg, -6deg);
    }
</style>