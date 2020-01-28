<template>
    <div class="dashboard">

                    <section >
                        <core-chart></core-chart>
                        <chart-view/>
                        <v-row >
                        <v-col xs="3" sm="3" md="3" lg="2" xl="2" class="flex-fill">
                            <v-card height="100%" >
                                <hovers-grid/>
                                <our-time-line/>
                            </v-card>
                        </v-col>
                            <v-col xs="9" sm="9" md="9" lg="8" xl="8" class="flex-fill">
                            <v-card color="deep-purple lighten-4"  align="center" >
                                <payments-data-table/>
                            </v-card>
                                <v-card  color="grey darken-1">
                                    <home-albume-slider/>
                                </v-card>
                        </v-col>
                        <v-col xs="3" sm="3" md="3" lg="2" xl="2" class="flex-fill">
                            <v-card flat>
                                    <m-y-date-picker/>
                            </v-card>
                        </v-col>
                        </v-row>
                    </section>
        <contact-footer/>

    </div>

</template>
<script>
    import MYDatePicker from "@/components/MYDatePicker";
    import HoversGrid from "@/components/HoversGrid";
    import OurTimeLine from "@/components/OurTimeLine";
    import PaymentsDataTable from "@/components/PaymentsDataTable";
    import HomeAlbumeSlider from "@/components/HomeAlbumeSlider";
    import ContactFooter from "@/components/ContactFooter";
    export default {

        name: "Dashboard",
        components: {
            MYDatePicker,
            OurTimeLine,
            PaymentsDataTable,
            HomeAlbumeSlider,
            HoversGrid,
            ContactFooter
        },

    }
</script>

<style scoped>

</style>