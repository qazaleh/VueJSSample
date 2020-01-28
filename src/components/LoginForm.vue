<template>
    <v-container>
        <v-card class="mt-lg-12 mx-auto pa-xs-auto pa-sm-5 pa-md-8 pa-lg-12" :elevation="3" max-width="600" max-height="500">
<!--                    <v-app-bar flat>-->
<!--&lt;!&ndash;                        <v-toolbar-title class="display-1 text-uppercase">&ndash;&gt;-->
<!--&lt;!&ndash;                            <span class="font-weight-light">{{ loginLabel }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;                        </v-toolbar-title>&ndash;&gt;-->
<!--                    </v-app-bar>-->
                        <v-card-title class="ms-n3 mt-n1">
                            Login
                        </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="username" :label="userLabel" color="cyan darken-1" required></v-text-field>
                        <v-text-field type="password" v-model="password" :label="passwordLabel" color="cyan darken-1" required></v-text-field>
                    </v-card-text>
            <div class="text-center">
                <v-card-actions>
                <v-btn
                        block
                        text
                        color="cyan darken-1"
                        @click="login()">{{ loginLabel }}
                </v-btn>
                </v-card-actions>
            </div>


                </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "LoginForm",
        props:{
            userLabel :{
                type: String,
                default: 'User Name'
            },
            passwordLabel:{
                type: String,
                default: 'Password'
            },
            loginLabel: {
                type:String,
                default:'Login'
            }
        },

        methods: {
            login () {
                let data = null
                data = {
                    username: this.username,
                    password: this.password
                }
                this.$emit('login', data)
            }
        }
    }
</script>

<style scoped>

</style>