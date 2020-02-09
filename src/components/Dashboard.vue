<template>
    <v-container fluid fill-height class="v-container-grey-bg">
        <v-row style="align-content: center;alignment: center;align-items: center;justify-content: center;justify-items: center;">
            <profile-view/>
        </v-row>
    </v-container>
</template>

<script>
    // import MainChart from "@/components/mainChart";
    import ProfileView from "@/components/ProfileView";
    export default {
        name: "Dashboard",
        components: {
            ProfileView

        }
    }
</script>

<style scoped>
    .v-container-grey-bg {
        background-color: #f4f5f7;
        border-radius: 0px !important;
        elevation: 0!important;
    }
</style>