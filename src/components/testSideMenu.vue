<template>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
    >
        <v-list-item>

            <v-row>
                <div  style="padding-right: 210px;margin-top: -15px">
                    <v-btn
                            class="v-btn-side-menu"
                            @click.stop="drawer = !drawer"
                            fab
                            small
                            dark
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </v-row>

            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "testSideMenu",
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' },
                ],
            }
        },
    }
</script>

<style scoped>
    .v-btn-side-menu {
        width: 35px;
        height: 35px;
        background-image: linear-gradient( to right, #e005c5 5%, #ebafff 51%, #ebafff 100%);
    }
</style>