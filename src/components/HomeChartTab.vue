<template>
    <div id="HomeChartTab">
        <v-tabs background-color="transparent" light  active-class="v-tabs__item--active" color="black" mandatory="true" slider-color="purple" right="false" height="25px"
                v-model="tab"
        >
            <v-tab class="chartTab">مبلغ تراکنش</v-tab>
            <v-tab class="chartTab">تعداد تراکنش</v-tab>
        </v-tabs>

    </div>
</template>

<script>
    export default {
        tab: null,
        name: "HomeChartTab"
    }
</script>

<style scoped>
.chartTab{
    font-size: smaller;
    font-family: 'IRANSansMobile(FaNum)';
    color: black;
}
</style>
