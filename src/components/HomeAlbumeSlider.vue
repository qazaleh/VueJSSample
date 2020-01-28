<template>
    <v-carousel
            :continuous="true"
            cycle
            show-arrows-on-hover
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            >
        <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "HomeAlbumeSlider",
        data () {
            return {
                items: [

                    {
                        src: 'https://www.seekpng.com/png/detail/371-3718744_print-collateral-for-northwestern-university-kellogg-brochure.png',
                    },
                    {
                        src: 'https://www.considercreative.co.uk/uploads/_CGSmartImage/img-ba2912fc2f267066e3cc77ee22b4688f.jpg',
                    },
                    {
                        src: 'https://1aike31wshtt3k0e9u2nxtwz-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/beautiful-branding-psychological-centre-empatium-3-770x554.jpg',
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>