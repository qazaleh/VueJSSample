<template>
    <v-card :class="classType">
            <v-row >
                <v-col >
                    <v-row class="v-row-right-content" >
                        <v-card  flat class="v-car-gateway-image"></v-card>
                        <v-card-title class="v-card-title-gateway pr-1">{{card.title}}</v-card-title>
                    </v-row>
                </v-col>
                <v-col >
                    <v-row class="v-row-left-content" style="padding-top: 20px">
                    <v-chip
                            class="v-chip-gateway-status"
                            :color = this.cardStatusColor()
                            :text-color = this.cardStatusTextColor()
                            style="margin-right: 10px ; opacity: 1!important;"
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
        <v-divider style="margin-right: 25px;margin-left: 25px"></v-divider>
        <v-row class="v-row-center-content justify-space-around">
            <v-col cols="3">
                <v-tooltip bottom color="#253858" :disabled="buttonActionEnable()">
                    <template  v-slot:activator="{ on }">
                <v-btn elevation="0" icon v-on="on" :disabled="buttonActionEnable()">
                    <v-icon size="20" color="#253858">mdi-chart-line</v-icon>
                </v-btn>
                    </template>
                    <span class="span-gateway-tooltip">نمودار گزارشات</span>
                </v-tooltip>
            </v-col>
            <v-col cols="3">
                <v-tooltip bottom color="#253858" :disabled="buttonActionEnable()">
                    <template v-slot:activator="{ on }">
                        <v-btn elevation="0" icon v-on="on" :disabled="buttonActionEnable()">
                            <v-icon size="20" color="#253858">mdi-file-table-outline</v-icon>
                        </v-btn>
                    </template>
                    <span class="span-gateway-tooltip">گزارشات درگاه</span>
                </v-tooltip>
            </v-col>
            <v-col cols="3">
                <v-tooltip bottom color="#253858" :disabled="buttonActionEnable()">
                    <template v-slot:activator="{ on }">
                        <v-btn elevation="0" icon v-on="on" :disabled="buttonActionEnable()" @click.stop="showScheduleForm=true">
                            <v-icon size="20" color="#253858">mdi-hexagon-multiple-outline</v-icon>
                        </v-btn>
                        <gateway-setting-form :visible="showScheduleForm" :card="this.card" @close="showScheduleForm=false" />
                    </template>
                    <span class="span-gateway-tooltip">تنظیمات درگاه</span>
                </v-tooltip>
            </v-col>
            <v-col cols="3">
                <v-tooltip bottom color="#253858" :disabled="buttonActionEnable()">
                    <template v-slot:activator="{ on }">
                        <v-btn elevation="0" icon v-on="on" :disabled="buttonActionEnable()">
                            <v-icon size="20" color="#253858">mdi-border-color</v-icon>
                        </v-btn>
                    </template>
                    <span class="span-gateway-tooltip">ویرایش درگاه</span>
                </v-tooltip>
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
    import GatewaySettingForm from "@/components/GatewaySettingForm";
    export default {
        name: "PaymentGatewayCard",
        components: {GatewaySettingForm},
        data(){
            return{
                currentStatus : String,
                showScheduleForm: false
            }
        },
        props:{
            classType:String,
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

            },
            cardStatusColor: function() {
                if (this.card.status === '0') {
                    return '#ffbdad'
                }else if (this.card.status === '1') {
                    return '#fff0b3'
                }else {
                    return '#abf5d1'
                }

            },
            cardStatusTextColor: function() {
                if (this.card.status === '0') {
                    return '#de350b'
                }else if (this.card.status === '1') {
                    return '#ff991f'
                }else {
                    return '#00875a'
                }

            },
            buttonActionEnable: function() {
                if (this.card.status === '0') {
                    return true;
                }else {
                    return false;
                }

            },
        }

    }
</script>

<style scoped>
    .v-card-payment-gateway {
        width: 400px;
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
    .v-row-center-content {

        justify-content: center;
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
    .span-gateway-tooltip{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #ffffff;
    }
    .template-gateway-tooltip{
        border-radius: 3px!important;
        box-shadow: 0 2px 4px 0 rgba(9, 30, 66, 0.25);
        background-color: #253858 ;
    }

</style>