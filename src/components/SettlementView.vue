<template>
    <div class="SettlementView">
        <div>
            <p style="font-family: 'IRANSansMobile(FaNum)';font-size: small; color: grey; alignment: right; padding-right: 24px; padding-top: 16px">مبلغ در انتظار تسویه</p>
        </div>
        <div class="currencyCustom" style=" text-align: left ; font-family: 'IRANSansMobile(FaNum)';padding-top: 3px; padding-left: 62px">
            <strong>23,000,000</strong>تومان
        </div>
    </div>

</template>

<script>
    export default {
        name: "SettlementView"
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