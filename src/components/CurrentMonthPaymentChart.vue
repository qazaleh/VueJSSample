<template>
    <div class="CurrentMonthPaymentChart">
        <div>
            <p style="font-family: 'IRANSansMobile(FaNum)';font-size: small; color: grey; alignment: right; padding-right: 24px; padding-top: 8px">تعداد تراکنش‌های دی ۹۸</p>
            <div class="currencyCustom" style=" text-align: left ; font-family: 'IRANSansMobile(FaNum)';padding-top: 0px; padding-left: 62px">
                <strong>23,000,000</strong>تومان
            </div>
        </div>

        <v-card
                class="text-center transparent v-card--material-chart"
                light
                flat
        >
            <v-sparkline
                    :value="value"
                    :gradient="gradient"
                    width="170"
                    height="25"
                    line-width="1"
                    smooth
                    auto-draw
                    :show-labels="false"
                    fill="true"
                    style="margin-top: -5px"
            >

            </v-sparkline>
        </v-card>


    </div>

</template>

<script>
    const gradients = [
        ['#af72bb', '#8b45bb', '#4e1fa5'],
    ]
    export default {
        name: "CurrentMonthPaymentChart",
        data () {
            return {
                value: [45,35,20,11,45,12,32,10,6,9],
                gradient:gradients[0],
                gradients,
            }
        },
    }
</script>

<style scoped>

    .body{
        color: #253858;
        font-family: 'IRANSansMobile(FaNum)';
        font-size: small;
    }

    .body strong {
        color: #253858;
        font-size: medium;
        font-family: 'IRANSansMobile(FaNum)';
    }

</style>