<template>
    <div id="homeTransactionsTable">
        <v-card flat style="border-radius: 15px">
            <p style="font-family: 'IRANSansMobile(FaNum)'; font-size: small; color: black; alignment: right; padding-right: 8px; padding-top: 8px">آخرین تراکنش‌ها</p>
        <v-simple-table  height="fixed" style="border-radius: 15px ;">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right defaultTable" style="color: grey">تاریخ</th>
                    <th class="text-right defaultTable" style="color: grey">عنوان</th>
                    <th class="text-right defaultTable" style="color: grey">بابت</th>
                    <th class="text-right defaultTable" style="color: grey">وضعیت</th>
                    <th class="text-right defaultTable" style="color: grey">عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="item in items" :key="item.name" >
                    <td class="text-right defaultTableItem">{{ item.date }}</td>
                    <td class="text-right defaultTableItem">{{ item.title }}</td>
                    <td class="text-right defaultTableItem">{{ item.transType }}</td>
                    <td class="text-right defaultTableItem">{{ item.result }}</td>
                    <td class="text-right defaultTableItem">{{ item.action }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "HomeTransactionsTable",
        data: () => ({
                items: [
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                    {
                        date: '1398/12/8',
                        title: 'پرداخت' ,
                        transType: 'بدهی' ,
                        result: 'موفق',
                        action: 'عملیات پرداخت'
                    },
                ]
            }),
    }
</script>

<style scoped>
.defaultTable{
    font-size: x-small;
    font-family: 'IRANSansMobile(FaNum)';
}
.defaultTableItem{
    font-size: xx-small;
    font-family: 'IRANSansMobile(FaNum)';
}
tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
}
table tr:hover td {
    background-color: transparent;
    opacity: 1.0;
}

</style>