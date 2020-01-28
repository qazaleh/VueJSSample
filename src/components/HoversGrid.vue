<template>

        <v-container fluid wrap class="grey lighten-5" grid-list-md>
            <v-row>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-hover v-slot:default="{ hover }">
                    <v-card
                            class="mx-auto"
                            color="grey lighten-4"
                    >
                        <v-img
                                :aspect-ratio="16/9"
                                src="https://cdn.dribbble.com/users/2337848/screenshots/6587655/payment-options-dribbble.jpg"
                        >
                            <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-linear-out-slow-in grey darken-3 v-card--reveal headline white--text"
                                        style="height: 100%;"
                                >
                                    $150.45
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="py-2"
                                     style="position: relative;">
                                bank Payments
                        </v-card-text>
                    </v-card>
                    </v-hover>
                </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-hover v-slot:default="{ hover }">
                    <v-card
                            class="mx-auto"
                            color="grey lighten-4"
                    >
                        <v-img
                                :aspect-ratio="16/9"
                                src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2019/12/Biometric-Payment-Cards-What%E2%80%99s-Actually-in-It-for-You-750x430.jpg"
                        >
                            <v-expand-transition>
                                <div
                                        v-if="hover"
                                        class="d-flex transition-linear-out-slow-in grey darken-3 v-card--reveal headline white--text"
                                        style="height: 100%;"
                                >
                                    $23.45
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="py-2"
                                     style="position: relative;">
                            pos payments
                        </v-card-text>
                    </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-hover v-slot:default="{ hover }">

                        <v-card
                                class="mx-auto"
                                color="grey lighten-4"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    src="https://assets.entrepreneur.com/content/3x2/2000/20190617210501-GettyImages-1020771668.jpeg"
                            >
                                <v-expand-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-linear-out-slow-in grey darken-3 v-card--reveal headline white--text"
                                            style="height: 100%;"
                                    >
                                        $765.45
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <v-card-text class="py-2"
                                         style="position: relative;">
                                test payments
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                                class="mx-auto"
                                color="grey lighten-4"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    src="https://cdn.dribbble.com/users/121630/screenshots/6799643/wallet_-_crypto_instant_payment_-_spot_illustration_1x_2x.png"
                            >
                                <v-expand-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-linear-out-slow-in grey darken-3 v-card--reveal headline white--text"
                                            style="height: 100%;"
                                    >
                                        $295.45
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <v-card-text class="py-2"
                                         style="position: relative;">
                                total payments
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        name: "HoversGrid"
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>
