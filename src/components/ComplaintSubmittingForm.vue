<template>
    <v-container fluid fill-height style="padding-top: 0px; background-color: white" >
        <v-row style="padding-top: 0px" justify="end">
            <v-col cols="1"
                   class="#fafbfc"
            >
            </v-col>
            <v-col cols="11" class="#fafbfc">
                <h1 class="h1-rule-header">ثبت شکایات</h1>

                <p class="p-description">اگر پیشنهاد، انتقاد و یا شکایتی در جهت بهبود خدمات آتی‌پی دارید، با ما در میان گذارید. با سپاس</p>
                    <v-row justify="center">
                        <v-col cols="6">
                            <div class="div-textField-label">نام و نام‌خانوادگی</div>
                            <v-text-field class="v-textField-form-complain" background-color="#f4f5f7"  outlined filled  v-model.number="fullName"/>

                            <div class="div-textField-label">ایمیل</div>
                            <v-text-field class="v-textField-form-complain"  background-color="#f4f5f7"  outlined filled  v-model.number="email"/>

                            <div class="div-textField-label">متن</div>
                            <v-textarea
                                    class="v-textarea-complain"
                                    filled
                                    v-model="text"
                                    style="width: 350px!important;"
                                    outlined
                            ></v-textarea>
                        </v-col>
                        <v-col cols="6">
                            <img class="img-shape" src="@/assets/shape.png"/>
                        </v-col>
                    </v-row>


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
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        text-align: right;
        border-radius: 8px;
        background-color: #f4f5f7;
        width: 350px!important;
        height: 45px;
        border-style: none;
    }
    /*.v-textField-form-complain>.v-input__control>.v-input__slot:before {*/
    /*    border-style: none;*/
    /*}*/

    v-textarea-complain {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        text-align: right;
        color: rgba(45, 40, 48, 0.78);
        border-radius: 8px;
        background-color: #f4f5f7;
        width: 350px!important;
        height: 135px!important;
    }

    .img-shape {
        width: 590px;
        height: 458px;
        background-color: transparent;
    }
</style>