<template>
    <v-toolbar class="transparent" flat dense>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-badge
                    color="pink"
                    dot
                    overlap
            >
                <v-icon color="indigo darken-4">mdi-bell-outline</v-icon>
            </v-badge>
        </v-btn>
        <v-btn icon>
            <v-icon color="indigo darken-4">mdi-settings-outline</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon color="indigo darken-4">mdi-login-variant</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "HomeToolbar"
    }
</script>

<style scoped>

</style>