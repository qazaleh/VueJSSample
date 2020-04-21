<template>
        <v-card class="v-card-addAccount-main text-center justify-center elevation-0">

            <v-row justify="center" class="pt-8">
                <v-btn @click.stop="showAddAccountForm=true" icon  @click="showForm"><v-icon   color="#5e6c84">mdi-delete</v-icon></v-btn>
            </v-row>
            <v-row justify="center">
                <v-btn color="" text  class="v-btn-add" @click="showForm">افزودن حساب جدید</v-btn>
            </v-row>
        </v-card>
</template>

<script>
    export default {
        name: "AddNewAccount",
        data(){
            return{
                showAddAccountForm : false
            }
        },
        methods:{
            showForm() {
                this.showAddAccountForm = true;
                this.$emit('show:form',this.showAddAccountForm);
            }
        }

    }
</script>

<style scoped>
.v-card-addAccount-main {
    width: 231px;
    height: 140px;
    border-radius: 13px;
    border: dashed 1px #c9d0db;
    background-color: #f4f5f7;
}
    .v-btn-add {
        font-family: "IRANSansMobile(FaNum)";
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #5e6c84;
    }
</style>