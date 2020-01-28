<template>
    <div class="homeBase" >
        <v-row class="wrap ml-10 mr-10"  justify="space-around">
            <v-col xs="12" sm="12" md="9" lg="9" xl="9" ms="2">
                <v-row>
                    <v-col cols="12">
                        <v-card class="transparent" height="70px" width="fill" flat light >
                            <v-card-text class="text-right" align="right" style="font-family: 'IRANSansMobile(FaNum)'; font-size: larger; color: black">پیشخوان</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="transparent" height="344px" width="fill"
                                style="border-radius: 15px"
                                elevation="1"
                        >
                            <home-base-chart/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="wrap">
                    <v-col sm="12" md="8" lg="8" xl="8" >
                        <v-card class="transparent" height="369px" width="fill" color="grey lighten-3"
                                style="border-radius: 15px" flat>
                            <home-transactions-table/>
                        </v-card>
                    </v-col>
                    <v-col sm="12" md="4" lg="4" xl="4">
                        <v-card  height="167px" width="fill" color="white"
                                 style="border-radius: 8px">
                            <owner-wallet/>
                        </v-card>
                        <v-card class="mt-8" height="167px" width="fill" color="white"
                                style="border-radius: 8px">
                            <message-wallet/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col xs="12" sm="12" md="12" lg="3" xl="3" >
                <v-row>
                    <v-col cols="12">
                        <v-card class="transparent" height="80" width="fill" flat elevation="0"
                                style="border-radius: 8px">
                            <home-toolbar/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="mt-3 transparent align-content-center" color="white" height="162" width="fill" flat
                                style="border-radius: 8px">
                            <user-info-dashboard/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="mt-3" color="grey lighten-4" height="90" width="fill" flat
                                style="border-radius: 15px">
                            <settlement-view/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="mt-3" color="grey lighten-4" height="109" width="fill"
                                style="border-radius: 15px">
                            <CurrentMonthTransactionChart/>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="mt-3" color="grey lighten-5" height="109" width="fill"
                                style="border-radius: 15px">
                            <current-month-payment-chart/>
                        </v-card>
                    </v-col>
                </v-row>
                <system-alert/>

            </v-col>
        </v-row>

    </div>
</template>

<script>

    import HomeBaseChart from "@/components/HomeBaseChart";
    import HomeTransactionsTable from "@/components/HomeTransactionsTable";
    import HomeToolbar from "@/components/homeToolbar";
    import OwnerWallet from "@/components/OwnerWallet";
    import MessageWallet from "@/components/MessageWallet";
    import UserInfoDashboard from "@/components/UserInfoDashboard";
    import SettlementView from "@/components/SettlementView";
    import CurrentMonthTransactionChart from "@/components/CurrentMonthTransactionChart";
    import CurrentMonthPaymentChart from "@/components/CurrentMonthPaymentChart";
    import SystemAlert from "@/components/SystemAlert";
    export default {
        name: "HomeBase",
        components: {
            SystemAlert,
            CurrentMonthPaymentChart,
            CurrentMonthTransactionChart,
            SettlementView,
            UserInfoDashboard, MessageWallet, OwnerWallet, HomeToolbar, HomeTransactionsTable, HomeBaseChart}
    }
</script>

<style scoped>

</style>