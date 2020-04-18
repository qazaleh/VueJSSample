<template>
                <v-container>
                    <v-layout fill-height column>
                        <v-flex xs12>
                                   <v-card class="v-card-transactions-base">
                                       <v-progress-linear
                                               :active="!loaded"
                                               :indeterminate="!loaded"
                                               absolute
                                               top
                                               height="5px"
                                               background-opacity="0.11"
                                               :rounded="true"
                                               :striped="true"
                                               background-color="#27269c"
                                               color="#e005c5"
                                               class="v-progress-linear-transaction"
                                       ></v-progress-linear>
                                        <v-data-table
                                                :headers="headers"
                                                :items="this.objectArray"
                                                :items-per-page= 5
                                                :pageCount = this.pageNumber
                                                :footer-props="{'items-per-page-options': [5, 10, 15]}"
                                                v-bind:class="{ 'v-data-table-transaction': loaded, 'v-data-table-transaction-blur': !loaded }"
                                                mobile-breakpoint=600

                                        >
                                            <v-card height="100%" width="100%" >
                                                test
                                            </v-card>
                                  </v-data-table>
                                    </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
</template>

<script>

    export default {
        name: "LastTransactionsView",
        props:[
            'objectArray','pageNumber','totalPages','loaded'
        ],
        mounted() {
            this.generateFakeData();
        },
        methods:{
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            generateFakeData(){
                let list = [

                    {
                        date: '1398/12/14',
                        title: "تست",
                        description: 'خرید',
                        status: 'موفق',
                        func: 'عملیات تست',
                    },
                    {
                        date: '1398/12/14',
                        title: "تست",
                        description: 'خرید',
                        status: 'موفق',
                        func: 'عملیات تست',
                    },
                    {
                        date: '1398/12/14',
                        title: "تست",
                        description: 'خرید',
                        status: 'موفق',
                        func: 'عملیات تست',
                    },
                    {
                        date: '1398/12/14',
                        title: "تست",
                        description: 'خرید',
                        status: 'موفق',
                        func: 'عملیات تست',
                    },
                    {
                        date: '1398/12/14',
                        title: "تست",
                        description: 'خرید',
                        status: 'موفق',
                        func: 'عملیات تست',
                    },
                ]
                this.objectArray = list;
                this.loaded = false;
            }
        },
        data () {
            return {
                isBlurred: true,
                blurConfig: {
                    isBlurred: false,
                    opacity: 0.3,
                    filter: 'blur(1.2px)',
                    transition: 'all .3s linear'
                },
                result:'',
                headers: [
                    {text: 'تاریخ', value: 'date', sortable: false,},
                    { text: 'عنوان', value: 'title', sortable: false, },
                    { text: 'بابت', value: 'description', sortable: false, },
                    { text: 'وضعیت', value: 'status', sortable: false, },
                    { text: 'عملیات', value: 'func' , sortable: false,},

                ],
            }
        },
        computed(){

        }
    }
</script>

<style scoped>
.v-card-transactions-base {
    border-radius: 17px!important;
    box-shadow: 0 4px 13px 0 rgba(9, 30, 66, 0.13);
    background-color: #ffffff;
}

    .v-data-table-transaction {
        font-family: 'IRANSansMobile(FaNum)' !important;
        font-size: 13px !important;
        font-weight: normal !important;
        font-stretch: normal !important;
        font-style: normal !important;
        line-height: 1.15 !important;
        letter-spacing: normal !important;
        color: #253858 !important;
    }
    .v-data-table-transaction-blur {
        font-family: 'IRANSansMobile(FaNum)' !important;
        font-size: 13px !important;
        font-weight: normal !important;
        font-stretch: normal !important;
        font-style: normal !important;
        line-height: 1.15 !important;
        letter-spacing: normal !important;
        color: #253858 !important;
        opacity: 0.3;
        filter:blur(4px);
    }

    .v-progress-linear-transaction {
        border-radius: 12px!important;
        margin-left:5px;
        width: 98%;
        opacity: 0.7;
        background-image: linear-gradient(to left, #e005c5, #27269c);
        /*background: linear-gradient( to right, #27269c 25%, #e005c5 88%, #e005c5 100%)!important;*/
        /*opacity: 0.7;*/

    }
</style>