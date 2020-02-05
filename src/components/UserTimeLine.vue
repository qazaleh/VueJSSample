<template>
    <v-timeline align-top dense>
        <v-timeline-item
                v-for="(year, i) in states"
                :key="i"
                :color="year.color"
                small
                right

        >
            <template v-slot:opposite v-if="year.complete">
        <span
                :class="`spot-timeline-time grey--text`"
                v-text="year.year"
        ></span>
            </template>
            <div class="py-4">
                <h2 :class="`h2-timeline-title mb-4 ${year.color}--text`">{{year.title}}</h2>

            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name: "UserTimeLine",
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
.h2-timeline-title{
    font-family: 'IRANSansMobile(FaNum)';
    font-size: 12px;
}
.spot-timeline-time{
    font-family: 'IRANSansMobile(FaNum)';
    font-size: 8px;
}
</style>