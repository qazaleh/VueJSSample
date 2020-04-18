<template>
    <v-container fluid fill-height class="v-container-grey-shadow">
            <PanelMainView v-if="this.isUserRegisterCompleted()"/>
             <profile-view v-else/>

    </v-container>
</template>

<script>
    import ProfileView from "@/components/ProfileView";
    import PanelMainView from "@/components/PanelMainView";
    export default {
        name: "Dashboard",
        components: {
            // PanelMainView,
            PanelMainView,
            ProfileView
        },
        methods: {
            isUserRegisterCompleted: function () {
                    return  localStorage.userProfileComplete;
            },
        }
    }

</script>

<style scoped>
    .v-container-grey-shadow {
        background-color: #f4f5f7;
        border-radius: 18px !important;
        elevation: higher;
    }
</style>