<template>
    <v-container fluid fill-height >
        <v-container class="v-container-grey-bg">
            <v-row align="start" class="pr-8">
                <p class="v-toolbar-title-AccountView-header">حساب‌های بانکی</p>
            </v-row>
            <v-row  class="v-row-right pa-5 ma-5 white" style="border-radius: 12px!important;" >

                <v-card
                        class="ma-1 pa-2"
                        flat
                        style="border-radius: 13px;!important;"
                >
                    <AddNewAccount  @show:form="illustrateForm"></AddNewAccount>
                </v-card>
                <v-card
                        v-for="card in cards" :key="card.title"
                        class="ma-1 pa-2"
                        flat
                        style="border-radius: 13px;!important;"
                >
                    <AccountCardView   :card="card"/>
                </v-card>

            </v-row>
        </v-container>

        <add-account-form-view
                :visible="showAddAccountForm"
                @close="showAddAccountForm=false"
                @add:bankAccount="addNewCard"
        ></add-account-form-view>

    </v-container>
</template>

<script>
    import AddNewAccount from "./Cards/AddNewAccount";
    import AccountCardView from "./Cards/AccountCardView";
    import AddAccountFormView from "./AddAccountForm/AddAccountFormView";
    export default {
        name: "BankingAccountsMainView",
        components: {AddAccountFormView, AccountCardView, AddNewAccount},
        data(){

            // const defaultFilter = Object.freeze({
            //     fromDate: null,
            //     toDate: null,
            //     transactionNumber: '',
            // })

            return{
                showAddAccountForm: false,
                cards: [
                    {
                        id:'0',
                        accountNumber:'2345 4352 4545 3455',
                        ibanNumber:'13423452345435345',
                        expireDate:'12/23',
                    },
                    {
                        id:'1',
                        accountNumber:'2345 4352 4545 3455',
                        ibanNumber:'13423452345435345',
                        expireDate:'12/23',
                    },
                    {
                        id:'2',
                        accountNumber:'2345 4352 4545 3455',
                        ibanNumber:'13423452345435345',
                        expireDate:'12/23',
                    },
                    ]

            }
        },
       methods:{

            illustrateForm(show){
                this.showAddAccountForm = show
            },
           addNewCard(newCard) {
               const lastId =
                   this.cards.length > 0
                       ? this.cards[this.cards.length - 1].id
                       : 0;
               console.log("last ID:::::",lastId);
               const id = lastId + 1;
               const card = { ...newCard, id };
               card.expireDate = '99/3'
               console.log("*******************",this.cards);
               this.cards = [...this.cards, card];
               console.log("$$$$$$$$$$$$$$$$$",this.cards);

           },
       }
    }
</script>

<style scoped>
.v-toolbar-title-AccountView-header{
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
.v-row-right{
    justify-content: flex-start;
    padding-right: 20px;
    padding-top: 10px;

}
</style>