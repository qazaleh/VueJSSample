<template>
    <v-container fluid fill-height >
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

</style>