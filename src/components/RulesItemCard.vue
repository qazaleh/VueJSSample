<template>
    <v-card class="transparent" elevation="0" flat>
        <v-card-title class="v-card-header-text">{{cardItem.id + '.' + ' ' + cardItem.header}}</v-card-title>
        <v-card-text class="v-card-context-text">{{cardItem.context}}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "RulesItemCard",
        props:{
            cardItem:{
                header:'',
                context:'',
                id:''
            }
        }
    }
</script>

<style scoped>

    .v-card-header-text {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #b10dbb;
        padding-right: 30px;
    }
    .v-card-context-text{
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #7a869a;
        padding-right: 40px;
        padding-top: 10px;
    }
</style>