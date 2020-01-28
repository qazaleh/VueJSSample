<template>
    <v-data-table
        :headers="headers"
        :items="pays"
        >
        <template v-slot:item.amount="{ item }">
            <v-chip :color="getColor(item.amount)" dark>{{ item.amount }}</v-chip>
        </template>
    </v-data-table>

</template>

<script>
    export default {
        name: "PaymentsDataTable",
        data () {
            return {
                headers: [
                    {
                        text: 'Payment Descriptions',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'amount', value: 'amount' },
                    { text: 'date', value: 'date' },
                    { text: 'type', value: 'type' },
                    { text: 'description', value: 'description' },
                    { text: 'total', value: 'total' },
                ],
                pays: [
                    {
                        name: 'payment1',
                        amount: 1000,
                        date: '1398/12/1',
                        type: 'deposit',
                        description: 'payment 1 description',
                        total: '1000',
                    },
                    {
                        name: 'payment2',
                        amount: 1000,
                        date: '1398/12/2',
                        type: 'deposit',
                        description: 'payment 2 description',
                        total: '1000',
                    },
                    {
                        name: 'payment3',
                        amount: 10,
                        date: '1398/12/3',
                        type: 'deposit',
                        description: 'payment 3 description',
                        total: '10',
                    },
                    {
                        name: 'payment4',
                        amount: 2000,
                        date: '1398/12/4',
                        type: 'deposit',
                        description: 'payment 4 description',
                        total: '2000',
                    },
                    {
                        name: 'payment5',
                        amount: -12000000,
                        date: '1398/12/5',
                        type: 'deposit',
                        description: 'payment 5 description',
                        total: '12000000',
                    },
                    {
                        name: 'payment6',
                        amount: 5500000,
                        date: '1398/12/6',
                        type: 'deposit',
                        description: 'payment 6 description',
                        total: '5500000',
                    },
                    {
                        name: 'payment7',
                        amount: 125000,
                        date: '1398/12/7',
                        type: 'deposit',
                        description: 'payment 7 description',
                        total: '1000',
                    },
                    {
                        name: 'payment8',
                        amount: -12000,
                        date: '1398/12/8',
                        type: 'deposit',
                        description: 'payment 8 description',
                        total: '12000',
                    },
                    {
                        name: 'payment9',
                        amount: 1080,
                        date: '1398/12/9',
                        type: 'deposit',
                        description: 'payment 9 description',
                        total: '1080',
                    },
                    {
                        name: 'payment10',
                        amount: -70,
                        date: '1398/12/10',
                        type: 'deposit',
                        description: 'payment 10 description',
                        total: '70',
                    },
                ],
            }
        },
        methods: {
            getColor (amounts) {
                if (amounts < 0) return 'red'
                else return 'green'
            },
        },
    }
</script>

<style scoped>

</style>