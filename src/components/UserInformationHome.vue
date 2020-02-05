<template>
    <v-container fluid>
    <v-row justify="center" align-content="center">
        <v-img class="profileImage" src="https://static.tildacdn.com/tild6261-3435-4334-a539-643037376464/red_girl.jpg" style="padding-right: 16px"></v-img>
    </v-row>
        <v-row justify="center" align-content="center">
            <div class="userInfo" style="align-content: center; text-align: center; padding-top: 8px">
                <body>نرگس غریب</body>
            </div>
        </v-row>
        <v-row justify="center" align-content="center">
            <div class="userInfo" style="padding-top: 7px;padding-bottom: 14px">
                0912 42 44 384
            </div>
        </v-row>
    <v-row>
        <v-divider>
            class="mx-0"
            vertical
        </v-divider>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "UserInformationHome"
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