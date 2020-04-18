<template>

    <v-container fluid  class="v-container-chart-base">
<!--        <v-row class="v-row-right-content transparent" style="margin-right: 10px">-->
            <v-card-title class="v-card-title-header-chart ">نمودار تراکش‌های ۳۰ روز اخیر</v-card-title>
<!--        </v-row>-->

            <activity-graph/>

        <!--        <v-sparkline-->
<!--                :value="value"-->
<!--                :gradient="gradient"-->
<!--                line-width="1px"-->
<!--                smooth-->
<!--                auto-draw-->
<!--                :show-labels="true"-->
<!--                :label-size="2"-->
<!--                style="font-family: 'IRANSansMobile(FaNum)'; font-size: x-small"-->
<!--        >-->
<!--            <template-->
<!--                    slot="label"-->
<!--                    slot-scope="item"-->
<!--            >-->
<!--                ${{ item.value }}-->
<!--            </template>-->
<!--        </v-sparkline>-->

    </v-container>

</template>

<script>

    // import {  Line } from 'vue-chartjs'

    import ActivityGraph from "./ActivityGraph";
    const gradients = [
        ['#7e3ebb', '#8b45bb', '#af72bb'],
    ]
    export default {

        name: "mainChart",
        components: {ActivityGraph},
        data () {
            return {


                value: [0, 2, 5, 9, 5, 10, 3, 5, 4, 10, 1, 8, 2, 9, 0],
                gradient: gradients[0],
                gradients,
            }
        },

        // extends: Line,

        mounted () {
            // this.renderChart({
            //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            //     dataSets: [
            //         {
            //             label: 'Data One',
            //             backgroundColor: '#f87979',
            //             data: [40, 39, 10, 40, 39, 80, 40]
            //         }
            //     ]
            // }, {responsive: true, maintainAspectRatio: false})
        }

    }
</script>

<style scoped>

</style>
<style lang="scss">

    .v-row-left-content {

        justify-content: flex-end;

    }
    .v-row-right-content {

        justify-content: flex-start;

    }
    .v-card-title-header-chart {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
    }
    .v-container-chart-base {
        height: 344px;
        border-radius: 17px!important;
        box-shadow: 0 4px 13px 0 rgba(117, 117, 117, 0.09);
        background-color: #ffffff;
    }
    .v-card-chart-base {
        height: 344px;
        border-radius: 17px;
        box-shadow: 0 4px 13px 0 rgba(117, 117, 117, 0.09);
        background-color: #ffffff;
    }

    .v-card--material-chart {
        .v-card--material__header {
            .ct-label {
                color: inherit;
                opacity: .7;
                font-size: 0.975rem;
                font-weight: 100;
            }

            .ct-grid{
                stroke: rgba(255, 255, 255, 0.2);
            }
            .ct-series-a .ct-point,
            .ct-series-a .ct-line,
            .ct-series-a .ct-bar,
            .ct-series-a .ct-slice-donut {
                stroke: rgba(255,255,255,.8);
            }
            .ct-series-a .ct-slice-pie,
            .ct-series-a .ct-area {
                fill: rgba(255,255,255,.4);
            }

        }
    }

    .GChart.transactions {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 11px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.27;
        letter-spacing: normal;
        text-align: center;
        color: #97a0af;
    }
</style>
<style>

    #chart svg {
        height: 400px;
    }

</style>