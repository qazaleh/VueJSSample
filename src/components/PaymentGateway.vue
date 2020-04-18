<template>
    <v-container fluid fill-height class="v-container-grey-bg">
        <v-row style="align-content: center;alignment: center;align-items: center;justify-content: center;justify-items: center;">
            <v-row>
                <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                    <v-row class="v-row-right-content" >
                        <p class="v-toolbar-title-profile-header">درگاه‌های پرداخت</p>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
        <v-row>
            <v-col md="6" xl="6" lg="6" sm="12" xs="12">
                <v-row class="v-row-right-content" >
                    <div light elevation="0" class=" div-gradient-border">
                    <v-btn class="v-btn-gradient-border" elevation="0" light @click.stop="showAddForm=true">
                        <v-icon class="v-icon-timer">mdi-plus</v-icon>
                        ساخت درگاه جدید
                    </v-btn>
                    </div>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="transparent" justify="space-between">
            <v-col cols="1" >
                <v-card flat  class="mt-4" style="width: 40px;height: 40px;border-radius: 12px!important;">
                    <v-icon small class="mt-3 mr-3" color="#253858" >mdi-filter</v-icon>
                </v-card>
            </v-col>
            <v-col cols="11" >
                <v-row justify="space-between" class="wrap">
                    <v-col cols="6" sm="6" md="6" lg="3" xl="3">
                        <v-text-field @input="filter.transactionNumber"  class="v-textField-filter"  solo flat placeholder="123456"></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="3" lg="3" xl="3">
                        <v-select
                                :v-model="filter.transactionNumber"
                                :items="transactionNumberList"
                                color="#253858"
                                label="شماره تراکنش"
                                solo
                                flat
                        ></v-select>
<!--                        <v-text-field class="v-textField-filter" solo flat placeholder="123456"></v-text-field>-->
                    </v-col>
                    <v-col cols="6" sm="6" md="3" lg="3" xl="3">
                        <v-text-field class="v-textField-filter" solo flat label="از تاریخ" ></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="3" lg="3" xl="3">
                        <v-text-field class="v-textField-filter" solo flat label="تا تاریخ"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <add-gateway-form
                :visible="showAddForm"
                @close="showAddForm=false"
                @add:gateWay="addGateWay"
        ></add-gateway-form>
        <h1 class="h1-gateway-top-header">جستجوی پیشرفته</h1>
        <v-row>
            <v-col v-for="card in cards" :key="card.title" :card="card" >
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
    import AddGatewayForm from "./AddGatewayForm";
    export default {
        name: "PaymentGateway",
        components: {AddGatewayForm, PaymentGatewayCard},
        data(){
            const defaultFilter = Object.freeze({
                fromDate: null,
                toDate: null,
                transactionNumber: '',
            })

            return{
                showAddForm: false,
                filter: Object.assign({}, defaultFilter),
                transactionNumberList:[
                  "3241324","4567351245","86556356356","35656356356","23451350987654",
                ],

                cards: [
                    {
                        id:'0',
                        status:'2',
                        title:'درگاه نرمون',
                        gateWayNumber:'۲۳۴۵۶۷۸۹۰۹۸۷۶۵۴۳۲۳',
                        walletType:'کیف‌پول اصلی من',
                        settlement:false,
                        activation:true,
                    },
                    {
                        id:'1',
                        status:'1',
                        title:'درگاه نرمون',
                        gateWayNumber:'۲۳۴۵۶۷۸۹۰۹۸۷۶۵۴۳۲۳',
                        walletType:'کیف‌پول اصلی من',
                        settlement:true,
                        activation:false,
                    },
                    {
                        id:'2',
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

            addGateWay(gateWay) {
                const lastId =
                    this.cards.length > 0
                        ? this.cards[this.cards.length - 1].id
                        : 0;
                const id = lastId + 1;
                console.log('element for add in list');
                console.log(gateWay);
                const newGateWay = { ...gateWay, id };
                newGateWay.settlement = true;
                newGateWay.activation = false;
                newGateWay.status = '1';
                console.log('new gateway');
                console.log(gateWay);
                this.cards = [...this.cards, newGateWay];
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
    .v-textField-filter{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: #253858;
    }

</style>