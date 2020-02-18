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
                    <div light elevation="0" class=" div-gradient-border">
                    <v-btn class="v-btn-gradient-border" elevation="0" light>
                        <v-icon class="v-icon-timer">mdi-plus</v-icon>
                        ساخت درگاه جدید
                    </v-btn>
                    </div>
                </v-row>
            </v-col>
        </v-row>
        <h1 class="h1-gateway-top-header">جستجوی پیشرفته</h1>
        <v-row>
            <v-col v-for="card in cards" :key="card.title" :card="card" >
<!--                <payment-gateway-card  :card="card" :class-type="'v-card-payment-gateway fill-height'">-->
<!--                </payment-gateway-card>-->
<!--                v-card-payment-gateway-->

                <payment-gateway-card v-if="card.status === '0'" :card="card" :class-type="'v-card-overlay-blur fill-height'">
                </payment-gateway-card>
                <payment-gateway-card v-else :card="card" :class-type="'v-card-payment-gateway fill-height'">
                </payment-gateway-card>
            </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import PaymentGatewayCard from "@/components/PaymentGatewayCard";
    export default {
        name: "PaymentGateway",
        components: {PaymentGatewayCard},
        data(){
            return{
                cards: [
                    {
                        status:'2',
                        title:'درگاه نرمون',
                        gateWayNumber:'۲۳۴۵۶۷۸۹۰۹۸۷۶۵۴۳۲۳',
                        walletType:'کیف‌پول اصلی من',
                        settlement:false,
                        activation:true,
                    },
                    {
                        status:'1',
                        title:'درگاه نرمون',
                        gateWayNumber:'۲۳۴۵۶۷۸۹۰۹۸۷۶۵۴۳۲۳',
                        walletType:'کیف‌پول اصلی من',
                        settlement:true,
                        activation:false,
                    },
                    {
                        status:'0',
                        title:'درگاه نرمون',
                        gateWayNumber:'۲۳۴۵۶۷۸۹۰۹۸۷۶۵۴۳۲۳',
                        walletType:'کیف‌پول اصلی من',
                        settlement:false,
                        activation:false,
                    },

                ],
                numberOfColumns: 3,
            }
        },
        computed: {
            gridStyle() {
                return {
                    gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
                }
            },
        },
        methods: {
            addCard() {
                this.cards.push('new-card')
            },
        },
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

        font-family: 'IRANSansMobile(FaNum)';
        font-size: 13px;
        color: #b10dbb;
        border-radius: 23px!important;


    }

    .div-gradient-border {
        width: 173px;
        height: 39px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient( to right, #27269c 25%, #e005c5 88%, #e005c5 100%)!important;
        border-radius: 23px !important;

        /*border-image-source: linear-gradient( to right, #27269c 25%, #e005c5 51%, #e005c5 100%)!important;*/
        /*border-image-slice: 2;*/
        /*border-radius: 23px!important;*/
        /*border-style: solid !important;*/
        /*border-width: 2px!important;*/
    }

    .h1-gateway-top-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
        padding-bottom: 20px;
        padding-top: 20px;

    }
    .v-card-overlay-blur {
        width: 400px;
        border-radius: 17px!important;
        box-shadow: 0 4px 13px 0 rgba(117, 117, 117, 0.09);
        background-color: rgb(255, 255, 255); opacity: 0.5;
    }
</style>