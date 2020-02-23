<template>
    <v-container fluid fill-height style="padding-top: 0px">
        <v-row style="padding-top: 0px" justify="end">
            <v-col cols="3"
                   v-if="window.width > 760"
                   class="#fafbfc"
            >

            </v-col>
            <v-col cols="9" class="white">
                <h1 class="h1-rule-header">سوالات متداول</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "PanelCommonQuestion",
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        },
        data(){
            return{
                window: {
                    width: 0,
                    height: 0
                },
            }
            }
    }
</script>

<style scoped>
    .h1-rule-header {
        font-family: 'IRANSansMobile(FaNum)';
        font-size: 28px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #172b4d;
        padding: 20px;
    }
</style>