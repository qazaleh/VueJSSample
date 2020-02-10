<template>
    <v-container>
        <v-row >
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-right-content" style="margin-right: 10px">
                    <p class="v-toolbar-title-profile-header">پروفایل کاربری</p>
                </v-row>
            </v-col>
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-left-content">
                <v-btn class="btn-back transparent" elevation="0" >
                                    بازگشت
                     <v-icon color="#253858">mdi-chevron-left</v-icon>
                </v-btn>
                </v-row>
            </v-col>
        </v-row>

<!--        <v-stepper-step-->
<!--                :key="`${n}-step`"-->
<!--                :complete="e1 > n"-->
<!--                :step="n"-->
<!--                :editable="true"-->
<!--        >-->
<!--        </v-stepper-step>-->

<!--        <v-stepper-content-->
<!--                :key="`${n}-content`"-->
<!--                :step="n"-->
<!--        >-->
            <real-user-base-info steps='this.n' current-step='this.e1' />
<!--        </v-stepper-content>-->



    </v-container>

</template>
<script>
    import RealUserBaseInfo from "@/components/RealUserBaseInfo";
    export default {
        name: "ProfileView",
        components: {RealUserBaseInfo},
        watch: {
            steps(val) {
                if (this.e1 > val) {
                    this.e1 = val
                }
            }
        },
        data(){
            return{
                e1: 1,
                n:2,
                firstName:'',
                lastName:'',
                birthDate:'',
                ideNumber:'',
                switch1: false,
                inputRules: [
                    v => !!v || 'پر کردن این آیتم اجباری می‌باشد',
                    v => v.length < 4 || 'کد باید شامل ۴ کاراکتر باشد'
                ],
            }
        },
        methods:{
            screenWidth(){
                return "Total Width: " + screen.width;
            }
        }

    }
</script>

<style scoped>
    .v-row-blur{
        background-color: #4221a2;
    }
    .v-toolbar-title-profile-header{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
    }
    .btn-back{
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

    .v-row-left-content {

        justify-content: flex-end;

    }
    .v-row-right-content {

        justify-content: flex-start;

    }
    .v-row-grey-bg {
        background-color: #f4f5f7;
    }

</style>