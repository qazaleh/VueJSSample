<template>
    <div class="white">

        <v-row class="wrap">
            <v-col cols="12" md="6">
                <v-text-field class="v-textField-profile "  dense v-model="firstName" label="نام"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="lastName" label="نام خانوادگی"  :rules="inputRules"/>
                <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="birthDate"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field class="v-textField-profile " v-on="on" readonly append-icon="mdi-calendar" dense v-model="birthDate" label="تاریخ تولد"  :rules="inputRules"/>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
                <v-text-field class="v-textField-profile "  dense v-model="ideNumber" label="کد ملی"  :rules="inputRules"/>
                <v-row
                        class="transparent  v-row-right-content" style="padding-right: 10px">
                    <p class="profile-header-blue" >اطلاعات تماس</p>
                </v-row>
                <v-text-field class="v-textField-profile "  dense v-model="phoneNumber" label="شماره تلفن ثابت"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="postalCode" label="کد پستی"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="address" label="نشانی"  :rules="inputRules"/>
                <v-text-field class="v-textField-profile "  dense v-model="addressHeader" label="عنوان آدرس(محل کار، محل سکونت، سایر)"  :rules="inputRules"/>
            </v-col>
            <v-col cols="12" md="6">
                <v-row justify="space-between" style="padding-bottom: 10px ;">
                    <v-col cols="12" md="6">
                        <p class="p-field">تصویر پروفایل</p>
                        <p class="-png-jpeg-">فرمت png و jpeg قابل
                            قبول است. حداکثر ۲۰ مگ…</p>
                    </v-col>
                    <v-col cols="12" md="6">
                    <div class="v-card-profile-image-rectangle pt-9 image-input" flat align="center"   :style="{ 'background-image': `url(${imageData})` }"
                    >
                        <input type="file" id="file" />
                        <label for="file" >
                            <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                        </label>
                        </div>
                    </v-col>
                </v-row>
                <v-row justify="space-between" style="padding-bottom: 10px ;">
                    <v-col cols="12" md="6">
                    <p class="p-field">بارگزاری تصویر شناسنامه</p>
                    </v-col>
                    <v-col cols="12" md="6">
                    <v-card class="v-card-profile-image-small-rectangle pt-3" flat align="center">
                        <input type="file" id="nationalId" />
                        <label for="nationalId" >
                            <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                        </label>
                    </v-card>
                    </v-col>
                </v-row>
                <v-row justify="space-between" style="padding-bottom: 10px ;">
                    <v-col cols="12" md="6">
                    <p class="p-field">بارگزاری تصویر کارت ملی</p>
                    </v-col>
                    <v-col cols="12" md="6">
                    <v-card class="v-card-profile-image-small-rectangle pt-3" flat align="center">
                        <input type="file" id="nationalCard" />
                        <label for="nationalCard" >
                            <v-icon class="v-icon-add">mdi-plus-box-outline</v-icon>
                        </label>
                    </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="v-row-left-content">
            <v-btn dark  class="btn-grad" elevation="0" @click="saveUserData">ذخیره و ارسال</v-btn>
        </v-row>
    </div>
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
                phoneNumber:'',
                postalCode:'',
                address:'',
                addressHeader:'',
                switch1: false,
                imageData: null,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                ],
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                modal: false,
                menu2: false,
            }
        },
        methods: {
            saveUserData(){
                localStorage.userProfileComplete = true;
            },
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
            },
            onSelectFile () {
                const input = this.$refs.fileInput
                const files = input.files
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        this.imageData = e.target.result
                    }
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
            }
        }
    }
</script>

<style scoped>
    .v-textField-profile {
        font-size: 16px;
        font-family: 'IRANSansMobile(FaNum)';
        text-align: left;
        color: #b10dbb;
        padding-bottom: 40px;
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
    .btn-grad {background-image: linear-gradient( to right, #27269c 5%, #e005c5 88%, #e005c5 100%);
        border-radius: 23px!important; ;
        width: 166px;
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
    .profile-header-blue {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #5a565e;
    }

/*    input file*/
    [type="file"] {
        height: 0;
        overflow: hidden;
        width: 0;
    }
    [type="file"] + label {
        border: none;

        vertical-align: middle;
        horiz-align: center;
    }

/*    image input*/

    .image-input {
        display: block;
        cursor: pointer;
        background-size :cover;
        background-position: center center;
    }
    .placeholder {
        background: #F0F0F0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
    }
    .file-input {
        display :none;
    }
</style>