<template>
        <v-date-picker v-model="picker" class="toDayCal" >
        </v-date-picker>
</template>

<script>
    export default {
        name: "MYDatePicker",
        data () {
            return {
                picker: new Date().toISOString().substr(0, 10),
            }
        },
    }
</script>

<style scoped>
.toDayCal{
    width: 100%;
    height: 100%;
}
</style>