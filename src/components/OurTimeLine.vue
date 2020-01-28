<template>
    <v-timeline align-top="true" dense="true">
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-a' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 1</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-b' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 2</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-c' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 3</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-d' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 4</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-e' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 5</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-f' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 6</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-f' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 7</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-g' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 8</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-h' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 9</v-timeline-item>
        <v-timeline-item
                :fill-dot="fillDot"
                :hide-dot="hideDot"
                :icon="true ? 'mdi-alpha-i' : ''"
                :icon-color=" true ? 'deep-purple lighten-4' : ''"
                :right="true"
                :small="false"
                class="text-center">Step 10</v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name: "OurTimeLine",
        data: () => ({
            alignTop: false,
            avatar: false,
            dense: false,
            fillDot: false,
            hideDot: false,
            icon: false,
            iconColor: false,
            left: false,
            reverse: false,
            right: false,
            small: false,
        }),
    }
</script>

<style scoped>

</style>