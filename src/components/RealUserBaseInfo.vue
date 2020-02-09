<template>
    <v-container fluid class="white" style="border-radius: 18px!important;">
        <v-row
                        class="transparent  v-row-right-content" style="padding-right: 10px">
                    <p class="p-profile-header" >مشخصات فردی</p>
        </v-row>
        <v-row  class=" v-row-right-content wrap" style="margin-right: 5px; margin-top: -10px" >
            <v-col cols="6"
                   class=" v-row-right-content wrap">
                <v-row
                        class="transparent  v-row-right-content">
                    <p class="p-switch-labels" >شخصیت حقیقی</p>
                    <v-switch
                            class="v-switch-small"
                            v-model="switch1" inset
                            color="grey darken-1"
                            hide-details></v-switch>
                    <p class="p-switch-labels">شخصیت حقوقی</p>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="wrap">
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-text-field class="v-textField-profile "  dense v-model="firstName" label="نام"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="lastName" label="نام خانوادگی"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="birthDate" label="تاریخ تولد"  :rules="inputRules"/>
            </v-col>
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row justify="space-around" style="padding-bottom: 10px ;padding-left: 10px">
                    <v-col>
                        <p class="p-field">تصویر پروفایل</p>
                        <p class="-png-jpeg-">فرمت png و jpeg قابل
                            قبول است. حداکثر ۲۰ مگ…</p>
                    </v-col>
                    <v-card class="v-card-profile-image-rectangle pt-9" flat align="center" >
                        <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                    </v-card>
                </v-row>
                <v-row justify="space-around" style="padding-bottom: 10px;padding-left: 10px">
                    <v-col>
                        <p class="p-field">بارگزاری تصویر شناسنامه</p>
                    </v-col>
                    <v-card class="v-card-profile-image-small-rectangle pt-3" flat align="center">
                        <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                    </v-card>
                </v-row>
                <v-row justify="space-around" style="padding-bottom: 10px;padding-left: 10px">
                    <v-col>
                        <p class="p-field">بارگزاری تصویر کارت ملی</p>
                    </v-col>
                    <v-card class="v-card-profile-image-small-rectangle pt-3" flat align="center">
                        <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                    </v-card>
                </v-row>
                <v-row class="v-row-left-content">
                    <v-btn dark  class="btn-grad" elevation="0" @click="nextStep(this.currentStep)" >مرحله بعد</v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "RealUserBaseInfo",
        props: {
            currentStep: String,
            steps:String
        },
        data(){
            return{
                imageName: '',
                imageUrl: '',
                imageFile: '',
                firstName:'',
                lastName:'',
                birthDate:'',
                ideNumber:'',
                switch1: false,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                ],
            }
        },
        methods: {
            onInput(val) {
                this.steps = parseInt(val)
            },
            nextStep(n) {
                if (n === this.steps) {
                    this.e1 = 1
                } else {
                    this.e1 = n + 1
                }
            },
            pickFile() {
                this.$refs.image.click()
            },
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            }
        }
    }
</script>

<style scoped>
    .v-textField-profile {
        font-size: 8px;
        font-family: 'IRANSansMobile(FaNum)';
        text-align: left;
        color: #b10dbb;
        padding-bottom: 40px;
        padding-right: 20px;
        padding-left: 20px;
        background-color: white;
    }
    .p-field {
        width: 154px;
        height: 25px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
    .-png-jpeg- {
        width: 153px;
        height: 38px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #97a0af;
    }
    .v-file-input-profile-image-rectangle {
        width: 100px;
        height: 100px;
        border-radius: 13px!important;
        border: dashed 1px #c9d0db;
        background-color: #f4f5f7;
    }
    .v-card-profile-image-rectangle {
        width: 100px;
        height: 100px;
        border-radius: 13px!important;
        border: dashed 1px #c9d0db;
        background-color: #f4f5f7;
    }
    .v-card-profile-image-small-rectangle {
        width: 100px;
        height: 49px;
        border-radius: 13px!important;
        border: dashed 1px #c9d0db;
        background-color: #fafbfc;
    }
    .v-icon-add {
        width: 20px;
        height: 20px;
        color: #5e6c84;
    }
    .btn-grad {background-image: linear-gradient( to right, #27269c 5%, #e005c5 51%, #e005c5 100%);
        border-radius: 23px!important; ;
        width: 114px;
        height: 47px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        margin-left: 10px;

    }
    .v-row-left-content {

        justify-content: flex-end;

    }
    .v-row-right-content {

        justify-content: flex-start;

    }
    .p-switch-labels{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        text-align: right;
        color: #253858;
        padding-top: 22px;
    }
    .v-switch-small {
        transform: scale(0.775);
        transform-origin: right;
        padding-right: 8px;
    }
    .p-profile-header{
        width: 102px;
        height: 25px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        text-align: right;
        color: #253858;
    }
</style>