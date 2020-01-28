<template>
    <div id="HomeBaseChart">
        <v-card-title align="right" style="font-size: medium; font-family: 'IRANSansMobile(FaNum)'; color: black;">
            نمودار تراکنش های ۳۰ روز اخیر
        </v-card-title>

        <home-chart-tab/>


                            <v-card
                                    class="text-center transparent v-card--material-chart"
                                    light
                                    flat
                            >
                                            <v-sparkline
                                                    :value="value"
                                                    :gradient="gradient"
                                                    line-width="1px"
                                                    smooth
                                                    auto-draw
                                                    :show-labels="true"
                                                    :label-size="2"
                                                    style="font-family: 'IRANSansMobile(FaNum)'; font-size: x-small"
                                            >
                                                <template
                                                        slot="label"
                                                        slot-scope="item"
                                                >
                                                    ${{ item.value }}
                                                </template>
                                        </v-sparkline>
                            </v-card>


    </div>

<!--        <chartist-->
<!--                class="v-card&#45;&#45;material-chart"-->
<!--                :data="dailySalesChart.data"-->
<!--                :options="dailySalesChart.options"-->
<!--                type="Line"-->
<!--                color="info"-->
<!--                style="padding-bottom: 50px ; color: grey"-->
<!--        ></chartist>-->



</template>

<script>

    import HomeChartTab from "@/components/HomeChartTab";
    const gradients = [
        ['#7e3ebb', '#8b45bb', '#af72bb'],
    ]
    export default {

        name: "HomeBaseChart",

        data () {
            return {
                value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
                gradient:gradients[0],
                gradients,
                dailySalesChart: {
                    data: {
                        labels: [1, 2, 3, 4, 5, 6, 7, 8,0,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                        series: [
                            [1000,120,350,134,23,3444,643,234,643,2345,22433,545,23,5466,2000,1000,120,350,134,23,3444,643,234,643,2345,22433,545,23,5466,2000,],
                            ]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 10000,

                    },



        }

            }
        },

        components: { HomeChartTab},
    }
</script>

<style scoped>

</style>
<style lang="scss">
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
</style>
<style>

    #chart svg {
        height: 400px;
    }

</style>