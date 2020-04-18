<template>
    <v-content>
            <v-row class=""  >
                <v-col class="blue-grey" cols="12" sm="12" md="12"  lg="9" xl="9">
                    <v-row>
                        <v-btn
                                class="v-btn-side-menu"
                                @click.stop="expandAndCollapseMenu"
                                fab
                                dark
                                color="#b10ebb"
                        >
                            <v-icon class="v-icon-row" v-if="mini == true" >mdi-chevron-left</v-icon>
                            <v-icon class="v-icon-row" v-else >mdi-chevron-right</v-icon>
                        </v-btn>
                        <router-view/>
                    </v-row>
                </v-col>

                <v-col class="" cols="12" sm="12" md="12"  lg="3" xl="3">
                    <v-row justify="center" align-content="center">
                        <v-card flat class="transparent">
                            <home-toolbar/>
                        </v-card>
                    </v-row>
                    <v-row justify="center" align-content="center pt-8" >
                        <v-card flat class="transparent">
                            <UserInformationHome/>
                        </v-card>
                    </v-row>
                    <v-row justify="center" align-content="center pt-8"  >
                        <UserWorkFlow></UserWorkFlow>
                    </v-row>
                </v-col>
            </v-row>
    </v-content>
</template>

<script>

    import UserInformationHome from "../UserInformationHome";
    import UserWorkFlow from "../UserWorkFlow";
    import HomeToolbar from "../HomeToolbar";

    export default {
        name: "HomeBaseComponent",
        components: {UserInformationHome,UserWorkFlow,HomeToolbar},

        data () {
            return {
                mini: false,
            }
            },
        methods: {
            expandAndCollapseMenu() {

            },
        },
        mini() {
            return !(this.mdAndUp);
        }
    }
</script>

<style scoped>
    .v-btn-side-menu {
        width: 40px;
        height: 40px;
        /*border-right: lightgray 9px solid;*/
        /*background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);*/
    }
    .v-icon-row {
        border-right: lightcoral;
        border-width: 2px;
        border-style: solid;
    }
</style>