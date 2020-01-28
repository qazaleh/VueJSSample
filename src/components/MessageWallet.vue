<template>
    <div class="MessageWallet">
        <div>
            <p style="font-family: 'IRANSansMobile(FaNum)';font-size: small; color: black; alignment: right; padding-right: 24px; padding-top: 16px">کیف پول پیامک</p>
        </div>
        <div class="currencyCustom" style=" text-align: left ; font-family: 'IRANSansMobile(FaNum)';padding-top: 8px; padding-left: 30px">
            <strong>12,000</strong>تومان
            <v-icon color="white" class="rectangleWallet">mdi-wallet-outline</v-icon>
        </div>
        <div class="plusTextCustom" style=" text-align: right ; font-family: 'IRANSansMobile(FaNum)'; padding-right: 8px;padding-top: 32px">
            <v-btn text icon color="deep-purple darken-4">
                <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            افزایش موجودی
        </div>

    </div>

</template>

<script>
    export default {
        name: "MessageWallet"
    }
</script>

<style scoped>
    .plusTextCustom{
        color: #344563;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: small;
    }
    .currencyCustom{
        color: #b10dbb;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: medium;
    }

    .currencyCustom strong {
        color: #b10dbb;
        font-size: larger;
        font-family: 'IRANSansMobile(FaNum)';
    }
    .rectangleWallet {
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background-color:#b10dbb ;
    }
</style>