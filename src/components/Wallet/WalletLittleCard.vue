<template>
    <v-container fluid>
        <v-row class=" v-row-center">
        <v-card class="v-card-wallet-base"  flat elevation="0" >
            <v-card-title class="v-card-title-wallet">
                کیف پول شخصی
            </v-card-title>
            <v-row justify="center"  class="ma-0 pa-0 ">
                <v-card-text class="v-card-text-amount text-center">
                    23,000,000 <span class="currency">
                ریال
            </span>
<!--                    <span class="icon">-->
                        <v-icon size="32" color="#4221a2">mdi-card</v-icon>
<!--                    </span>-->
                </v-card-text>
            </v-row>
            <v-btn class="v-btn-wallet-action transparent" elevation="0"  >
                <v-icon left>mdi-plus</v-icon>
                افزایش موجودی
            </v-btn>
        </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "WalletLittleCard"
    }
</script>

<style scoped>

    .v-card-wallet-base {
        width: 316px;
        height: 167px;
        border-radius: 17px!important;
        box-shadow: 0 4px 13px 0 rgba(117, 117, 117, 0.09);
        background-color: #ffffff;
    }
    @media (min-width: 300px) and (max-width: 550px) {
        .v-card-wallet-base {
            width: 100%;
            max-width: 100%;
            flex-basis: 100%;
            padding: 10px;
            margin: 15px;
            background-color: #ffffff;
        }

        .v-row-center{
            align-content: center;
            alignment: center;
            align-items: center;
            justify-content: center;
            justify-items: center;
        }
    }
    .v-card-title-wallet {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
    }
    @media (min-width: 300px) and (max-width: 550px) {
        .v-card-title-wallet {
            font-family: "IRANSansMobile(FaNum)";
            font-size: 12px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #172b4d;
        }
    }
    .v-card-text-amount {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #b10dbb!important;
    }
    .v-card-text-amount  span.currency  {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 23px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #b10dbb;
    }
     span.icon  {
        width: 32px!important;
        height: 32px!important;
        border-radius: 6px;
        background-color: #b10dbb;
    }
    .v-btn-wallet-action {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #344563!important;
    }
</style>