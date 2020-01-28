<template>
    <v-footer
            dark
            padless
            color="deep-purple darken-4"
            fixed

    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="deep-purple darken-4">
                <strong class="subheading">You Can Connect US By Our Social Media Accounts!</strong>

                <v-spacer></v-spacer>

                <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4"
                        dark
                        icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "ContactFooter",
        data: () => ({
            icons: [
                'mdi-instagram',
                'mdi-linkedin',
                'mdi-twitter',

            ],
        }),
    }
</script>

<style scoped>

</style>