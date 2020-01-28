<template>
    <div class="OwnerWallet">
            <div>
                <p class="ps-8 pt-5" style="font-family: 'IRANSansMobile(FaNum)';font-size: small; color: black; alignment: right;">کیف پول شخصی</p>
            </div>
            <div class="currencyCustom pe-6 pt-3" style=" text-align: left ; font-family: 'IRANSansMobile(FaNum)';">
                 <strong>23,000,000</strong>تومان
                <v-icon color="white" class="rectangleWallet">mdi-wallet-outline</v-icon>
            </div>
            <div class="plusTextCustom ps-5 pt-3" style=" text-align: right ; font-family: 'IRANSansMobile(FaNum)';">
                <v-btn text icon color="deep-purple darken-4">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
            افزایش موجودی
            </div>

    </div>

</template>

<script>
    export default {
        name: "OwnerWallet"
    }
</script>

<style scoped>
    .plusTextCustom{
        color: #344563;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: small;
    }
    .currencyCustom{
        color: #4221a2;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: medium;
    }

    .currencyCustom strong {
        color: #4221a2;
        font-size: larger;
        font-family: 'IRANSansMobile(FaNum)';
    }
    .rectangleWallet {
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background-color:#4221a2 ;
    }
</style>