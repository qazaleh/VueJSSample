<template>
    <v-dialog class="v-dialog-gateway-sett" v-model="show" persistent max-width="313">
            <v-card class="v-card-gateway-sett" flat light elevation="0">
                    <v-row class="v-row-right">
                        <v-btn small icon elevation="0" @click.stop="show=false">
                            <v-icon size="15" color="#42526e">mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row class="v-row-right">
                        <h1 class="h1-dialog-header">تنظیمات درگاه</h1>
                    </v-row>
                     <v-row class="v-row-right">
                        <v-col>
                            <p class="p-switch-labels">فعالسازی درگاه</p>
                        </v-col>
                         <v-col>
                             <v-switch
                                     class="v-switch-small"
                                     v-model=card.activationSwitch inset
                                     color="#b10dbb"
                                     hide-details
                                     light
                             ></v-switch>
                         </v-col>
                     </v-row>

                <v-row class="v-row-right" style="padding-top: 10px">
                    <v-col>
                        <p class="p-switch-labels">فعال سازی درخواست تسویه</p>
                    </v-col>
                    <v-col>
                        <v-switch
                                class="v-switch-small"
                                v-model=card.settlementSwitch inset
                                color="#b10dbb"
                                hide-details
                                light
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "GatewaySettingForm",

        props: {
            visible :Boolean,
            card: {
            status:'',
            title:'',
            gateWayNumber:'',
            walletType:'',
            settlement:false,
            activation:false,
    }
    },

        data(){
            return{
                activationSwitch: false,
                settlementSwitch: false,
            }
    },

    computed: {
        show: {
            get () {
                return this.visible
            },
            set (value) {
                if (!value) {
                    this.$emit('close')
                }
            }
        }
    }
    }
</script>

<style scoped>
    .v-row-right{
        justify-content: flex-start;
        padding-right: 20px;
        padding-top: 10px;

    }
    .v-row-center{
        align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .v-dialog-gateway-sett{
        /*max-width: 313px!important;*/
        max-height: 203px!important;
        border-radius: 12px!important;

    }
    .v-card-gateway-sett{
        /*width: 313px!important;*/
        height: 203px!important;
        border-radius: 12px!important;
        background-color: #f0f3f8;
    }
    .h1-dialog-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
    .p-switch-labels{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: right;
        color: #253858;
    }
    .v-switch-small {
        transform-origin: right;
        padding-right: 8px;
        transform: rotateY(-180deg) scale(0.775);
        margin-right: 70px;
        margin-left: -50px;

    }
</style>