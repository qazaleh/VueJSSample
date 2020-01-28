<template>
    <div>
        <v-alert
                class="systemAlert"
                v-model="alert"
                close-text="Close Alert"
                color="#172b4d"
                dark
                dismissible
        >
            پیام‌های سیستم اینجا میاد…
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: "SystemAlert",
        alert: true,

    }
</script>

<style scoped>
.systemAlert {
    font-size: smaller;
    font-family: 'IRANSansMobile(FaNum)';
    color: white;
}
</style>