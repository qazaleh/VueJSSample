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
        <h1 class="h1-dialog-header">درگاه جدید</h1>

        <h1 class="h1-input-label">نام درگاه</h1>
        <v-text-field             label=""
                                  placeholder=""
                                  solo
                                  class="v-textField-add-form "
                                  hide-details="true"
                                  :flat="true"
                                  v-model="formData.title"
        ></v-text-field>

        <h1 class="h1-input-label">شماره درگاه</h1>
        <v-text-field             label=""
                                  placeholder=""
                                  solo
                                  class="v-textField-add-form"
                                  :flat="true"
                                  v-model="formData.gateWayNumber"
        ></v-text-field>

        <h1 class="h1-input-label">کیف پول</h1>
        <v-select
                class="v-select-add-form"
                v-model="formData.walletType"
                :items="walletList"
                color="#253858"
                solo
                flat
                menu-props="auto"
                hide-details
                single-line
        ></v-select>

<!--        <h1 class="h1-input-label">دسته بندی دوم</h1>-->
<!--        <v-select-->
<!--                class="v-select-add-form"-->
<!--                :v-model="this.formData.category2"-->
<!--                :items="walletList"-->
<!--                color="#253858"-->
<!--                solo-->
<!--                flat-->
<!--        ></v-select>-->

<!--        <h1 class="h1-input-label">شماره تماس پشتیبانی</h1>-->
<!--        <v-text-field  label=""-->
<!--                       placeholder=""-->
<!--                       solo-->
<!--                       class="v-textField-add-form"-->
<!--                       :flat="true"-->
<!--        ></v-text-field>-->

<!--        <h1 class="h1-input-label">توضیحات</h1>-->
<!--        <v-textarea-->
<!--                     placeholder=""-->
<!--                     solo-->
<!--                     class="v-textarea-add-form"-->
<!--                     :auto-grow="true"-->
<!--                     :flat="true"-->
<!--                     :row-height=85-->
<!--                     :rows=1-->
<!--        ></v-textarea>-->

        <v-row class="v-row-left-content">
            <v-btn dark  class="btn-grad ma-6" elevation="0" @click.stop="addGateWay" >ثبت درگاه</v-btn>
        </v-row>
    </v-card>

    </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AddGatewayForm",
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
                formData:{
                    title:'',
                    gateWayNumber:'',
                    walletType:''
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

                this.$emit('add:gateWay', this.formData)
                this.formData = {
                    title:'',
                    gateWayNumber:'',
                    walletType:''
                }
                this.$emit('close')
            },
            addGateWay(){
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
    .h1-input-label {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding-right: 32px;
        padding-bottom: 5px;
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
        text-align: right;
        color: #253858;
        padding: 0px 32px;
        margin-bottom: -8px ;
        box-sizing: border-box;
        border-radius: 8px!important;


    }
    .v-select-add-form {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding: 0px 32px;
        margin-bottom: -8px ;
        box-sizing: border-box;
        border-radius: 8px!important;


    }
    .v-textarea-add-form {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding: 0px 32px;
        margin-bottom: -12px ;
        box-sizing: border-box;
        border-radius: 8px!important;
        /*height: 35px;*/

    }
    .btn-grad {background-image: linear-gradient( to right, #27269c 5%, #e005c5 88%, #e005c5 100%);
        width: 109px;
        height: 47px;
        border-radius: 25px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        margin-left: 10px;

    }
</style>

<style lang="scss">
    .v-dialog-gateway-add {
        v-dialog {
            border-radius: 12px!important;
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