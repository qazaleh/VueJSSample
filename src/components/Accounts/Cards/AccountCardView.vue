<template>
        <v-card class="v-card-account-main text-center" flat elevation="0">
            <v-row align="end" class="px-6">
                <v-btn elevation="0" class="v-btn-delete" small fab><v-icon small color="#344563">mdi-delete</v-icon></v-btn>
            </v-row>
            <v-card-text class="text-center v-card-text-account-number pa-0 ma-2">۱۲۳۴ ۵۶۷۸ ۹۱۰۱ ۱۲۱۳</v-card-text>
            <v-card-text class="text-left v-card-text-account-expire pa-0 ma-0 ">00/12</v-card-text>
            <v-card-text class="text-center v-card-text-account-iban pa-0 ma-2">IR12 3456 7891 2345 2345 6756 01</v-card-text>
        </v-card>
</template>

<script>
    export default {
        name: "AccountCardView"
    }
</script>

<style scoped>
.v-card-account-main {
    width: 232px;
    height: 140px;
    border-radius: 13px;
    background-image: linear-gradient(57deg, #63b6ec -2%, #eefbff 100%);
}
    .v-btn-delete {
        background-color: transparent!important;
    }
    .v-img-bankLogo {
        width: 21px !important;
        height: 21px !important;
        background-color: transparent!important;
    }
    .v-card-text-account-number {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #344563;
    }
    .v-card-text-account-expire {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #344563;
    }
    .v-card-text-account-iban {
        font-family: IRANSansFaNum;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #344563;
    }
</style>