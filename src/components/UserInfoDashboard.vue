<template>

    <v-card height="fixed " class="transparent" flat align="center">
    <v-img class="profileImage" src="https://static.tildacdn.com/tild6261-3435-4334-a539-643037376464/red_girl.jpg" style="padding-right: 16px"></v-img>
        <div class="userInfo" style="align-content: center; text-align: center; padding-top: 8px">
            <body>نرگس غریب</body>
            <div class="userInfo" style="padding-top: 7px;padding-bottom: 14px">
                0912 42 44 384
            </div>
        </div>
        <v-divider></v-divider>
    </v-card>

</template>

<script>
    export default {
        name: "UserInfoDashboard"
    }
</script>

<style scoped>
.profileImage{
    border-radius: 10px;
    width: 89px;
    height: 89px;
    alignment: center;
    align-content: center;

}
.userInfo{
    color: grey;
    font-family: 'IRANSansMobile(FaNum)';
    font-size: smaller;
}

.userInfo body {
    color: #253858;
    font-size: small;
    font-family: 'IRANSansMobile(FaNum)';
}
</style>