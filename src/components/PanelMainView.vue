<template>


    <v-container class="#f4f5f7" style="border-radius: 0px!important;">
                <v-row class="v-row-right-content #f4f5f7" style="margin-right: 10px">
                    <v-card-title class="v-card-title-header">پیشخوان</v-card-title>
                </v-row>
        <v-row class="px-10" justify="center">
        <MainChart></MainChart>
        </v-row>
                <v-row style="padding: 20px" justify="center">
                    <v-col class="transparent"  cols="12" md="7">
                        <last-transactions-view  :object-array="list" :total-pages="totalPages" :loaded="!loadingTransaction">
                        </last-transactions-view>
                    </v-col>
                    <v-col
                            class="pink"
                            cols="12" md="5">
                        <v-card class=" pa-6 light-green">

                        </v-card>
                    </v-col>
                </v-row>

    </v-container>
</template>

<script>
    import MainChart from "./mainChart";
    import LastTransactionsView from "./LastTransactionsView";
    // import axios from "axios";
    import RequestWrapper from "./RequestWrapper";



    export default {
        name: "PanelMainView",
        components: {LastTransactionsView, MainChart},
        data(){
            return{
                list:[],
                totalPages : 0,
                loadingTransaction : true,
            }
        },
        methods:{
          getTransactions(){
              console.log('TESTTTTTT');
              const apiService = new RequestWrapper();

              apiService.sendGetRequest("https://www.atipay.net/__l__.php?page=1")
              .then((json) => {
                  console.log('transaction list done');
                  console.log(json)
              })
              // apiService.getTransactions("https://www.atipay.net/__l__.php?page=1")
              // .then((resolveJson) => {
              //     console.log('test request wrapper ');
              //     console.log(resolveJson);
              // });
          }
        },
        mounted () {

            this.getTransactions();

            // axios.get("https://www.atipay.net/__l__.php?page=1")
            //
            //     .then(response => {
            //
            //         // console.log('response is here');
            //         // console.log(response);
            //         let arrayList = response.data['data']['list'];
            //         for (let i = 0; i < arrayList.length; i++) {
            //
            //             let objectMoney =  {
            //                 date: arrayList[i]["date"],
            //                 title: arrayList[i]["title"],
            //                 description: arrayList[i]["desciption"],
            //                 status: arrayList[i]["status"],
            //                 func: arrayList[i]["func"],
            //             }
            //             this.list.push(objectMoney);
            //         }
            //         this.totalPages = arrayList.length;
            //         this.loadingTransaction = false;
            //
            //     }).bind(this).catch(e => {
            //     console.log(e.description);
            // }) ;

        },
    }
</script>

<style scoped>
    .v-row-right-content {

        justify-content: flex-start;

    }
    .v-card-title-header{
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
</style>