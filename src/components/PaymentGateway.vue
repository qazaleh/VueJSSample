<template>
    <v-container fluid fill-height class="v-container-grey-bg">
        <v-row style="align-content: center;alignment: center;align-items: center;justify-content: center;justify-items: center;">
            <v-row>
                <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                    <v-row class="v-row-right-content" >
                        <p class="v-toolbar-title-profile-header">کیف پول</p>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
        <v-row>
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-right-content" >
                    <v-btn class="v-btn-gradient-border" elevation="0" light>
                        <v-icon class="v-icon-timer">mdi-plus</v-icon>
                        ساخت درگاه جدید
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PaymentGateway"
    }
</script>

<style scoped>
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

    .v-btn-gradient-border {
        width: 204px;
        height: 47px;
        border-radius: 23px!important;
        border-style: solid;
        border-width: 1px;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        color: #b10dbb;
        border-image-source: linear-gradient( to right, #27269c 25%, #e005c5 51%, #e005c5 100%) !important;
        border-image-slice: 1;
    }

    .button_submit:active {
        position:relative;
        top:1px;
    }
    .v-icon-timer {
        color: #b10dbb;
        height: 12px;
        width: 12px;
    }
</style>