<template>


    <v-container class="" style="border-radius: 0px!important;">
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
                            class=""
                            cols="12" md="5">

                            <wallet-little-card></wallet-little-card>
                            <wallet-little-card></wallet-little-card>
                            <wallet-little-card></wallet-little-card>
                            <wallet-little-card></wallet-little-card>
                            <wallet-little-card></wallet-little-card>


                    </v-col>
                </v-row>

    </v-container>
</template>

<script>
    import MainChart from "./mainChart";
    import LastTransactionsView from "./LastTransactionsView";
    // import axios from "axios";
    import RequestWrapper from "./RequestWrapper";
    import WalletLittleCard from "./Wallet/WalletLittleCard";



    export default {
        name: "PanelMainView",
        components: {WalletLittleCard, LastTransactionsView, MainChart},
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
              .then((response) => {
                  if(response["status"]["code"] == 0 && response["status"]["message"] == "Success") {

                      let arrayList = response['data']['list'];
                      console.log("this is list",arrayList);
                              for (let i = 0; i < arrayList.length; i++) {

                                  let objectMoney =  {
                                      date: arrayList[i]["date"],
                                      title: arrayList[i]["title"],
                                      description: arrayList[i]["desciption"],
                                      status: arrayList[i]["status"],
                                      func: arrayList[i]["func"],
                                  }
                                  this.list.push(objectMoney);
                              }
                              this.totalPages = arrayList.length;
                              this.loadingTransaction = false;
                  }else {
                      // alert(response["status"]["message"]);
                  }
              }).catch(function(error) {
                  console.log(error.description);
                  // alert("خطای ارتباط با سرور" + "\n" + error.description);
              });
              // apiService.getTransactions("https://www.atipay.net/__l__.php?page=1")
              // .then((resolveJson) => {
              //     console.log('test request wrapper ');
              //     console.log(resolveJson);
              // });
          }
        },
        mounted () {

            this.getTransactions();

            // $scrollview.onLastEntered = () => this.page++
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
    .v-row-center{
        align-content: center;
        alignment: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

</style>