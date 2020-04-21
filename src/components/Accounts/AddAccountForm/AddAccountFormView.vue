<template>
    <v-container>
        <v-row justify="center" style="border-radius: 23px!important;" >
            <v-dialog class="v-dialog-gateway-add" v-model="show" persistent scrollable
                      max-width="427" border-radius-root="12px"
                      v-on:submit.prevent="handleSubmit"
            >
                <v-card class="v-card-add-form" flat light elevation="0">
                    <v-btn style="margin-top: 16px; margin-right: 12px"  icon elevation="0" @click.stop="show=false">
                        <v-icon size="15" color="#42526e" >mdi-close</v-icon>
                    </v-btn>
                    <h1 class="h1-dialog-header">افزودن حساب جدید</h1>

                    <v-row justify="center">
                        <v-card class="v-card-deposit-input text-center" flat elevation="0">
                            <v-text-field             label=""
                                                      v-mask="'#### #### #### ####'"                                                      solo
                                                      class="v-textField-iban pa-5 ma-5 align-center"
                                                      hide-details="true"
                                                      :flat="true"
                                                      background-color="#551ea6"
                                                      v-model="formData.depositNumber"
                                                      reverse="true"
                                                      placeholder="XXXX XXXX XXXX XXXX"
                                                      outlined
                                                      style="text-align: center!important;"
                                                      disabled="true"
                            ></v-text-field>
                            <v-row justify="space-between" class="px-3 ma-0">
                                <div class="div-Expire">YY/MM</div>
<!--                                <input type="text" value="" v-model="formData.ibanNumber" />-->

                                                                <v-text-field
                                             reverse="true"
                                              solo
                                              v-model="formData.ibanNumber"
                                              :flat="true"
                                              background-color="purple"
                                             height="15"
                                ></v-text-field>
                                <div class="div-IR">IR..</div>
                            </v-row>
                        </v-card>
                    </v-row>
                    <v-row align="start" class="pr-8 pt-4">
                        <h1 class="h1-iban-title">شماره کارت</h1>
                    </v-row>

                    <v-card-text class="pt-4">
<!--                        <input-->
<!--                                v-mask="'#### #### #### ####'"-->
<!--                                type="text" value="" reverse="true" outlined v-model="formData.depositNumber" />-->

                        <v-text-field
                                height="20"
                                v-mask="'#### #### #### ####'"
                                reverse="true" outlined v-model="formData.depositNumber"

                        ></v-text-field>
                    </v-card-text>

                    <v-row class="v-row-left-content">
                        <v-btn dark  class="btn-grad ma-6" elevation="0" @click.stop="addCard" >ثبت درگاه</v-btn>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AddAccountFormView",
        props: {
            visible :Boolean,
        },
        data(){
            // const formData = Object.freeze({
            //     webAddress:'',
            //     webName:'',
            //     category1:null,  //from wallet list
            //     category2:null,
            //     supportNumber:'',
            //     description:''
            // })

            return{
                mask: 'credit-card',
                value: '4444444444444444',

                formData:{
                    depositNumber:'',
                    expireDate:'',
                    ibanNumber:''
                },
                // gateWayForm: Object.assign({}, formData),
                walletList:[
                    'کیف پول رستوران',
                    'کیف پول پارکینگ',
                    'کیف پول مشترک'
                ],
            }
        },
        methods:{
            handleSubmit() {

                this.$emit('add:bankAccount', this.formData)
                this.formData = {
                    depositNumber:'',
                    expireDate:'',
                    ibanNumber:''
                }
                this.$emit('close')
            },
            addCard(){
                this.handleSubmit();
            }
        },
        computed: {
            show: {
                get () {
                    return this.visible
                },
                set (value) {
                    if (!value) {
                        this.$emit('close')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .v-dialog-gateway-add{
        /*border-radius: 12px!important;*/
        background-color: #f0f3f8;
    }
    .v-card-add-form {
        border-radius: 12px!important;
        background-color: #f0f3f8;
    }
    .h1-dialog-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding: 12px;
        margin-right: 13px;
    }

    .v-row-left-content {

        justify-content: flex-end;

    }
    .v-textField-add-form {
         font-family: "IRANSansMobile(FaNum)";
         font-size: 14px;
         font-weight: 500;
         font-stretch: normal;
         font-style: normal;
         line-height: 1.57;
         letter-spacing: normal;
         color: #253858;
     }
    .v-textField-iban {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: #253858;
    }
    .btn-grad {background-image: linear-gradient( to right, #27269c 5%, #e005c5 88%, #e005c5 100%);
        width: 109px;
        height: 47px;
        border-radius: 25px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        margin-left: 10px;

    }
    .v-card-deposit-input {
        width: 70%;
        border-radius: 13px!important;
        box-shadow: 0 5px 13px 0 rgba(91, 91, 91, 0.5);
        background-color: #551ea6;
    }
    .h1-iban-title {
        font-family: 'IRANSansMobile(FaNum)' !important;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
    .div-IR {
        /*width: 25px;*/
        height: 25px;
        font-family: IRANSans;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: rgba(255, 255, 255, 0.4);
    }
    .div-Expire {
        /*width: 54px;*/
        height: 25px;
        font-family: IRANSans;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: rgba(255, 255, 255, 0.4);
    }

</style>

<style lang="scss">
    .v-dialog-gateway-add {
        v-dialog {
            border-radius: 12px!important;
        }
    }
    .v-card-deposit-input {
        v-textfield {
            border-radius: 56px!important;
        }
    }
</style>

<!--<style lang="scss">-->
<!--    @import 'src/sass/variables';-->

<!--    .v-dialog-gateway-add {-->
<!--        border-radius: $border-radius-root;-->
<!--        elevation: $dialog-elevation;-->
<!--    }-->
<!--</style>-->