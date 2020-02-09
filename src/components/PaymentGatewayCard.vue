<template>
    <v-card class="v-card-payment-gateway">
            <v-row >
                <v-col class="">
                    <v-row class="v-row-right-content" >
                        <v-card  flat class="v-car-gateway-image"></v-card>
                        <v-card-title class="v-card-title-gateway pr-1">{{card.title}}</v-card-title>
                    </v-row>
                </v-col>
                <v-col >
                    <v-row class="v-row-left-content" style="padding-top: 20px">
                    <v-chip
                            class="v-chip-gateway-status"
                            color="teal"
                            text-color="white"
                            style="margin-right: 10px"
                    >
                        <v-avatar right>
                            <v-icon size="15" style="padding-left: 20px">mdi-alarm</v-icon>
                        </v-avatar>
                        {{ cardStatus() }}
                    </v-chip>
                    </v-row>
                </v-col>
            </v-row>
        <v-row>
            <v-col>
                <v-row  class="v-row-right-content" >
                    <p class="p-gateway-head">شماره درگاه</p>
                </v-row>
                <v-row class="v-row-right-content" >
                <p class="p-gateway-num">{{card.gateWayNumber}}</p>
                </v-row>
            </v-col>
            <v-col >
                <v-row class="v-row-right-content" >
                    <p class="p-gateway-head">کیف پول</p>
                </v-row>
                <v-row class="v-row-right-content" >
                    <p class="p-gateway-num">{{card.walletType}}</p>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "PaymentGatewayCard",
        data(){
            return{
                currentStatus : String,
            }
        },
        props:{
            card: {

                    status:'',
                    title:'',
                    gateWayNumber:'',
                    walletType:''
                }
             },
        methods:{
            cardStatus: function() {
                if (this.card.status === '0') {
                    return 'وضعیت؟'
                }else if (this.card.status === '1') {
                    return 'در انتظار تایید'
                }else {
                    return 'تایید شده'
                }

            }
        }

    }
</script>

<style scoped>
    .v-card-payment-gateway {
        width: 400px;
        height: 225px;
        border-radius: 17px!important;
        box-shadow: 0 4px 13px 0 rgba(117, 117, 117, 0.09);
        background-color: #ffffff;
    }
    .v-card-title-gateway{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        line-height: 1.38;
        word-break: normal!important;
        color: #172b4d;
    }
    .v-car-gateway-image{
        width: 70px;
        height: 70px;
        border-radius: 12px!important;
        background-color: #f0f3f8;
        }
    .v-icon-gateway-status{
        width: 10px!important;
        height: 10px!important;
    }
    .v-row-right-content {

        justify-content: flex-start;
        margin-right: 10%;
    }
    .v-row-left-content {

        justify-content: flex-end;
        margin-left: 10%;
    }
    .v-chip-gateway-status{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #ff991f;
        height: 20px;
    }
    .p-gateway-head{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.2;
        letter-spacing: normal;
        text-align: right;
        color: #7a869a;
    }
    .p-gateway-num {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.2;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        margin-top: -15px;

    }

</style>